"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@/components/ui/button";
import { goToPreviousMonth } from "@/store/actions/monthNavigationSlice";

interface PreviousMonthButtonProps {
  className?: string;
}

const PreviousMonthButton: React.FC<PreviousMonthButtonProps> = ({ 
  className = "bg-blue-100 text-black hover:text-white w-10 h-10"
}) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { currentMonth, monthNames } = useSelector((state: any) => state.monthNavigation);

  const handlePrevious = () => {
    const currentIndex = monthNames.findIndex(
      (name: string) => name.toLowerCase() === currentMonth.toLowerCase()
    );
    const validIndex = currentIndex !== -1 ? currentIndex : 0;
    const prevIndex = validIndex === 0 ? 11 : validIndex - 1;
    const prevMonth = monthNames[prevIndex];
    
    dispatch(goToPreviousMonth());
    router.push(`/${prevMonth}`);
  };

  return (
    <Button onClick={handlePrevious} className={className}>
      ←
    </Button>
  );
};

export default PreviousMonthButton;
