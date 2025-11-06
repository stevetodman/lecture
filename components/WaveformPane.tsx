/**
 * WaveformPane - The visual heart of timing comprehension
 * Displays phonocardiogram with S1/S2 markers and systole shading
 */

"use client";

import Image from "next/image";

interface WaveformPaneProps {
  imageUrl: string;
  altText?: string;
}

export default function WaveformPane({
  imageUrl,
  altText = "Phonocardiogram waveform",
}: WaveformPaneProps) {
  return (
    <div className="relative w-full bg-slate-50 border border-slate-200 rounded-lg overflow-hidden">
      <div className="aspect-[16/5] relative">
        {/* Placeholder for waveform image */}
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-slate-100 to-slate-50">
          {/* S1 and S2 markers overlaid */}
          <div className="relative w-full h-full flex items-center px-8">
            <div className="flex-1 flex justify-between items-center">
              <div className="flex flex-col items-center">
                <div className="w-1 h-16 bg-blue-600" />
                <span className="text-xs font-mono text-blue-600 mt-1">
                  S1
                </span>
              </div>
              <div className="flex-1 mx-4 h-12 bg-blue-100 bg-opacity-30 rounded relative">
                <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xs text-blue-500 font-mono">
                  systole
                </span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-1 h-16 bg-red-600" />
                <span className="text-xs font-mono text-red-600 mt-1">S2</span>
              </div>
              <div className="flex-1 mx-4" />
              <div className="flex flex-col items-center">
                <div className="w-1 h-16 bg-blue-600" />
                <span className="text-xs font-mono text-blue-600 mt-1">
                  S1
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Actual waveform image when available */}
        {imageUrl && imageUrl !== "/waveforms/placeholder.png" && (
          <Image
            src={imageUrl}
            alt={altText}
            fill
            className="object-contain mix-blend-multiply"
            priority
          />
        )}
      </div>

      {/* Timing hint */}
      <div className="px-4 py-2 bg-white border-t border-slate-200">
        <p className="text-xs text-slate-600">
          <span className="font-semibold">Focus:</span> Is it systolic (S1→S2),
          diastolic (S2→S1), or continuous?
        </p>
      </div>
    </div>
  );
}
