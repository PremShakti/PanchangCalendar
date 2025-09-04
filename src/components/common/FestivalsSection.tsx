import { jharkhandHolidays2025 } from "@/lib/holidays/jharkhand";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Clock, Star } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import GridCard from "./GridCard";
import ContentCard from "./ContentCard";
import InfoSection from "./InfoSection";

export default function FestivalsSection({festival}: {festival: any[]}) {
  // Use passed festival data if available, otherwise fallback to jharkhand holidays
  const festivalData = festival && festival.length > 0 ? festival : jharkhandHolidays2025;
  
  // Sort all holidays by date
  const sortedHolidays = festivalData.sort(
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

  // Get festival category color
  const getFestivalColor = (index: number) => {
    const colors = [
      "bg-saffron-600",
      "bg-kumkum-600",
      "bg-gold-600",
      "bg-royal-blue-600",
      "bg-sacred-green-600",
      "bg-maroon-600",
    ];
    return colors[index % colors.length];
  };

  const getFestivalTextColor = (index: number) => {
    const colors = [
      "text-saffron-700",
      "text-kumkum-700",
      "text-gold-700",
      "text-royal-blue-700",
      "text-sacred-green-700",
      "text-maroon-700",
    ];
    return colors[index % colors.length];
  };

  return (
    <SectionWrapper
      title="त्यौहार 2025 • Festivals 2025"
      subtitle="वर्ष 2025 के सभी प्रमुख त्योहारों और पर्वों की विस्तृत जानकारी"
      icon={<Calendar className="w-10 h-10 text-dark-brown fill-current" />}
      footerMessage="सभी त्योहारों को श्रद्धा और भक्ति के साथ मनाएं। समुदायिक एकता और पारिवारिक प्रेम को बढ़ावा दें।"
    >
      {sortedHolidays?.map((festival, index) => (
        <GridCard
          key={`${festival.date}-${index}`}
          title={festival.title}
          subtitle={formatShortDate(festival.date)}
          icon={<Calendar className="w-4 h-4 md:w-5 md:h-5 text-white" />}
          iconColor={getFestivalColor(index)}
          textColor={getFestivalTextColor(index)}
          dialogTitle={festival.title}
          dialogSubtitle={formatDate(festival.date)}
        >
          {/* Festival Details */}
          <InfoSection title="त्योहार की जानकारी">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-saffron-600" />
              <span className="font-medium">तारीख:</span>
              <span>{formatDate(festival.date)}</span>
            </div>
            <div className="flex items-center gap-2">
              <Badge
                variant="secondary"
                className="bg-saffron-200 text-saffron-800 py-1"
              >
                {festival.type || "हिंदू त्योहार"}
              </Badge>
            </div>
            {festival.region && (
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-saffron-600" />
                <span className="font-medium">क्षेत्र:</span>
                <span>{festival.region}</span>
              </div>
            )}
          </InfoSection>

          {/* Festival Description */}
          <ContentCard
            title="त्योहार का महत्व"
            icon={<Calendar className="w-5 h-5" />}
          >
            <p className="text-dark-brown leading-relaxed text-base">
              {festival.description || `${festival.title} एक महत्वपूर्ण हिंदू त्योहार है जो हमारी सांस्कृतिक और धार्मिक परंपराओं का हिस्सा है। यह त्योहार श्रद्धा, भक्ति और पारिवारिक मेल-जोल का प्रतीक है।`}
            </p>
            {festival.significance && (
              <div className="mt-3 p-3 bg-saffron-50 rounded-lg border-l-4 border-saffron-400">
                <p className="text-dark-brown font-medium">{festival.significance}</p>
              </div>
            )}
          </ContentCard>

          {/* Celebration Details */}
          <ContentCard
            title="मनाने की विधि"
            icon={<Star className="w-5 h-5" />}
          >
            <p className="text-dark-brown leading-relaxed text-base">
              {festival.rituals || "इस दिन विशेष पूजा-अर्चना, दान-दक्षिणा और सामुदायिक कार्यक्रमों का आयोजन किया जाता है। परिवार और मित्रों के साथ मिलकर इस पवित्र अवसर को धूमधाम से मनाया जाता है।"}
            </p>
            {festival.color && (
              <div className="mt-3 p-3 bg-gold-50 rounded-lg">
                <div className="flex items-center gap-2">
                  <span className="font-medium text-dark-brown">शुभ रंग:</span>
                  <span className="text-dark-brown">{festival.color}</span>
                </div>
              </div>
            )}
          </ContentCard>
        </GridCard>
      ))}
    </SectionWrapper>
  );
}
