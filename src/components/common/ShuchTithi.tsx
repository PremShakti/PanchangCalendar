

import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Star, Sun } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import GridCard from "./GridCard";
import ContentCard from "./ContentCard";
import InfoSection from "./InfoSection";

interface ShuchTithiProps {
  festival?: any[];
}

export default function ShuchTithi({ festival }: ShuchTithiProps) {
  // Use the passed festival data (shubhTithiData from january.ts)
  const shubhTithiData = festival || [];

  // Sort by date
  const sortedTithis = shubhTithiData.sort(
    (a: any, b: any) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("hi-IN", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  };

  const formatShortDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      day: "2-digit",
      month: "short",
    });
  };

  // Get color based on type
  const getColorsByType = (type: string) => {
    switch (type) {
      case "अति शुभ":
        return {
          text: "text-saffron-800",
          bg: "bg-saffron-700",
          textClass: "text-saffron-700"
        };
      case "शुभ":
        return {
          text: "text-saffron-700",
          bg: "bg-saffron-700",
          textClass: "text-saffron-700"
        };
      case "मध्यम":
        return {
          text: "text-gold-700",
          bg: "bg-gold-700",
          textClass: "text-gold-700"
        };
      default:
        return {
          text: "text-maroon-700",
          bg: "bg-maroon-700",
          textClass: "text-maroon-700"
        };
    }
  };

  return (
    <SectionWrapper
      title="शुभ तिथि • Auspicious Dates"
      subtitle="वर्ष 2025 की सभी शुभ तिथियों और मुहूर्त की विस्तृत जानकारी"
      icon={<Sun className="w-10 h-10 text-dark-brown fill-current" />}
      footerMessage="शुभ तिथियों का पालन करने से जीवन में सुख, शांति और समृद्धि आती है। धर्म के अनुसार आचरण करें।"
    >
      {sortedTithis.map((tithi: any, index: number) => {
        const colors = getColorsByType(tithi.type);
        return (
          <GridCard
            key={`${tithi.date}-${index}`}
            title={tithi.tithi}
            subtitle={`${formatShortDate(tithi.date)} • ${tithi.type}`}
            description={tithi.significance}
            icon={<Sun className="w-6 h-6 text-white" />}
            iconColor={colors.bg}
            textColor={colors.textClass}
            dialogTitle={`${tithi.tithi} तिथि`}
            dialogSubtitle={`${formatDate(tithi.date)} • ${tithi.significance}`}
          >
            {/* Tithi Details */}
            <InfoSection title="तिथि की जानकारी">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-saffron-600" />
                <span className="font-medium">तारीख:</span>
                <span>{formatDate(tithi.date)}</span>
              </div>
              <div className="flex items-center gap-2">
                <Badge className={`${colors.bg} text-white`}>
                  {tithi.type}
                </Badge>
                <Badge variant="secondary" className="bg-gold-200 text-gold-800">
                  {tithi.englishName}
                </Badge>
              </div>
            </InfoSection>

            {/* Tithi Description */}
            <ContentCard
              title="तिथि का महत्व"
              icon={<Star className="w-5 h-5" />}
            >
              <p className="text-dark-brown leading-relaxed text-base">
                {tithi.description}
              </p>
            </ContentCard>

            {/* Benefits */}
            <ContentCard
              title="लाभ और फायदे"
              icon={<Sun className="w-5 h-5" />}
            >
              <p className="text-dark-brown leading-relaxed text-base">
                {tithi.benefits}
              </p>
            </ContentCard>

            {/* Rituals */}
            <ContentCard
              title="पूजा विधि"
              icon={<Calendar className="w-5 h-5" />}
            >
              <p className="text-dark-brown leading-relaxed text-base">
                {tithi.rituals}
              </p>
            </ContentCard>
          </GridCard>
        );
      })}
    </SectionWrapper>
  );
}
