import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Star, Sun } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import GridCard from "./GridCard";
import ContentCard from "./ContentCard";
import InfoSection from "./InfoSection";

export default function ShuchTithi() {
  // Dummy data for auspicious dates/times (Shubh Tithi)
  const shubhTithiData = [
    {
      tithi: "प्रतिपदा",
      englishName: "Pratipada",
      date: "2025-01-15",
      significance: "नवचंद्र दर्शन",
      type: "शुभ",
      description:
        "प्रतिपदा तिथि नए चंद्रमा की शुरुआत का प्रतीक है। यह नई शुरुआत और नए कार्यों के लिए अत्यंत शुभ मानी जाती है।",
      benefits:
        "नए कार्यों की शुरुआत, व्यापार में लाभ, और मानसिक शांति मिलती है।",
      rituals:
        "इस दिन गणेश जी की पूजा करना विशेष फलदायी होता है। नए कार्यों का शुभारंभ करना चाहिए।",
    },
    {
      tithi: "पंचमी",
      englishName: "Panchami",
      date: "2025-01-19",
      significance: "सरस्वती पूजा",
      type: "अति शुभ",
      description:
        "पंचमी तिथि ज्ञान और कला की देवी सरस्वती की विशेष कृपा का दिन है। शिक्षा और कलाओं में सफलता के लिए यह श्रेष्ठ तिथि है।",
      benefits:
        "विद्या प्राप्ति, कलात्मक उन्नति, और बुद्धि विकास में विशेष लाभ होता है।",
      rituals:
        "सरस्वती माता की पूजा, पुस्तकों की पूजा, और विद्यारंभ संस्कार के लिए उत्तम तिथि है।",
    },
    {
      tithi: "एकादशी",
      englishName: "Ekadashi",
      date: "2025-01-25",
      significance: "व्रत दिवस",
      type: "शुभ",
      description:
        "एकादशी व्रत सभी पापों का नाश करने वाला और मोक्ष प्रदान करने वाला है। यह विष्णु भगवान को अत्यंत प्रिय तिथि है।",
      benefits: "पाप मुक्ति, स्वास्थ्य लाभ, और आध्यात्मिक उन्नति होती है।",
      rituals: "उपवास रखना, विष्णु सहस्रनाम का पाठ, और दान-पुण्य करना चाहिए।",
    },
    {
      tithi: "पूर्णिमा",
      englishName: "Purnima",
      date: "2025-01-29",
      significance: "चंद्र दर्शन",
      type: "अति शुभ",
      description:
        "पूर्णिमा की रात्रि में चंद्रमा अपनी पूर्ण कलाओं के साथ चमकता है। यह सभी मंगल कार्यों के लिए अत्यधिक शुभ है।",
      benefits: "मानसिक शांति, धन लाभ, और पारिवारिक सुख की प्राप्ति होती है।",
      rituals: "चंद्र दर्शन, सत्यनारायण व्रत, और दान-दक्षिणा करना चाहिए।",
    },
    {
      tithi: "अष्टमी",
      englishName: "Ashtami",
      date: "2025-02-02",
      significance: "देवी पूजा",
      type: "शुभ",
      description:
        "अष्टमी तिथि मां दुर्गा की विशेष कृपा का दिन है। शक्ति और सुरक्षा के लिए यह अत्यंत महत्वपूर्ण तिथि है।",
      benefits:
        "शत्रुओं से रक्षा, शक्ति प्राप्ति, और मां दुर्गा का आशीर्वाद मिलता है।",
      rituals: "मां दुर्गा की पूजा, हवन करना, और कन्या पूजन करना शुभ होता है।",
    },
    {
      tithi: "द्वादशी",
      englishName: "Dwadashi",
      date: "2025-02-06",
      significance: "विष्णु पूजा",
      type: "शुभ",
      description:
        "द्वादशी तिथि भगवान विष्णु की विशेष कृपा प्राप्त करने का दिन है। धन-संपत्ति और समृद्धि के लिए यह उत्तम है।",
      benefits:
        "धन वृद्धि, व्यापारिक सफलता, और भगवान विष्णु की कृपा प्राप्त होती है।",
      rituals: "विष्णु पूजा, तुलसी सेवा, और धार्मिक ग्रंथों का पाठ करना चाहिए।",
    },
  ];

  // Sort by date
  const sortedTithis = shubhTithiData.sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
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
          textClass: "text-saffron-700",
        };
      case "शुभ":
        return {
          text: "text-saffron-700",
          bg: "bg-saffron-700",
          textClass: "text-saffron-700",
        };
      case "मध्यम":
        return {
          text: "text-gold-700",
          bg: "bg-gold-700",
          textClass: "text-gold-700",
        };
      default:
        return {
          text: "text-maroon-700",
          bg: "bg-maroon-700",
          textClass: "text-maroon-700",
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
      {sortedTithis.map((tithi, index) => {
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
                <Badge
                  variant="secondary"
                  className="bg-gold-200 text-gold-800"
                >
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
