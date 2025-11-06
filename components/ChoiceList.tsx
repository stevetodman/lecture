/**
 * ChoiceList - NBME-style multiple choice
 * Keyboard 1-5, clear selection state, intentional spacing
 */

"use client";

import { useEffect } from "react";
import { useQuizStore } from "@/lib/store";

interface ChoiceListProps {
  choices: string[];
  answer: string;
}

export default function ChoiceList({ choices, answer }: ChoiceListProps) {
  const { selectedChoice, selectChoice, quizState } = useQuizStore();

  const isRevealed = quizState === "revealed";

  // Keyboard support - numbers 1-5
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (quizState === "answered" || quizState === "revealed") return;

      const num = parseInt(e.key);
      if (num >= 1 && num <= 5 && choices[num - 1]) {
        selectChoice(choices[num - 1]);
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [choices, selectChoice, quizState]);

  const getChoiceStyle = (choice: string) => {
    if (!isRevealed) {
      return selectedChoice === choice
        ? "bg-blue-100 border-blue-500 ring-2 ring-blue-200"
        : "bg-white border-slate-200 hover:border-blue-300";
    }

    // Revealed state
    if (choice === answer) {
      return "bg-green-50 border-green-500 ring-2 ring-green-200";
    }
    if (selectedChoice === choice && choice !== answer) {
      return "bg-red-50 border-red-500 ring-2 ring-red-200";
    }
    return "bg-slate-50 border-slate-200 opacity-50";
  };

  const getChoiceIcon = (choice: string) => {
    if (!isRevealed) return null;

    if (choice === answer) {
      return (
        <svg
          className="w-5 h-5 text-green-600"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          />
        </svg>
      );
    }
    if (selectedChoice === choice) {
      return (
        <svg
          className="w-5 h-5 text-red-600"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
            clipRule="evenodd"
          />
        </svg>
      );
    }
    return null;
  };

  return (
    <div className="space-y-3">
      {choices.map((choice, index) => (
        <button
          key={index}
          onClick={() => !isRevealed && selectChoice(choice)}
          disabled={isRevealed}
          className={`w-full text-left px-4 py-3 rounded-lg border-2 transition-all ${getChoiceStyle(choice)} ${!isRevealed ? "cursor-pointer" : "cursor-default"}`}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-sm font-mono text-slate-500">
                {index + 1}
              </span>
              <span className="font-medium text-slate-900">{choice}</span>
            </div>
            {getChoiceIcon(choice)}
          </div>
        </button>
      ))}
    </div>
  );
}
