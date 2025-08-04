"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { setCurrentMonth } from "@/store/actions/monthNavigationSlice";

interface MonthSelectorProps {
  className?: string;
  triggerClassName?: string;
  contentClassName?: string;
}

const MonthSelector: React.FC<MonthSelectorProps> = ({
  className = "bg-blue-100 text-black hover:text-white w-10 ",
  triggerClassName = "w-[60px] text-xs sm:text-sm sm:w-[140px] bg-blue-100 text-black ",
  contentClassName = "text-xs sm:text-sm",
}) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { currentMonth, monthNames, monthDisplayNames } = useSelector(
    (state: any) => state.monthNavigation
  );

  const handleMonthSelect = (selectedMonth: string) => {
    dispatch(setCurrentMonth(selectedMonth));
    router.push(`/${selectedMonth}`);
  };

  return (
    <div className={className}>
      <Select value={currentMonth} onValueChange={handleMonthSelect}>
        <SelectTrigger className={triggerClassName}>
          <SelectValue />
        </SelectTrigger>
        <SelectContent className={contentClassName}>
          {monthNames.map((month: string, index: number) => (
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
  );
};

export default MonthSelector;
