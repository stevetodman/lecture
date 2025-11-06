/**
 * Zustand store - the beating heart of state management
 * State flows like a clear stream, every action intentional
 */

import { create } from "zustand";
import { persist } from "zustand/middleware";
import { MurmurCase, QuizState, LearningStats, AttemptRecord } from "./types";
import { CANONICAL_CASES, getRandomCases } from "./cases";

interface QuizStore {
  // Current quiz state
  currentCase: MurmurCase | null;
  quizState: QuizState;
  selectedChoice: string | null;
  startTime: number | null;
  isPlaying: boolean;

  // Learning analytics
  stats: LearningStats;

  // Actions
  loadNextCase: () => void;
  selectChoice: (choice: string) => void;
  reveal: () => void;
  nextCase: () => void;
  togglePlay: () => void;
  setQuizState: (state: QuizState) => void;
  exportCSV: () => string;
  resetStats: () => void;
}

const initialStats: LearningStats = {
  streak: 0,
  totalAttempts: 0,
  correctAttempts: 0,
  perLesionAccuracy: {},
  attempts: [],
};

export const useQuizStore = create<QuizStore>()(
  persist(
    (set, get) => ({
      // Initial state
      currentCase: null,
      quizState: "idle",
      selectedChoice: null,
      startTime: null,
      isPlaying: false,
      stats: initialStats,

      // Load next random case
      loadNextCase: () => {
        const cases = getRandomCases(1);
        if (cases.length > 0) {
          set({
            currentCase: cases[0],
            quizState: "idle",
            selectedChoice: null,
            startTime: Date.now(),
            isPlaying: false,
          });
        }
      },

      // Select an answer
      selectChoice: (choice: string) => {
        const { currentCase, startTime, stats } = get();
        if (!currentCase || !startTime) return;

        const correct = choice === currentCase.answer;
        const latencyMs = Date.now() - startTime;

        // Record attempt
        const attempt: AttemptRecord = {
          caseId: currentCase.id,
          correct,
          latencyMs,
          timestamp: Date.now(),
        };

        // Update per-lesion accuracy
        const lesion = currentCase.answer;
        const lesionStats = stats.perLesionAccuracy[lesion] || {
          correct: 0,
          total: 0,
        };
        lesionStats.total += 1;
        if (correct) lesionStats.correct += 1;

        // Update global stats
        const newStats: LearningStats = {
          streak: correct ? stats.streak + 1 : 0,
          totalAttempts: stats.totalAttempts + 1,
          correctAttempts: stats.correctAttempts + (correct ? 1 : 0),
          perLesionAccuracy: {
            ...stats.perLesionAccuracy,
            [lesion]: lesionStats,
          },
          attempts: [...stats.attempts, attempt],
        };

        set({
          selectedChoice: choice,
          quizState: "answered",
          stats: newStats,
        });
      },

      // Reveal answer and feedback
      reveal: () => {
        set({ quizState: "revealed" });
      },

      // Load next case
      nextCase: () => {
        get().loadNextCase();
      },

      // Toggle audio playback
      togglePlay: () => {
        const { isPlaying, quizState } = get();
        set({
          isPlaying: !isPlaying,
          quizState: isPlaying ? "paused" : "playing",
        });
      },

      // Set quiz state directly
      setQuizState: (state: QuizState) => {
        set({ quizState: state });
      },

      // Export attempts as CSV
      exportCSV: () => {
        const { stats } = get();
        const header = "case_id,correct,latency_ms,timestamp\n";
        const rows = stats.attempts
          .map(
            (a) =>
              `${a.caseId},${a.correct},${a.latencyMs},${new Date(a.timestamp).toISOString()}`
          )
          .join("\n");
        return header + rows;
      },

      // Reset all stats
      resetStats: () => {
        set({ stats: initialStats });
      },
    }),
    {
      name: "murmur-quiz-storage",
      partialize: (state) => ({ stats: state.stats }), // Only persist stats
    }
  )
);
