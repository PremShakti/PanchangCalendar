import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Heart,
  Briefcase,
  DollarSign,
  Users,
  GraduationCap,
  Plane,
  Activity,
  Star,
  Gift,
  Mountain,
  Waves,
  Wind,
  Flame,
  Leaf,
  Scale,
  Eye,
  Target,
  Crown,
  Shield,
  Droplets,
} from "lucide-react";
import { ScrollArea } from "../ui/scroll-area";
import SectionWrapper from "./SectionWrapper";
import GridCard from "./GridCard";

interface RashifalSectionProps {
  rashifalData?: any[];
}

export default function RashifalSection({
  rashifalData,
}: RashifalSectionProps) {
  // Use the passed rashifalData from january.ts
  const rasifalData = rashifalData || [];

  const getRashiIcon = (rashi: string) => {
    switch (rashi) {
      case "mesha":
        return <Flame className="w-8 h-8 text-kumkum-600" />;
      case "vrishabha":
        return <Mountain className="w-8 h-8 text-sacred-green-600" />;
      case "mithuna":
        return <Wind className="w-8 h-8 text-royal-blue-600" />;
      case "karka":
        return <Waves className="w-8 h-8 text-royal-blue-500" />;
      case "simha":
        return <Crown className="w-8 h-8 text-gold-600" />;
      case "kanya":
        return <Leaf className="w-8 h-8 text-sacred-green-700" />;
      case "tula":
        return <Scale className="w-8 h-8 text-maroon-600" />;
      case "vrishchika":
        return <Eye className="w-8 h-8 text-kumkum-700" />;
      case "dhanu":
        return <Target className="w-8 h-8 text-saffron-600" />;
      case "makara":
        return <Shield className="w-8 h-8 text-charcoal" />;
      case "kumbha":
        return <Droplets className="w-8 h-8 text-royal-blue-700" />;
      case "meena":
        return <Waves className="w-8 h-8 text-sacred-green-500" />;
      default:
        return <Star className="w-8 h-8 text-gold-600" />;
    }
  };

  const getTabIcon = (tab: string) => {
    switch (tab) {
      case "benefits":
        return <Gift className="w-4 h-4" />;
      case "health":
        return <Activity className="w-4 h-4" />;
      case "financial":
        return <DollarSign className="w-4 h-4" />;
      case "love":
        return <Heart className="w-4 h-4" />;
      case "career":
        return <Briefcase className="w-4 h-4" />;
      case "family":
        return <Users className="w-4 h-4" />;
      case "education":
        return <GraduationCap className="w-4 h-4" />;
      case "travel":
        return <Plane className="w-4 h-4" />;
      default:
        return <Star className="w-4 h-4" />;
    }
  };

  const getTabLabel = (tab: string) => {
    switch (tab) {
      case "benefits":
        return "लाभ";
      case "health":
        return "स्वास्थ्य";
      case "financial":
        return "आर्थिक";
      case "love":
        return "प्रेम";
      case "career":
        return "करियर";
      case "family":
        return "परिवार";
      case "education":
        return "शिक्षा";
      case "travel":
        return "यात्रा";
      case "overall":
        return "सम्पूर्ण";
      default:
        return tab;
    }
  };

  return (
    <SectionWrapper
      title="राशिफल जनवरी 2025"
      subtitle="सभी 12 राशियों के लिए विस्तृत भविष्यफल और जीवन के विभिन्न क्षेत्रों की जानकारी"
      icon={<Star className="w-10 h-10 text-dark-brown fill-current" />}
      footerMessage="यह राशिफल केवल मनोरंजन के लिए है। महत्वपूर्ण निर्णयों के लिए विशेषज्ञ सलाह लें।"
    >
      {rasifalData.map((rashi) => (
        <GridCard
          key={rashi.rashi}
          title={rashi.name}
          subtitle={rashi.rashi}
          icon={getRashiIcon(rashi.rashi)}
          iconColor="bg-saffron-600"
          textColor="text-saffron-700"
          dialogTitle={`${rashi.name} राशिफल`}
          dialogSubtitle={"जनवरी 2025 - विस्तृत भविष्यफल"}
        >
          {/* Card Description (shown in grid) */}
          <CardDescription className="text-sm text-dark-brown line-clamp-3 leading-relaxed">
            {rashi.description}
          </CardDescription>
          <div className="mt-3">
            <span className="text-xs text-saffron-700 font-medium bg-saffron-100 px-2 py-1 rounded-full">
              विस्तार से देखें →
            </span>
          </div>
          {/* Dialog Content (shown when card is clicked) */}
          <div>
            <div className="p-4 bg-gradient-to-r from-saffron-100 to-gold-100 rounded-lg border-l-4 border-saffron-600">
              <h3 className="font-bold text-lg mb-3 text-saffron-700 flex items-center gap-2">
                <Star className="w-5 h-5" />
                सामान्य विवरण
              </h3>
              <p className="text-dark-brown leading-relaxed text-base">
                {rashi.description}
              </p>
            </div>
            <Tabs defaultValue="benefits" className="w-full mt-6">
              <TabsList className="grid w-full grid-cols-4 lg:grid-cols-9 gap-1 h-auto p-1 bg-warm-beige">
                {[
                  "benefits",
                  "health",
                  "financial",
                  "love",
                  "career",
                  "family",
                  "education",
                  "travel",
                  "overall",
                ].map((tab) => (
                  <TabsTrigger
                    key={tab}
                    value={tab}
                    className="flex flex-col items-center gap-1 p-3 text-xs data-[state=active]:bg-saffron-600 data-[state=active]:text-cream-white data-[state=active]:shadow-md transition-all"
                  >
                    {getTabIcon(tab)}
                    <span className="hidden sm:inline font-medium">
                      {getTabLabel(tab)}
                    </span>
                  </TabsTrigger>
                ))}
              </TabsList>
              {[
                "benefits",
                "health",
                "financial",
                "love",
                "career",
                "family",
                "education",
                "travel",
                "overall",
              ].map((tab) => (
                <TabsContent key={tab} value={tab} className="mt-6">
                  <Card className="border-saffron-200 bg-gradient-to-br from-cream-white to-warm-beige">
                    <CardHeader className="gradient-sunrise rounded-t-lg">
                      <CardTitle className="flex items-center gap-3 text-xl text-dark-brown">
                        {getTabIcon(tab)}
                        {getTabLabel(tab)}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <p className="text-dark-brown leading-relaxed text-base">
                        {rashi[tab as keyof typeof rashi]}
                      </p>
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </GridCard>
      ))}
    </SectionWrapper>
  );
}
