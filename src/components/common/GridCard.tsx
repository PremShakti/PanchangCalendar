"use client";

import React from "react";
import {
  Card,
  CardDescription,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "../ui/scroll-area";

interface GridCardProps {
  title: string;
  subtitle?: string;
  description?: string;
  icon: React.ReactNode;
  iconColor: string;
  textColor: string;
  dialogTitle: string;
  dialogSubtitle: string;
  children: React.ReactNode; // Dialog content
}

export default function GridCard({
  title,
  subtitle,
  description,
  icon,
  iconColor,
  textColor,
  dialogTitle,
  dialogSubtitle,
  children
}: GridCardProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className="cursor-pointer transition-all duration-300 hover:shadow-2xl hover:scale-105 border-2 border-saffron-200 hover:border-saffron-500 bg-gradient-to-br from-cream-white to-warm-beige group">
          <div className="flex p-4 gap-4">
            <div
              className={`w-12 h-12 flex-shrink-0 rounded-full ${iconColor} flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow`}
            >
              {icon}
            </div>
            <div className="flex-1 min-w-0">
              <CardDescription className="text-sm text-dark-brown line-clamp-3 leading-relaxed">
                <span
                  className={`text-base font-bold ${textColor} font-devanagari mr-2`}
                >
                  {title}
                </span>
                {subtitle && (
                  <div className="text-xs text-dark-brown opacity-70 mt-1">
                    {subtitle}
                  </div>
                )}
                {description && (
                  <div className="text-xs text-dark-brown opacity-60 font-devanagari mt-1">
                    {description}
                  </div>
                )}
              </CardDescription>
              <div className="mt-3">
                <span className="text-xs text-saffron-700 font-medium bg-saffron-100 px-2 py-1 rounded-full">
                  विस्तार से देखें →
                </span>
              </div>
            </div>
          </div>
        </Card>
      </DialogTrigger>

      <DialogContent className="overflow-hidden gradient-sacred border-2 border-saffron-500 h-[95vh] flex flex-col gap-4 p-0">
        <DialogHeader className="border-b border-saffron-200 md:p-4">
          <div className="flex md:items-center gap-4">
            <div className={`w-10 h-10 md:w-16 md:h-16 rounded-full ${iconColor} flex items-center justify-center shadow-lg`}>
              <div className="w-6 h-6 md:w-8 md:h-8 text-white flex items-center justify-center">
                {icon}
              </div>
            </div>
            <div>
              <DialogTitle className="md:text-3xl md:font-bold text-start text-saffron-700 font-devanagari">
                {dialogTitle}
              </DialogTitle>
              <DialogDescription className="text-dark-brown text-lg mt-1">
                {dialogSubtitle}
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <ScrollArea className="h-full p-4">
          <div className="space-y-6">
            {children}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
