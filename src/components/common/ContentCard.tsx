

import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface ContentCardProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

export default function ContentCard({
  title,
  icon,
  children,
  className = ""
}: ContentCardProps) {
  return (
    <Card className={`border-saffron-200 bg-gradient-to-br from-cream-white to-warm-beige ${className}`}>
      <CardHeader className="gradient-sunrise rounded-t-lg">
        <CardTitle className="flex items-center gap-3 text-xl text-dark-brown">
          {icon}
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        {children}
      </CardContent>
    </Card>
  );
}
