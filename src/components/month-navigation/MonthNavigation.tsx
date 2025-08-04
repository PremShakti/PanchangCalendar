"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type MonthNavigationProps = {
  currentMonth: string;
};

const MonthNavigation: React.FC<MonthNavigationProps> = ({ currentMonth }) => {
  const router = useRouter();
  const monthNames = [
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november",
    "december",
  ];

  const monthDisplayNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const currentIndex = monthNames.findIndex(
    (name) => name.toLowerCase() === currentMonth.toLowerCase()
  );
  const validIndex = currentIndex !== -1 ? currentIndex : 0;

  const handlePrevious = () => {
    const prevIndex = validIndex === 0 ? 11 : validIndex - 1; // Loop to December if at January
    const prevMonth = monthNames[prevIndex];
    router.push(`/${prevMonth}`);
  };

  const handleNext = () => {
    const nextIndex = validIndex === 11 ? 0 : validIndex + 1; // Loop to January if at December
    const nextMonth = monthNames[nextIndex];
    router.push(`/${nextMonth}`);
  };

  const handleMonthSelect = (selectedMonth: string) => {
    router.push(`/${selectedMonth}`);
  };

  return (
    <>
      {/* Previous Button */}
      <Button
        onClick={handlePrevious}
        className="bg-blue-100 text-black hover:text-white w-10 h-10 absolute top-[30px] left-[10px] md:left-[50px] lg:left-[200px]"
      >
        ←
      </Button>

      <div className="bg-blue-100 text-black hover:text-white w-10 h-10 absolute top-[30px] right-[200px] md:right-[100px] lg:right-[350px]">
        <Select value={currentMonth} onValueChange={handleMonthSelect}>
          <SelectTrigger className="w-[60px] text-xs sm:text-sm sm:w-[140px] bg-blue-100 text-black">
            <SelectValue />
          </SelectTrigger>
          <SelectContent className="text-xs sm:text-sm">
            {monthNames.map((month, index) => (
              <SelectItem
                key={month}
                value={month}
                className="text-xs sm:text-sm"
              >
                {monthDisplayNames[index]}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Next Button */}
      <Button
        onClick={handleNext}
        className="bg-blue-100 text-black hover:text-white w-10 h-10 absolute top-[30px] right-[10px] md:right-[50px] lg:right-[200px]"
      >
        →
      </Button>
    </>
  );
};

export default MonthNavigation;
