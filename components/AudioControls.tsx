/**
 * AudioControls - Elegant audio playback with keyboard support
 * Spacebar toggles, accessible, intentional
 */

"use client";

import { useEffect, useRef } from "react";
import { useQuizStore } from "@/lib/store";

interface AudioControlsProps {
  audioUrl: string;
}

export default function AudioControls({ audioUrl }: AudioControlsProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const { isPlaying, togglePlay, quizState } = useQuizStore();

  // Handle audio playback
  useEffect(() => {
    if (!audioRef.current) return;

    if (isPlaying && quizState !== "revealed") {
      audioRef.current.play().catch((err) => {
        console.warn("Audio playback failed:", err);
      });
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, quizState]);

  // Keyboard support - spacebar
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.code === "Space" && quizState !== "revealed") {
        e.preventDefault();
        togglePlay();
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [togglePlay, quizState]);

  return (
    <div className="flex items-center justify-center gap-4">
      <audio ref={audioRef} src={audioUrl} loop />

      <button
        onClick={togglePlay}
        disabled={quizState === "revealed"}
        className="group relative w-16 h-16 rounded-full bg-blue-600 hover:bg-blue-700 disabled:bg-slate-300 disabled:cursor-not-allowed transition-all shadow-lg hover:shadow-xl active:scale-95"
        aria-label={isPlaying ? "Pause audio" : "Play audio"}
      >
        {isPlaying ? (
          <svg
            className="w-8 h-8 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <rect x="5" y="4" width="3" height="12" />
            <rect x="12" y="4" width="3" height="12" />
          </svg>
        ) : (
          <svg
            className="w-8 h-8 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 translate-x-0.5 text-white"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M6 4l10 6-10 6z" />
          </svg>
        )}
      </button>

      <div className="text-sm text-slate-600">
        <kbd className="px-2 py-1 bg-slate-100 border border-slate-300 rounded text-xs font-mono">
          space
        </kbd>
        <span className="ml-2">to {isPlaying ? "pause" : "play"}</span>
      </div>
    </div>
  );
}
