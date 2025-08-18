import Image from "next/image";
import React from "react";
import { TbSunset2 } from "react-icons/tb";
import { WiSunrise } from "react-icons/wi";

interface EvantCardProps {
  dayName: string;
  dateObj?: Date;
  dayNumber?: string;
  hinduMonth?: string;
  paksh?: string;
  tithi?: string;
  nakshatra?: string;
  sunrise?: string;
  sunset?: string;
  title?: string;
  url?: string;
}

const EvantCard: React.FC<EvantCardProps> = ({
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
  title,
}) => {
  return (
    <div
      className={`p-1 md:p-2 w-full h-full relative overflow-hidden bg-cover bg-center bg-no-repeat ${
        dayName == "Sunday" ? "bg-kumkum-100" : "bg-saffron-50"
      }`}
      style={{
        backgroundImage: `url('/bg/event_bg.png')`,
      }}
    >
      <div className="w-full  flex items-center justify-center">
        {url ? (
          <div className="w-full md:w-[95%] h-full max-h-[130px] rounded-md overflow-hidden">
            <Image
              src={url as string}
              alt={`Event ${tithi || "image"}`}
              width={100}
              height={100}
              className="w-full"
            />
          </div>
        ) : (
          <p className=" text-cream-white text-center w-full text-[9px] sm:text-[12px]  md:text-xl py-2 border rounded-md overflow-hidden bg-maroon-600/80 backdrop-blur-sm">
            {title}
          </p>
        )}
      </div>

      <div className="absolute top-1 left-1 rounded-full p-0 sm:p-2 sm:backdrop-blur-sm sm:bg-dark-brown/30 z-10">
        {dateObj && (
          <p className=" text-xs sm:text-sm lg:text-base text-cream-white font-bold">
            {dayNumber}
          </p>
        )}
      </div>

      <div className=" absolute bottom-0 left-0 right-0 w-full py-1 px-1 md:px-2 z-10 text-gold-200">
        {url && (
          <p
            className="text-[7px] md:text-[13px] lg:text-base drop-shadow-md text-shadow-lg"
            style={{
              textShadow:
                "1px 1px 2px rgba(0,0,0,0.8), 0 0 4px rgba(0,0,0,0.5)",
            }}
          >
            {title}
          </p>
        )}
        <div className=" flex  flex-wrap md:gap-1  w-full ">
          <p
            className="text-[7px] md:text-[13px] lg:text-base drop-shadow-md text-shadow-lg"
            style={{
              textShadow:
                "1px 1px 2px rgba(0,0,0,0.8), 0 0 4px rgba(0,0,0,0.5)",
            }}
          >
            {hinduMonth && <span>{hinduMonth}</span>}
            {paksh && <span> {paksh}</span>}
            {tithi && <span> {tithi}</span>}
            {nakshatra && <span> {nakshatra}</span>}
          </p>
        </div>
        <div className=" hidden lg:flex text-[5px] md:text-[12px] lg:text-base  items-center flex-wrap sm:gap-1 md:gap-2 ">
          {sunrise && (
            <div className="flex items-center">
              {" "}
              <span>
                <WiSunrise color="#e8c500" />
              </span>{" "}
              <span>{sunrise}</span>
            </div>
          )}
          {sunset && (
            <div className="flex items-center">
              {" "}
              <span>
                <TbSunset2 color="ff1414" />{" "}
              </span>{" "}
              <span>{sunset}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EvantCard;
