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

  // Classic Indian color palette
  const classicColors = [
    "text-saffron-dark",
    "text-kumkum",
    "text-gold-dark",
    "text-peacock-blue",
    "text-tulsi-green",
    "text-lotus",
    "text-sindoor",
    "text-charcoal",
    "text-saffron",
    "text-kumkum-dark",
    "text-gold",
    "text-earth-dark",
  ];

  // Corresponding background colors
  const bgColors = [
    "bg-saffron-dark",
    "bg-kumkum",
    "bg-gold-dark",
    "bg-peacock-blue",
    "bg-tulsi-green",
    "bg-lotus",
    "bg-sindoor",
    "bg-charcoal",
    "bg-saffron",
    "bg-kumkum-dark",
    "bg-gold",
    "bg-earth-dark",
  ];

  return (
      <div className="max-w-6xl mx-auto ">
        <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6 bg-gradient-to-r from-saffron-darker via-kumkum-dark to-sindoor bg-clip-text text-transparent font-devanagari">
          त्यौहार 2025 • Festivals 2025
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
