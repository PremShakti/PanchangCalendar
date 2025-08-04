"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@/components/ui/button";
import { goToNextMonth } from "@/store/actions/monthNavigationSlice";

interface NextMonthButtonProps {
  className?: string;
}

const NextMonthButton: React.FC<NextMonthButtonProps> = ({ 
  className = "bg-blue-100 text-black hover:text-white w-10 h-10"
}) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { currentMonth, monthNames } = useSelector((state: any) => state.monthNavigation);

  const handleNext = () => {
    const currentIndex = monthNames.findIndex(
      (name: string) => name.toLowerCase() === currentMonth.toLowerCase()
    );
    const validIndex = currentIndex !== -1 ? currentIndex : 0;
    const nextIndex = validIndex === 11 ? 0 : validIndex + 1;
    const nextMonth = monthNames[nextIndex];
    
    dispatch(goToNextMonth());
    router.push(`/${nextMonth}`);
  };

  return (
    <Button onClick={handleNext} className={className}>
      →
    </Button>
  );
};

export default NextMonthButton;
