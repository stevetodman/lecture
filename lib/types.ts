/**
 * Core type definitions for Guess the Murmur
 * Every type is intentional, every field carries meaning
 */

export type ManeuverEffect = "↑" | "↓" | "↔";

export type Difficulty = "easy" | "core" | "hard";

export type Site = "RUSB" | "LLSB" | "Apex" | "LUSB" | "L infraclavicular";

export interface MurmurCase {
  id: string;
  media: {
    audio_url: string;
    image_url: string;
  };
  choices: [string, string, string, string, string]; // exactly 5
  answer: string;
  explain: {
    correct: string;
    differentials: string[];
  };
  tags: string[];
  maneuver_effects: {
    standing?: ManeuverEffect;
    squat?: ManeuverEffect;
    inspiration?: ManeuverEffect;
  };
  meta: {
    difficulty: Difficulty;
    site_hint: Site;
  };
}

export interface AttemptRecord {
  caseId: string;
  correct: boolean;
  latencyMs: number;
  timestamp: number;
}

export interface LearningStats {
  streak: number;
  totalAttempts: number;
  correctAttempts: number;
  perLesionAccuracy: Record<string, { correct: number; total: number }>;
  attempts: AttemptRecord[];
}

export type QuizState =
  | "idle"
  | "playing"
  | "paused"
  | "answered"
  | "revealed";
