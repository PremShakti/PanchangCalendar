

import React from "react";
import { Star } from "lucide-react";

interface InfoSectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export default function InfoSection({
  title,
  children,
  className = ""
}: InfoSectionProps) {
  return (
    <div className={`p-4 bg-gradient-to-r from-saffron-100 to-gold-100 rounded-lg border-l-4 border-saffron-600 ${className}`}>
      <h3 className="font-bold text-lg mb-3 text-saffron-700 flex items-center gap-2">
        <Star className="w-5 h-5" />
        {title}
      </h3>
      <div className="space-y-3 text-dark-brown">
        {children}
      </div>
    </div>
  );
}
