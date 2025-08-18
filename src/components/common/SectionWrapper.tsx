

import React from "react";
import { Star } from "lucide-react";

interface SectionWrapperProps {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  footerMessage?: string;
}

export default function SectionWrapper({
  title,
  subtitle,
  icon,
  children,
  footerMessage
}: SectionWrapperProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-warm-beige to-cream-white p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full gradient-sunrise mb-6 shadow-lg">
            {icon}
          </div>
          <h1 className="text-2xl md:text-4xl font-bold text-saffron-700 mb-4 font-devanagari">
            {title}
          </h1>
          <p className="text-xl text-dark-brown max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>
          <div className="flex items-center justify-center gap-2 mt-6">
            <div className="w-2 h-2 rounded-full bg-saffron-600"></div>
            <div className="w-3 h-3 rounded-full bg-gold-600"></div>
            <div className="w-2 h-2 rounded-full bg-saffron-600"></div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-8">
          {children}
        </div>

        {/* Footer */}
        {footerMessage && (
          <div className="text-center mt-16 py-8 border-t border-saffron-light">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Star className="w-5 h-5 text-saffron fill-current" />
              <Star className="w-6 h-6 text-gold fill-current" />
              <Star className="w-5 h-5 text-saffron fill-current" />
            </div>
            <p className="text-earth-dark text-base font-medium font-devanagari">
              {footerMessage}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
