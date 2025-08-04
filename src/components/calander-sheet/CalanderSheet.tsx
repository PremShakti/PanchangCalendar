import Image from "next/image";
import React from "react";
import { TbSunset2 } from "react-icons/tb";
import { WiSunrise } from "react-icons/wi";
import EvantCard from "./EvantCard";
import { DilogCustom } from "../custom/DilogCustom";
import {
  MonthSelector,
  NextMonthButton,
  PreviousMonthButton,
} from "../month-navigation";
import { Calendar } from "lucide-react";
import RashifalSection from "../common/RashifalSection";
import HolidaySection from "../common/HolidaySection";

type PageProps = {
  params: {
    month: string;
  };
  monthData: any;
};

const CalanderSheet: React.FC<PageProps> = async ({ params, monthData }) => {
  const { month } = await params;

  // days for the calendar
  const days = [
    {
      day: "Sun रवि",
      img: "/gods/shurya.webp",
    },
    {
      day: "Mon सोम",
      img: "/gods/shiv.webp",
    },
    {
      day: "Tue मंगल",
      img: "/gods/hanuman.webp",
    },
    {
      day: "Wed बुध",
      img: "/gods/ganesh.webp",
    },
    {
      day: "Thu गुरु",
      img: "/gods/lakkhi-maa.webp",
    },
    {
      day: "Fri शुक्र",
      img: "/gods/shantosi-maa.webp",
    },
    {
      day: "Sat शनि",
      img: "/gods/shanidev.webp",
    },
  ];

  return (
    <main className="font-devanagari space-y-10 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-100 ">
      <div className="w-full md:container">
        {/* Header Section */}
        <div className="relative px-4 py-6 md:py-8 lg:py-10 bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 shadow-lg">
          {/* Subtle decorative background for larger screens only */}
          <div className="hidden md:block absolute inset-0 opacity-5 overflow-hidden">
            <div className="absolute top-4 left-8 text-6xl">🕉️</div>
            <div className="absolute top-6 right-12 text-4xl">🪔</div>
            <div className="absolute bottom-4 left-1/4 text-3xl">🌺</div>
            <div className="absolute bottom-6 right-1/3 text-3xl">🙏</div>
          </div>

          <div className="relative z-10 text-center">
            <div className="flex items-center justify-center gap-3 mb-2">
              <Calendar className="h-6 w-6 md:h-8 md:w-8 text-orange-600" />
              <div className="h-6 w-6 md:h-8 md:w-8 rounded-full bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center">
                <div className="h-3 w-3 md:h-4 md:w-4 rounded-full bg-white opacity-80"></div>
              </div>
            </div>

            <h1 className="text-3xl pt-4 md:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-orange-700 via-red-600 to-orange-800 bg-clip-text text-transparent tracking-wide mb-2">
              भक्ति कैलेंडर
            </h1>

            <p className="text-orange-600 font-semibold tracking-wider text-sm md:text-base lg:text-lg">
              BHAKTI CALENDAR
            </p>
          </div>
        </div>

        {/* Mobile-First Navigation */}
        <div className="bg-white shadow-xl">
          {/* Mobile Layout (Stack Vertically) */}
          <div className="block md:hidden">
            {/* Month Selector Section - Most Important on Mobile */}
            <div className="bg-gradient-to-r from-amber-400 to-yellow-400 px-6 py-6 text-center">
              <div className="space-y-3  flce flex-col items-center">
                <MonthSelector
                  className=" w-full"
                  triggerClassName=" max-w-xs overflow-hidden mx-auto bg-white/90 backdrop-blur-sm text-amber-900 border-2 border-amber-600/30 rounded-xl font-bold text-lg shadow-lg hover:bg-white transition-all duration-200"
                  contentClassName="text-base bg-white/95 backdrop-blur-sm"
                />
                <p className="text-2xl font-bold text-amber-900 drop-shadow-sm">
                  2025
                </p>
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="flex">
              {/* Previous Month */}
              <div className="flex-1 bg-gradient-to-br from-rose-500 to-red-600 text-white py-6 px-4 relative">
                <div className="text-center">
                  <PreviousMonthButton className="mb-3 bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 w-12 h-12 rounded-full border-2 border-white/40 transition-all duration-200 hover:scale-105 mx-auto" />
                  <p className="font-bold text-base mb-1">पौष-चैत्र</p>
                  <p className="text-sm opacity-90">हिंदू महीने</p>
                </div>
              </div>

              {/* Next Month */}
              <div className="flex-1 bg-gradient-to-br from-rose-500 to-red-600 text-white py-6 px-4 relative border-l border-white/20">
                <div className="text-center">
                  <NextMonthButton className="mb-3 bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 w-12 h-12 rounded-full border-2 border-white/40 transition-all duration-200 hover:scale-105 mx-auto" />
                  <p className="font-bold text-base mb-1">विक्रम संवत्</p>
                  <p className="text-sm font-semibold">2081-2082</p>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop/Tablet Layout (Horizontal) */}
          <div className="hidden md:flex h-20 lg:h-24 xl:h-28">
            {/* Left Section - Hindu Months */}
            <div className="relative w-[30%] h-full flex items-center justify-center bg-gradient-to-br from-rose-500 to-red-600 text-white text-center group transition-all duration-300 hover:from-rose-600 hover:to-red-700">
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>

              <PreviousMonthButton className="absolute top-3 left-3 bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 w-10 h-10 lg:w-12 lg:h-12 rounded-full border-2 border-white/40 transition-all duration-200 hover:scale-110" />

              <div className="relative z-10">
                <p className="font-bold text-lg lg:text-xl mb-1">पौष-चैत्र</p>
                <p className="text-sm lg:text-base opacity-90 font-medium">
                  हिंदू महीने
                </p>
              </div>

              <div className="absolute bottom-0 left-0 w-8 h-8 bg-white/10 transform rotate-45 -translate-x-4 translate-y-4"></div>
            </div>

            {/* Center Section - Month Selector */}
            <div className="w-[40%] h-full flex items-center justify-center bg-gradient-to-br from-amber-400 to-yellow-500 text-amber-900 text-center relative group">
              <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent"></div>

              <div className="relative z-10 space-y-2">
                <MonthSelector
                  className="overflow-hidden"
                  triggerClassName="w-32 overflow-hidden lg:w-40 bg-white/90 backdrop-blur-sm text-amber-900 border-2 border-amber-600/30 rounded-lg font-bold text-base lg:text-lg hover:bg-white transition-all duration-200 shadow-lg h-10 lg:h-12"
                  contentClassName="text-base bg-white/95 backdrop-blur-sm"
                />
                <p className="text-2xl lg:text-3xl font-bold drop-shadow-sm">
                  2025
                </p>
              </div>

              <div className="absolute top-2 right-2 w-3 h-3 bg-amber-700 transform rotate-45"></div>
              <div className="absolute bottom-2 left-2 w-2 h-2 bg-amber-700 transform rotate-45"></div>
            </div>

            {/* Right Section - Vikram Samvat */}
            <div className="relative w-[30%] h-full flex items-center justify-center bg-gradient-to-br from-rose-500 to-red-600 text-white text-center group transition-all duration-300 hover:from-rose-600 hover:to-red-700">
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>

              <NextMonthButton className="absolute top-3 right-3 bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 w-10 h-10 lg:w-12 lg:h-12 rounded-full border-2 border-white/40 transition-all duration-200 hover:scale-110" />

              <div className="relative z-10">
                <p className="font-bold text-lg lg:text-xl mb-1">
                  विक्रम संवत्
                </p>
                <p className="text-lg lg:text-xl font-bold">2081-2082</p>
              </div>

              <div className="absolute bottom-0 right-0 w-8 h-8 bg-white/10 transform rotate-45 translate-x-4 translate-y-4"></div>
            </div>

            {/* Separator lines */}
            <div className="absolute left-[30%] top-2 bottom-2 w-px bg-white/30"></div>
            <div className="absolute right-[30%] top-2 bottom-2 w-px bg-white/30"></div>
          </div>
        </div>

        {/* Bottom accent */}
        <div className="h-1 bg-gradient-to-r from-rose-500 via-amber-400 to-rose-500"></div>
      </div>
      <div className="flex  md:container">
        <div className=" grid grid-rows-7 grid-flow-col w-[50px] md:w-[100px]">
          {days?.map((e, i) => {
            const [en, hi] = e.day.split(" ");
            return (
              <div
                key={e.day}
                className="  border  relative text-white overflow-hidden "
              >
                <div className=" ">
                  <Image src={e.img} alt={e.day} height={200} width={200} />
                </div>
                <div
                  className={`absolute w-full bottom-0 z-10  h-full flex items-end justify-center  ${
                    en == "Sun"
                      ? "bg-gradient-to-t from-yellow-500 to-transparent"
                      : en == "Mon"
                      ? "bg-gradient-to-t from-blue-500 to-transparent"
                      : en == "Tue"
                      ? "bg-gradient-to-t from-orange-500 to-transparent"
                      : en == "Wed"
                      ? "bg-gradient-to-t from-red-500 to-transparent"
                      : en == "Thu"
                      ? "bg-gradient-to-t from-yellow-500 to-transparent"
                      : en == "Fri"
                      ? "bg-gradient-to-t from-green-500 to-transparent"
                      : "bg-gradient-to-t from-yellow-500 to-transparent"
                  }`}
                >
                  <div className="   w-full ">
                    <p className="text-sm lg:text-lg  text-center font-semibold">
                      {" "}
                      {hi}
                    </p>
                    <p className="text-md  lg:text-xl    text-center font-semibold">
                      {en}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className=" grid grid-rows-7 grid-flow-col w-full ">
          {monthData?.map((e: any, i: number) => {
            let dateObj;
            let options: { weekday: "long" | "short" | "narrow" } = {
              weekday: "long",
            };
            let dayName = ""; // Initialize dayName as an empty string
            let dayNumber = "";

            if (e.date) {
              dateObj = new Date(e.date);
              dayNumber = dateObj.getDate().toString();
              // Get the day name (e.g., Monday, Tuesday, etc.)
              options = { weekday: "long" };
              dayName = dateObj.toLocaleDateString("en-US", options);
            }

            if (e.event) {
              return (
                <DilogCustom
                  key={i}
                  {...e}
                  event={e.event}
                  dayName={dayName}
                  monthName={month}
                >
                  <EvantCard
                    {...e}
                    dayName={dayName}
                    dayNumber={dayNumber}
                    dateObj={dateObj}
                  />
                </DilogCustom>
              );
            }
            return (
              <div
                key={i}
                className={` border p-1 md:p-2 ${
                  dayName == "Sunday" ? "bg-red-100" : "bg-orange-50"
                }`}
              >
                {dateObj && (
                  <p className=" text-lg sm:text-2xl md:text-[60px] md:leading-[65px]   font-semibold  md:font-bold">
                    {dayNumber}
                  </p>
                )}

                {/* font-family: var(--font-noto-sans-devanagari); */}

                <div className="text-[8px] md:text-sm  ">
                  {e.hinduMonth && <span className="">{e.hinduMonth}</span>}{" "}
                  {e.paksh && <span>{e.paksh}</span>}
                </div>
                <div className="text-[8px] md:text-sm">
                  {e.tithi && (
                    <div>
                      {" "}
                      <span>तिथि :</span> <span>{e.tithi}</span>
                    </div>
                  )}{" "}
                </div>
                <div className="text-[8px] md:text-sm">
                  {e.nakshatra && (
                    <div>
                      {" "}
                      <span>नक्षत्र :</span> <span>{e.nakshatra}</span>
                    </div>
                  )}
                </div>

                <div className="text-[5px] md:text-sm flex items-center gap-1 md:gap-2">
                  {e.sunrise && (
                    <div className="flex items-center">
                      {" "}
                      <span>
                        <WiSunrise color="#e8c500" />
                      </span>{" "}
                      <span>{e.sunrise}</span>
                    </div>
                  )}
                  {e.sunset && (
                    <div className="flex items-center">
                      {" "}
                      <span>
                        <TbSunset2 color="ff1414" />{" "}
                      </span>{" "}
                      <span>{e.sunset}</span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <HolidaySection />
      <RashifalSection />
    </main>
  );
};

export default CalanderSheet;
