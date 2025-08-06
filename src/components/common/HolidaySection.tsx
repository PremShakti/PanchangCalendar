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

  // Corresponding background colors
  const bgColors = [
    "bg-red-600",
    "bg-blue-600",
    "bg-green-600",
    "bg-purple-600",
    "bg-orange-600",
    "bg-pink-600",
    "bg-indigo-600",
    "bg-teal-600",
    "bg-amber-600",
    "bg-rose-600",
    "bg-emerald-600",
    "bg-violet-600",
    "bg-cyan-600",
    "bg-lime-600",
    "bg-fuchsia-600",
  ];

  return (
      <div className="max-w-6xl mx-auto ">
        <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          Festivals 2025
        </h1>

        <div className="grid grid-cols-2 lg:grid-cols-6 border mx-auto w-fit ">
          {sortedHolidays.map((holiday, index) => {
            const colorClass = classicColors[index % classicColors.length];
            const bgColorClass = bgColors[index % bgColors.length];
            return (
              <div 
                key={`${holiday.date}-${index}`}
                className="flex items-start justify-center px-1.5 space-x-2 py-1.5 border"
              >
                <div className={`w-2 h-2 rounded-full ${bgColorClass} mt-1 flex-shrink-0`}></div>
                <div className="flex-1 min-w-0">
                  
                  <div className={`text-sm  font-semibold ${colorClass} leading-relaxed`}>
                    {holiday.title}
                  </div>
                  <div className={`text-sm  ${colorClass}`}>
                    {formatDate(holiday.date)}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
  
  );
}
