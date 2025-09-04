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
import FestivalsSection from "../common/FestivalsSection";
import ShuchTithi from "../common/ShuchTithi";

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
    <main className="font-devanagari space-y-10 bg-gradient-to-br from-warm-beige via-cream-white to-saffron-50">
      <div className="w-full md:container">
        {/* Header Section */}
        <div className="relative px-4 py-3 md:py-8 lg:py-10 temple-header shadow-lg">
          {/* Subtle decorative background for larger screens only */}
          <div className="hidden md:block absolute inset-0 opacity-50 overflow-hidden">
            <div className="absolute top-4 left-8 text-6xl">🕉️</div>
            <div className="absolute top-6 right-12 text-4xl">🪔</div>
            <div className="absolute bottom-4 left-1/4 text-3xl">🌺</div>
            <div className="absolute bottom-6 right-1/3 text-3xl">🙏</div>
          </div>

          <div className="relative z-10 text-center">
            <div className="flex items-center justify-center gap-4 ">
              <Calendar className="h-6 w-6 md:h-8 md:w-8 text-gold-200" />
              <h1 className="text-3xl pt-4 md:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-gold-100 via-saffron-100 to-cream-white bg-clip-text text-transparent tracking-wide ">
                भक्ति कैलेंडर
              </h1>

              <div className="h-6 w-6 md:h-8 md:w-8 rounded-full bg-gradient-to-br from-gold-500 to-saffron-500 flex items-center justify-center">
                <div className="h-3 w-3 md:h-4 md:w-4 rounded-full bg-cream-white opacity-90"></div>
              </div>
            </div>

            <p className="text-gold-100 font-semibold tracking-wider text-sm md:text-base lg:text-lg">
              BHAKTI CALENDAR
            </p>
          </div>
        </div>

        {/* Mobile-First Navigation */}
        <div className="bg-cream-white shadow-xl border-b-4 border-saffron-500">
          {/* Mobile Layout (Stack Vertically) */}
          <div className="block md:hidden">
            {/* Month Selector Section - Most Important on Mobile */}
            <div className="gradient-sunrise px-6 py-6 text-center">
              <div className="space-y-3  flce flex-col items-center">
                <div className="flex items-center gap-2">
                  <PreviousMonthButton className=" bg-cream-white/30 backdrop-blur-sm text-dark-brown hover:bg-cream-white/50 w-8 h-8 rounded-full border-2 border-dark-brown/20 transition-all duration-200 hover:scale-105 mx-auto" />
                  <MonthSelector
                    className=" w-full"
                    triggerClassName=" max-w-xs overflow-hidden mx-auto bg-cream-white/95 backdrop-blur-sm text-dark-brown border-2 border-dark-brown/20 rounded-xl font-bold text-base shadow-lg hover:bg-cream-white transition-all duration-200"
                    contentClassName="text-base bg-cream-white/98 backdrop-blur-sm"
                  />
                  <NextMonthButton className=" bg-cream-white/30 backdrop-blur-sm text-dark-brown hover:bg-cream-white/50 w-8 h-8 rounded-full border-2 border-dark-brown/20 transition-all duration-200 hover:scale-105 mx-auto" />
                </div>
                <p className="text-2xl font-bold text-dark-brown drop-shadow-sm">
                  2025
                </p>
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="flex">
              {/* Previous Month */}
              <div className="flex-1 calendar-header text-cream-white py-6 px-4 relative">
                <div className="text-center">
                  <p className=" text-base mb-1">पौष-चैत्र</p>
                  <p className="text-sm opacity-90">हिंदू महीने</p>
                </div>
              </div>

              {/* Next Month */}
              <div className="flex-1 calendar-header text-cream-white py-6 px-4 relative border-l border-cream-white/20">
                <div className="text-center">
                  <p className=" text-base mb-1">विक्रम संवत्</p>
                  <p className="text-sm ">2081-2082</p>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop/Tablet Layout (Horizontal) */}
          <div className="hidden md:flex h-20 lg:h-24 xl:h-28">
            {/* Left Section - Hindu Months */}
            <div className="relative w-[30%] h-full flex items-center justify-center calendar-header text-cream-white text-center group transition-all duration-300 hover:opacity-90">
              <div className="absolute inset-0 bg-dark-brown opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>

              <PreviousMonthButton className="absolute top-3 left-3 bg-cream-white/20 backdrop-blur-sm text-cream-white hover:bg-cream-white/30 w-10 h-10 lg:w-12 lg:h-12 rounded-full border-2 border-cream-white/40 transition-all duration-200 hover:scale-110" />

              <div className="relative z-10">
                <p className="font-bold text-lg lg:text-xl mb-1">पौष-चैत्र</p>
                <p className="text-sm lg:text-base opacity-90 font-medium">
                  हिंदू महीने
                </p>
              </div>

              <div className="absolute bottom-0 left-0 w-8 h-8 bg-cream-white/10 transform rotate-45 -translate-x-4 translate-y-4"></div>
            </div>

            {/* Center Section - Month Selector */}
            <div className="w-[40%] h-full flex items-center justify-center gradient-sunrise text-dark-brown text-center relative group">
              <div className="absolute inset-0 bg-gradient-to-t from-dark-brown/5 to-transparent"></div>

              <div className="relative z-10 space-y-2">
                <MonthSelector
                  className="overflow-hidden"
                  triggerClassName="w-32 overflow-hidden lg:w-40 bg-cream-white/95 backdrop-blur-sm text-dark-brown border-2 border-dark-brown/20 rounded-lg font-bold text-base lg:text-lg hover:bg-cream-white transition-all duration-200 shadow-lg h-10 lg:h-12"
                  contentClassName="text-base bg-cream-white/98 backdrop-blur-sm"
                />
                <p className="text-2xl lg:text-3xl font-bold drop-shadow-sm">
                  2025
                </p>
              </div>

              <div className="absolute top-2 right-2 w-3 h-3 bg-dark-brown/30 transform rotate-45"></div>
              <div className="absolute bottom-2 left-2 w-2 h-2 bg-dark-brown/30 transform rotate-45"></div>
            </div>

            {/* Right Section - Vikram Samvat */}
            <div className="relative w-[30%] h-full flex items-center justify-center calendar-header text-cream-white text-center group transition-all duration-300 hover:opacity-90">
              <div className="absolute inset-0 bg-dark-brown opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>

              <NextMonthButton className="absolute top-3 right-3 bg-cream-white/20 backdrop-blur-sm text-cream-white hover:bg-cream-white/30 w-10 h-10 lg:w-12 lg:h-12 rounded-full border-2 border-cream-white/40 transition-all duration-200 hover:scale-110" />

              <div className="relative z-10">
                <p className="font-bold text-lg lg:text-xl mb-1">
                  विक्रम संवत्
                </p>
                <p className="text-lg lg:text-xl ">2081-2082</p>
              </div>

              <div className="absolute bottom-0 right-0 w-8 h-8 bg-cream-white/10 transform rotate-45 translate-x-4 translate-y-4"></div>
            </div>

            {/* Separator lines */}
            <div className="absolute left-[30%] top-2 bottom-2 w-px bg-cream-white/30"></div>
            <div className="absolute right-[30%] top-2 bottom-2 w-px bg-cream-white/30"></div>
          </div>
        </div>

        {/* Bottom accent */}
        <div className="h-1 gradient-temple"></div>
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
                      ? "sunday-theme"
                      : en == "Mon"
                      ? "monday-theme"
                      : en == "Tue"
                      ? "tuesday-theme"
                      : en == "Wed"
                      ? "wednesday-theme"
                      : en == "Thu"
                      ? "thursday-theme"
                      : en == "Fri"
                      ? "friday-theme"
                      : "saturday-theme"
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
          {monthData?.calendarData?.map((e: any, i: number) => {
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
                className={` border border-stone-grey/30 p-1 md:p-2  ${
                  dayName == "Sunday" ? "bg-kumkum-100 text-dark-brown" : "bg-saffron-50 text-dark-brown"
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
      <FestivalsSection festival={monthData?.festivalData} />
      <ShuchTithi festival={monthData?.shubhTithiData}  />
      <RashifalSection rashifalData={monthData?.rashifalData}/>
    </main>
  );
};

export default CalanderSheet;
