"use client";

import { jharkhandHolidays2025 } from "@/lib/holidays/jharkhand";

export default function HolidaySection() {
  // Sort all holidays by date
  const sortedHolidays = jharkhandHolidays2025.sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      day: "2-digit",
      month: "short",
    });
  };

  // Classic color palette
  const classicColors = [
    "text-red-600",
    "text-blue-600",
    "text-green-600",
    "text-purple-600",
    "text-orange-600",
    "text-pink-600",
    "text-indigo-600",
    "text-teal-600",
    "text-amber-600",
    "text-rose-600",
    "text-emerald-600",
    "text-violet-600",
    "text-cyan-600",
    "text-lime-600",
    "text-fuchsia-600",
  ];

  return (
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          Jharkhand Holidays 2025
        </h1>

        <div className="text-sm sm:text-base leading-relaxed bg-white/70 backdrop-blur-sm rounded-lg p-6 shadow-lg">
          {sortedHolidays.map((holiday, index) => {
            const colorClass = classicColors[index % classicColors.length];
            return (
              <span key={`${holiday.date}-${index}`}>
                <span className={`font-bold ${colorClass}`}>
                  {formatDate(holiday.date)}
                </span>{" "}
                <span className={`font-medium ${colorClass}`}>
                  {holiday.title}
                </span>
                {index < sortedHolidays.length - 1 && (
                  <span className="text-gray-400 mx-1">•</span>
                )}
              </span>
            );
          })}
        </div>
      </div>
  
  );
}
