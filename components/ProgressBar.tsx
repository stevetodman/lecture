/**
 * ProgressBar - Learning analytics at a glance
 * Streak, accuracy, export
 */

"use client";

import { useQuizStore } from "@/lib/store";

export default function ProgressBar() {
  const { stats, exportCSV } = useQuizStore();

  const accuracy =
    stats.totalAttempts > 0
      ? Math.round((stats.correctAttempts / stats.totalAttempts) * 100)
      : 0;

  const handleExport = () => {
    const csv = exportCSV();
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `murmur-quiz-${new Date().toISOString().split("T")[0]}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="bg-white border-2 border-slate-200 rounded-lg p-4">
      <div className="flex items-center justify-between gap-4">
        {/* Streak */}
        <div className="flex items-center gap-2">
          <div className="text-2xl">🔥</div>
          <div>
            <div className="text-xs text-slate-600">Streak</div>
            <div className="text-lg font-bold text-slate-900">
              {stats.streak}
            </div>
          </div>
        </div>

        {/* Accuracy */}
        <div className="flex items-center gap-2">
          <div className="text-2xl">🎯</div>
          <div>
            <div className="text-xs text-slate-600">Accuracy</div>
            <div className="text-lg font-bold text-slate-900">{accuracy}%</div>
          </div>
        </div>

        {/* Total attempts */}
        <div className="flex items-center gap-2">
          <div className="text-2xl">📊</div>
          <div>
            <div className="text-xs text-slate-600">Attempts</div>
            <div className="text-lg font-bold text-slate-900">
              {stats.totalAttempts}
            </div>
          </div>
        </div>

        {/* Export button */}
        {stats.totalAttempts > 0 && (
          <button
            onClick={handleExport}
            className="px-3 py-2 text-sm bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium rounded-lg transition-all border border-slate-300"
            title="Export attempts as CSV"
          >
            📥 Export
          </button>
        )}
      </div>
    </div>
  );
}
