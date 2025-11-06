/**
 * Main Quiz Interface
 * The single screen where everything comes together
 */

"use client";

import { useEffect } from "react";
import { useQuizStore } from "@/lib/store";
import WaveformPane from "@/components/WaveformPane";
import AudioControls from "@/components/AudioControls";
import ChoiceList from "@/components/ChoiceList";
import RevealPanel from "@/components/RevealPanel";
import SiteMap from "@/components/SiteMap";
import ProgressBar from "@/components/ProgressBar";

export default function Home() {
  const { currentCase, loadNextCase, quizState } = useQuizStore();

  // Load first case on mount
  useEffect(() => {
    if (!currentCase) {
      loadNextCase();
    }
  }, [currentCase, loadNextCase]);

  if (!currentCase) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4" />
          <p className="text-slate-600">Loading cases...</p>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-8 px-4">
      <div className="max-w-5xl mx-auto space-y-6">
        {/* Header */}
        <header className="text-center space-y-2">
          <h1 className="text-4xl font-bold text-slate-900">
            🎧 Guess the Murmur
          </h1>
          <p className="text-slate-600">
            Link timing → sound → diagnosis. Master the ear.
          </p>
        </header>

        {/* Progress Bar */}
        <ProgressBar />

        {/* Main Quiz Area */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left column - Waveform + Audio + Choices */}
          <div className="lg:col-span-2 space-y-6">
            {/* Waveform */}
            <WaveformPane
              imageUrl={currentCase.media.image_url}
              altText={`Phonocardiogram for case ${currentCase.id}`}
            />

            {/* Audio Controls */}
            <div className="bg-white border-2 border-slate-200 rounded-lg p-6">
              <AudioControls audioUrl={currentCase.media.audio_url} />
            </div>

            {/* Choices */}
            <div className="bg-white border-2 border-slate-200 rounded-lg p-6">
              <h2 className="font-semibold text-slate-900 mb-4">
                What murmur do you hear?
              </h2>
              <ChoiceList
                choices={currentCase.choices}
                answer={currentCase.answer}
              />
            </div>

            {/* Reveal Panel */}
            <RevealPanel case_={currentCase} />
          </div>

          {/* Right column - Site Map (sticky) */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <SiteMap
                activeSite={
                  quizState === "revealed"
                    ? currentCase.meta.site_hint
                    : undefined
                }
                showLabels={true}
              />

              {/* Hint card */}
              <div className="mt-4 bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h3 className="font-semibold text-blue-900 text-sm mb-2">
                  💡 Quick Tips
                </h3>
                <ul className="text-xs text-blue-800 space-y-1">
                  <li>
                    • Listen for <strong>timing</strong>: systolic vs diastolic
                  </li>
                  <li>
                    • Notice <strong>shape</strong>: crescendo, decrescendo,
                    plateau
                  </li>
                  <li>
                    • Consider <strong>site</strong>: where it's loudest
                  </li>
                  <li>
                    • Think <strong>maneuvers</strong>: how it changes
                  </li>
                </ul>
              </div>

              {/* Case metadata */}
              {quizState === "revealed" && (
                <div className="mt-4 bg-slate-100 border border-slate-200 rounded-lg p-4 animate-fadeIn">
                  <h3 className="font-semibold text-slate-700 text-sm mb-2">
                    Case Info
                  </h3>
                  <div className="text-xs text-slate-600 space-y-1">
                    <div>
                      <strong>Difficulty:</strong>{" "}
                      <span className="capitalize">
                        {currentCase.meta.difficulty}
                      </span>
                    </div>
                    <div>
                      <strong>Tags:</strong> {currentCase.tags.join(", ")}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center text-sm text-slate-500 pt-8 border-t border-slate-200">
          <p>
            Built with ❤️ for medical learners. Clinical content validated
            against UCSF, Stanford Medicine 25, NCBI StatPearls.
          </p>
        </footer>
      </div>
    </main>
  );
}
