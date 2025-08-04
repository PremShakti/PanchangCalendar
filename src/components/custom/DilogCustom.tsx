import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import UserTextForm from "../calander-sheet/UserTextForm";
import FormTogeAndSubmitBtn from "./FormTogeAndSubmitBtn";
import { DilogTab } from "./DilogTab";
import Link from "next/link";

export function DilogCustom({
  children,
  event,
  title,
  discription,
  dayName,
  dateObj,
  dayNumber,
  hinduMonth,
  paksh,
  tithi,
  nakshatra,
  sunrise,
  sunset,
  url,
  date,
  monthName,
}: {
  children: React.ReactNode;
  title?: string;
  discription?: string;
  dayName: string;
  dateObj?: Date;
  dayNumber?: string;
  hinduMonth?: string;
  paksh?: string;
  tithi?: string;
  nakshatra?: string;
  sunrise?: string;
  sunset?: string;
  event?: any;
  url?: string;
  date: string;
  monthName?: string;
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Link
          href={"?date=" + date}
          className="shadow-none border-none rounded-none  h-full bg-transparent p-0 m-0  overflow-hidden"
        >
          {children}
        </Link>
      </DialogTrigger>
      <DialogContent className="sm:max-w-full h-full flex flex-col ga-2  bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-200 ">
        <DialogHeader>
          <DialogTitle>{date}</DialogTitle>
        </DialogHeader>
        <div className="w-full h-full overflow-y-auto border-b">
          <DilogTab
            event={event}
            title={title}
            discription={discription}
            dayName={dayName}
            dateObj={dateObj}
            dayNumber={dayNumber}
            hinduMonth={hinduMonth}
            paksh={paksh}
            tithi={tithi}
            nakshatra={nakshatra}
            sunrise={sunrise}
            sunset={sunset}
            url={url}
            date={date}
            monthName={monthName}
          />
        </div>
        <DialogFooter className="  ">
          <DialogClose asChild>
            <Button variant="outline" className="w-full sm:w-auto">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
