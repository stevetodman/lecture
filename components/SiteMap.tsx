/**
 * SiteMap - Precordial listening sites
 * Lights up the primary site on reveal
 */

"use client";

import { Site } from "@/lib/types";

interface SiteMapProps {
  activeSite?: Site;
  showLabels?: boolean;
}

export default function SiteMap({
  activeSite,
  showLabels = true,
}: SiteMapProps) {
  const sites = [
    { name: "RUSB", x: 40, y: 20, label: "Aortic" },
    { name: "LUSB", x: 60, y: 20, label: "Pulmonic" },
    { name: "LLSB", x: 60, y: 50, label: "Tricuspid/VSD" },
    { name: "Apex", x: 70, y: 70, label: "Mitral" },
    { name: "L infraclavicular", x: 55, y: 10, label: "PDA" },
  ];

  const isActive = (siteName: string) => {
    return activeSite && siteName === activeSite;
  };

  return (
    <div className="bg-white border border-slate-200 rounded-lg p-4">
      <h3 className="text-sm font-semibold text-slate-700 mb-3">
        Listening Sites
      </h3>

      {/* Simple anatomical diagram */}
      <div className="relative w-full aspect-square bg-gradient-to-br from-slate-50 to-slate-100 rounded-lg border border-slate-200">
        {/* Chest outline */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
          {/* Sternum line */}
          <line
            x1="50"
            y1="10"
            x2="50"
            y2="80"
            stroke="#cbd5e1"
            strokeWidth="1"
            strokeDasharray="2,2"
          />

          {/* Sites */}
          {sites.map((site) => (
            <g key={site.name}>
              <circle
                cx={site.x}
                cy={site.y}
                r={isActive(site.name) ? 8 : 5}
                className={`transition-all duration-300 ${
                  isActive(site.name)
                    ? "fill-blue-500 stroke-blue-600 animate-pulse"
                    : "fill-slate-300 stroke-slate-400"
                }`}
                strokeWidth="2"
              />
              {showLabels && (
                <text
                  x={site.x}
                  y={site.y + 18}
                  textAnchor="middle"
                  className={`text-[6px] font-semibold transition-all ${
                    isActive(site.name) ? "fill-blue-700" : "fill-slate-600"
                  }`}
                >
                  {site.label}
                </text>
              )}
            </g>
          ))}
        </svg>
      </div>

      {activeSite && (
        <div className="mt-3 text-xs text-center">
          <span className="inline-block px-2 py-1 bg-blue-100 text-blue-700 rounded font-medium">
            Best heard at: {activeSite}
          </span>
        </div>
      )}
    </div>
  );
}
