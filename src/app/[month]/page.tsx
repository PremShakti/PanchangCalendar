import CalanderSheet from "@/components/calander-sheet/CalanderSheet";
import {
  PreviousMonthButton,
  NextMonthButton,
  MonthSelector,
} from "@/components/month-navigation";
import React from "react";
import { january } from "@/lib/months-data/january";

import FlotingButton from "@/components/auth/FlotingButton";
import february from "@/lib/months-data/february";
import march from "@/lib/months-data/march";
import april from "@/lib/months-data/april";
import may from "@/lib/months-data/may";
import june from "@/lib/months-data/june";
import july from "@/lib/months-data/july";
import september from "@/lib/months-data/september";
import october from "@/lib/months-data/october";
import november from "@/lib/months-data/november";
import december from "@/lib/months-data/december";
import august from "@/lib/months-data/august";

type PageProps = {
  params: Promise<{
    month: string;
  }>;
};

const page: React.FC<PageProps> = async ({ params }) => {
  const { month } = await params;

  const months = [
    january,
    february,
    march,
    april,
    may,
    june,
    july,
    august,
    september,
    october,
    november,
    december,
  ];
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

  // Get the month index based on the month
  const monthIndex = monthNames.findIndex(
    (name) => name.toLowerCase() === month.toLowerCase()
  );
  const currentIndex = monthIndex !== -1 ? monthIndex : 0; // Default to 0 (January) if not found
  const selectedMonth = months[currentIndex];

  return (
    <div className="pb-10 mb-10 relative">
      <CalanderSheet params={{ month }} monthData={selectedMonth} />
      <FlotingButton />
    </div>
  );
};

export default page;
