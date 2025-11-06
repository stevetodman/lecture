/**
 * RevealPanel - Teaching moment
 * Clear explanation + "why not" differentials
 */

"use client";

import { useQuizStore } from "@/lib/store";
import { MurmurCase } from "@/lib/types";

interface RevealPanelProps {
  case_: MurmurCase;
}

export default function RevealPanel({ case_ }: RevealPanelProps) {
  const { selectedChoice, reveal, nextCase, quizState } = useQuizStore();

  const isCorrect = selectedChoice === case_.answer;
  const isRevealed = quizState === "revealed";

  if (quizState !== "answered" && quizState !== "revealed") {
    return null;
  }

  return (
    <div className="space-y-4 animate-fadeIn">
      {/* Reveal button or feedback */}
      {!isRevealed ? (
        <button
          onClick={reveal}
          className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all shadow-lg hover:shadow-xl active:scale-95"
        >
          Show Explanation
        </button>
      ) : (
        <div className="space-y-4">
          {/* Feedback header */}
          <div
            className={`p-4 rounded-lg border-2 ${isCorrect ? "bg-green-50 border-green-500" : "bg-amber-50 border-amber-500"}`}
          >
            <div className="flex items-center gap-2">
              {isCorrect ? (
                <>
                  <svg
                    className="w-6 h-6 text-green-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="font-semibold text-green-900">
                    Correct! {case_.answer}
                  </span>
                </>
              ) : (
                <>
                  <svg
                    className="w-6 h-6 text-amber-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="font-semibold text-amber-900">
                    Not quite. The answer is {case_.answer}
                  </span>
                </>
              )}
            </div>
          </div>

          {/* Correct explanation */}
          <div className="bg-white border-2 border-slate-200 rounded-lg p-4">
            <h3 className="font-semibold text-slate-900 mb-2">
              Why {case_.answer}?
            </h3>
            <p className="text-slate-700 leading-relaxed">
              {case_.explain.correct}
            </p>
          </div>

          {/* Maneuver effects */}
          {Object.keys(case_.maneuver_effects).length > 0 && (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-semibold text-blue-900 mb-2 text-sm">
                Maneuver Response
              </h4>
              <div className="flex gap-4 text-sm">
                {case_.maneuver_effects.standing && (
                  <div className="flex items-center gap-2">
                    <span className="text-slate-600">Standing:</span>
                    <span className="font-mono text-lg">
                      {case_.maneuver_effects.standing}
                    </span>
                  </div>
                )}
                {case_.maneuver_effects.squat && (
                  <div className="flex items-center gap-2">
                    <span className="text-slate-600">Squat:</span>
                    <span className="font-mono text-lg">
                      {case_.maneuver_effects.squat}
                    </span>
                  </div>
                )}
                {case_.maneuver_effects.inspiration && (
                  <div className="flex items-center gap-2">
                    <span className="text-slate-600">Inspiration:</span>
                    <span className="font-mono text-lg">
                      {case_.maneuver_effects.inspiration}
                    </span>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Differentials */}
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
            <h3 className="font-semibold text-slate-900 mb-3">
              Why not these?
            </h3>
            <ul className="space-y-2">
              {case_.explain.differentials.map((diff, index) => (
                <li
                  key={index}
                  className="text-sm text-slate-700 leading-relaxed flex gap-2"
                >
                  <span className="text-slate-400 font-bold">•</span>
                  <span>{diff}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Next case button */}
          <button
            onClick={nextCase}
            className="w-full px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white font-medium rounded-lg transition-all shadow-lg hover:shadow-xl active:scale-95"
          >
            Next Case →
          </button>
        </div>
      )}
    </div>
  );
}
