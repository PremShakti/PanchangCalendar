"use client";
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
import { Badge } from "@/components/ui/badge";

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

const rasifalData = [
  {
    rashi: "mesha",
    name: "मेष",
    description:
      "मेष राशि के जातकों के लिए जनवरी 2025 एक मिश्रित महीना रहने वाला है। कुछ क्षेत्रों में लाभ और उन्नति होगी, तो कुछ में चुनौतियों का सामना करना पड़ सकता है",
    benefits:
      "जनवरी के महीने में मेष राशि के जातकों को कुछ महत्वपूर्ण कार्यों में सफलता मिल सकती है। रुके हुए धन की प्राप्ति हो सकती है। शत्रुओं पर विजय प्राप्त होगी।",
    health:
      "स्वास्थ्य का ध्यान रखने की आवश्यकता है। मानसिक तनाव से बचें और नियमित व्यायाम करें।",
    financial:
      "आर्थिक रूप से सामान्य रहने की संभावना है। नए निवेश से बचें और बचत पर ध्यान दें।",
    love: "प्रेम जीवन में मिले-जुले परिणाम मिल सकते हैं। धैर्य रखें और समझदारी से काम लें।",
    career:
      "करियर में कुछ चुनौतियों का सामना करना पड़ सकता है। कड़ी मेहनत से सफलता मिलेगी।",
    family: "परिवार में सामंजस्य बना रहेगा। बुजुर्गों का आशीर्वाद मिलेगा।",
    education:
      "शिक्षा के क्षेत्र में सामान्य प्रगति हो सकती है। अधिक मेहनत की आवश्यकता है।",
    travel: "यात्रा के योग बन सकते हैं। धार्मिक यात्रा का अवसर मिल सकता है।",
    overall:
      "कुल मिलाकर, जनवरी 2025 मेष राशि के जातकों के लिए एक मिला-जुला महीना रहने वाला है। कुछ क्षेत्रों में सफलता और लाभ मिलेगा, वहीं कुछ में चुनौतियों का सामना करना पड़ सकता है। स्वास्थ्य और आर्थिक स्थिति पर ध्यान देने की आवश्यकता है।",
  },
  {
    rashi: "vrishabha",
    name: "वृषभ",
    description:
      "वृषभ राशि के जातकों के लिए जनवरी 2025 एक अच्छा महीना रहने वाला है। धन-संपत्ति में वृद्धि और व्यावसायिक सफलता के योग हैं।",
    benefits:
      "इस महीने वृषभ राशि के जातकों को अचानक धन लाभ हो सकता है। संपत्ति की खरीदारी के अवसर मिल सकते हैं। कारोबार में तरक्की होगी।",
    health: "स्वास्थ्य अच्छा रहेगा। खान-पान पर ध्यान दें और नियमित जांच कराएं।",
    financial:
      "आर्थिक स्थिति मजबूत रहेगी। नए निवेश के अवसर मिल सकते हैं। बचत में वृद्धि होगी।",
    love: "प्रेम जीवन में खुशियां आएंगी। नए रिश्ते की शुरुआत हो सकती है।",
    career:
      "करियर में उन्नति के अवसर मिलेंगे। नई नौकरी के योग हैं। बॉस की सराहना मिलेगी।",
    family: "पारिवारिक सुख-शांति बनी रहेगी। खुशी के मौके आएंगे।",
    education:
      "शिक्षा में उत्कृष्ट प्रदर्शन होगा। प्रतियोगी परीक्षाओं में सफलता मिल सकती है।",
    travel: "व्यावसायिक यात्रा के अवसर मिलेंगे। विदेश यात्रा के योग हैं।",
    overall:
      "जनवरी 2025 वृषभ राशि के जातकों के लिए एक शुभ और लाभकारी महीना रहेगा। धन, स्वास्थ्य और संबंधों में सुधार होगा।",
  },
  {
    rashi: "mithuna",
    name: "मिथुन",
    description:
      "मिथुन राशि के जातकों के लिए जनवरी 2025 में नई शुरुआत और अवसरों का महीना है। संवाद कौशल का फायदा उठाने का समय है।",
    benefits:
      "इस महीने मिथुन राशि के जातकों को नए कनेक्शन और नेटवर्किंग के अवसर मिलेंगे। मीडिया और कम्यूनिकेशन के क्षेत्र में सफलता मिलेगी।",
    health:
      "श्वसन संबंधी समस्याओं से बचें। तनाव कम करने के लिए योग और मेडिटेशन करें।",
    financial:
      "आर्थिक स्थिति में सुधार होगा। लेखन या बोलने से आय के नए स्रोत मिल सकते हैं।",
    love: "प्रेम संबंधों में भावनात्मक गहराई आएगी। मित्रता प्रेम में बदल सकती है।",
    career:
      "करियर में गतिशीलता रहेगी। नई परियोजनाओं की शुरुआत होगी। टीम वर्क में सफलता मिलेगी।",
    family:
      "भाई-बहनों के साथ संबंध मधुर रहेंगे। पारिवारिक समारोहों में भागीदारी होगी।",
    education:
      "भाषा और साहित्य में रुचि बढ़ेगी। नए कोर्स या स्किल सीखने के अवसर मिलेंगे।",
    travel:
      "छोटी यात्राएं लाभकारी रहेंगी। स्थानीय कारोबारी यात्राओं से फायदा होगा।",
    overall:
      "जनवरी 2025 मिथुन राशि के जातकों के लिए संवाद, नेटवर्किंग और नई शुरुआत का महीना रहेगा। बुद्धि और कौशल का सदुपयोग करें।",
  },
  {
    rashi: "karka",
    name: "कर्क",
    description:
      "कर्क राशि के जातकों के लिए जनवरी 2025 भावनात्मक संतुष्टि और पारिवारिक खुशी का महीना है। घर और परिवार को प्राथमिकता दें।",
    benefits:
      "इस महीने कर्क राशि के जातकों को घर-परिवार से जुड़े फायदे मिलेंगे। संपत्ति में वृद्धि हो सकती है। मातृ सुख की प्राप्ति होगी।",
    health:
      "पेट और पाचन संबंधी समस्याओं से बचें। खान-पान में संयम रखें और तरल पदार्थों का सेवन बढ़ाएं।",
    financial:
      "घरेलू व्यवसाय से अच्छी आय हो सकती है। रियल एस्टेट में निवेश लाभकारी होगा।",
    love: "पारिवारिक प्रेम में वृद्धि होगी। जीवनसाथी के साथ भावनात्मक जुड़ाव बढ़ेगा।",
    career:
      "होटल, रेस्टोरेंट या खाद्य उद्योग में अवसर मिल सकते हैं। माता से करियर में सहायता मिलेगी।",
    family:
      "मां का स्वास्थ्य अच्छा रहेगा। घर में नई खुशियां आएंगी। बच्चों से अच्छी खबर मिलेगी।",
    education:
      "इतिहास, भूगोल या घरेलू विज्ञान में रुचि बढ़ेगी। पारंपरिक ज्ञान सीखने के अवसर मिलेंगे।",
    travel: "तीर्थयात्रा के अवसर मिल सकते हैं। समुद्री यात्रा लाभकारी होगी।",
    overall:
      "जनवरी 2025 कर्क राशि के जातकों के लिए भावनात्मक संतुष्टि और पारिवारिक सुख का महीना रहेगा। मन की शांति मिलेगी।",
  },
  {
    rashi: "simha",
    name: "सिंह",
    description:
      "सिंह राशि के जातकों के लिए जनवरी 2025 नेतृत्व और सम्मान का महीना है। आत्मविश्वास और व्यक्तित्व का प्रभाव बढ़ेगा।",
    benefits:
      "इस महीने सिंह राशि के जातकों को सामाजिक सम्मान मिलेगा। सरकारी कार्यों में सफलता होगी। नेतृत्व की भूमिका मिल सकती है।",
    health:
      "हृदय संबंधी समस्याओं से बचें। नियमित व्यायाम और योग करें। आंखों की जांच कराएं।",
    financial:
      "सोना-चांदी की खरीदारी के अवसर मिलेंगे। लक्जरी सामान में निवेश लाभकारी होगा।",
    love: "प्रेम जीवन में रोमांस और आकर्षण बढ़ेगा। शादी-विवाह के योग बन सकते हैं।",
    career:
      "मैनेजमेंट या लीडरशिप की भूमिका मिल सकती है। सरकारी नौकरी के अवसर हैं।",
    family: "पिता का स्वास्थ्य अच्छा रहेगा। घर में मंगल कार्य हो सकते हैं।",
    education:
      "कला, संगीत या थिएटर में रुचि बढ़ेगी। रचनात्मक क्षेत्रों में सफलता मिलेगी।",
    travel: "विदेश यात्रा के योग हैं। राजकीय या सरकारी यात्रा हो सकती है।",
    overall:
      "जनवरी 2025 सिंह राशि के जातकों के लिए गौरव, सम्मान और नेतृत्व का महीना रहेगा। आत्मविश्वास से आगे बढ़ें।",
  },
  {
    rashi: "kanya",
    name: "कन्या",
    description:
      "कन्या राशि के जातकों के लिए जनवरी 2025 कड़ी मेहनत और व्यावहारिकता का महीना है। विस्तार पर ध्यान देने से सफलता मिलेगी।",
    benefits:
      "इस महीने कन्या राशि के जातकों को सेवा क्षेत्र में अवसर मिलेंगे। स्वास्थ्य सेवा या शिक्षा के क्षेत्र में सफलता होगी।",
    health:
      "पाचन तंत्र का ध्यान रखें। नियमित दिनचर्या अपनाएं और संतुलित आहार लें।",
    financial:
      "छोटी-छोटी बचत से बड़ा फायदा होगा। दैनिक खर्चों पर नियंत्रण रखें।",
    love: "प्रेम में व्यावहारिकता होगी। दीर्घकालिक संबंधों पर फोकस करें।",
    career:
      "तकनीकी क्षेत्र में उन्नति होगी। विश्लेषण और अनुसंधान के काम में सफलता मिलेगी।",
    family:
      "स्वास्थ्य संबंधी चिंताओं का समाधान होगा। परिवार की सेवा का अवसर मिलेगा।",
    education:
      "विज्ञान और तकनीक में रुचि बढ़ेगी। व्यावसायिक कोर्स करने के अवसर मिलेंगे।",
    travel:
      "काम के सिलसिले में यात्रा होगी। स्वास्थ्य संबंधी यात्रा हो सकती है।",
    overall:
      "जनवरी 2025 कन्या राशि के जातकों के लिए सेवा, स्वास्थ्य और व्यावहारिक सफलता का महीना रहेगा। धैर्य रखें।",
  },
  {
    rashi: "tula",
    name: "तुला",
    description:
      "तुला राशि के जातकों के लिए जनवरी 2025 संतुलन और साझेदारी का महीना है। कलात्मक गुणों का विकास होगा।",
    benefits:
      "इस महीने तुला राशि के जातकों को व्यापारिक साझेदारी में लाभ होगा। न्याय और कानूनी मामलों में सफलता मिलेगी।",
    health:
      "किडनी और मूत्र संबंधी समस्याओं से बचें। पानी का अधिक सेवन करें और नमक कम लें।",
    financial:
      "साझेदारी के व्यवसाय में फायदा होगा। सुंदरता और फैशन से जुड़े व्यवसाय लाभकारी होंगे।",
    love: "प्रेम संबंधों में संतुलन आएगा। शादी-विवाह के शुभ योग बनेंगे।",
    career:
      "डिप्लोमेसी, कानून या कला के क्षेत्र में अवसर मिलेंगे। मध्यस्थता की भूमिका निभा सकते हैं।",
    family: "जीवनसाथी के साथ समझ बढ़ेगी। पारिवारिक सामंजस्य बना रहेगा।",
    education:
      "कला, संगीत या कानून की पढ़ाई में रुचि होगी। सौंदर्य संबंधी कोर्स कर सकते हैं।",
    travel: "रोमांटिक यात्रा के अवसर मिल सकते हैं। सुंदर स्थानों की सैर होगी।",
    overall:
      "जनवरी 2025 तुला राशि के जातकों के लिए साझेदारी, संतुलन और सुंदरता का महीना रहेगा। रिश्तों को प्राथमिकता दें।",
  },
  {
    rashi: "vrishchika",
    name: "वृश्चिक",
    description:
      "वृश्चिक राशि के जातकों के लिए जनवरी 2025 रूपांतरण और गहन अध्ययन का महीना है। छुपे हुए रहस्यों का खुलासा होगा।",
    benefits:
      "इस महीने वृश्चिक राशि के जातकों को अनुसंधान और जांच के कार्यों में सफलता मिलेगी। गुप्त धन की प्राप्ति हो सकती है।",
    health:
      "प्रजनन संबंधी समस्याओं से बचें। नियमित स्वास्थ्य जांच कराएं और तनाव से दूर रहें।",
    financial:
      "बीमा, टैक्स या इन्वेस्टमेंट के मामलों में फायदा होगा। छुपे हुए धन के स्रोत मिल सकते हैं।",
    love: "प्रेम में गहराई और जुनून होगा। भावनात्मक तीव्रता बढ़ेगी।",
    career:
      "मनोविज्ञान, अनुसंधान या जासूसी के क्षेत्र में अवसर मिलेंगे। रहस्यमय कार्यों में सफलता होगी।",
    family:
      "पारिवारिक रहस्यों का खुलासा हो सकता है। बुजुर्गों से महत्वपूर्ण जानकारी मिलेगी।",
    education:
      "गहन अध्ययन में रुचि होगी। मनोविज्ञान या रहस्य विषयों में दक्षता हासिल करेंगे।",
    travel: "आध्यात्मिक या रहस्यमय स्थानों की यात्रा हो सकती है।",
    overall:
      "जनवरी 2025 वृश्चिक राशि के जातकों के लिए रूपांतरण, रहस्य और गहन समझ का महीना रहेगा। अंतर्दृष्टि बढ़ेगी।",
  },
  {
    rashi: "dhanu",
    name: "धनु",
    description:
      "धनु राशि के जातकों के लिए जनवरी 2025 ज्ञान और दर्शन का महीना है। विदेशी संपर्क और उच्च शिक्षा के अवसर मिलेंगे।",
    benefits:
      "इस महीने धनु राशि के जातकों को शिक्षा, कानून या धर्म के क्षेत्र में सफलता मिलेगी। विदेशी व्यापार में लाभ होगा।",
    health:
      "जांघों और कूल्हों की समस्याओं से बचें। नियमित व्यायाम करें और लंबी यात्रा में सावधानी बरतें।",
    financial:
      "उच्च शिक्षा या विदेशी निवेश से फायदा होगा। प्रकाशन और मीडिया से आय हो सकती है।",
    love: "विदेशी या दूसरी संस्कृति के व्यक्ति से प्रेम हो सकता है। दूर के रिश्ते मजबूत होंगे।",
    career:
      "शिक्षण, कानून या दर्शन के क्षेत्र में अवसर मिलेंगे। विदेशी कंपनी में नौकरी मिल सकती है।",
    family:
      "गुरु या शिक्षक से पारिवारिक सलाह मिलेगी। धार्मिक कार्यों में परिवार की भागीदारी होगी।",
    education:
      "उच्च शिक्षा के अवसर मिलेंगे। विदेशी भाषा या संस्कृति सीखने की इच्छा होगी।",
    travel:
      "लंबी दूरी की यात्रा के अवसर मिलेंगे। तीर्थयात्रा या शैक्षणिक यात्रा हो सकती है।",
    overall:
      "जनवरी 2025 धनु राशि के जातकों के लिए ज्ञान, दर्शन और विस्तार का महीना रहेगा। नए क्षितिज खुलेंगे।",
  },
  {
    rashi: "makara",
    name: "मकर",
    description:
      "मकर राशि के जातकों के लिए जनवरी 2025 कड़ी मेहनत और अनुशासन का महीना है। दीर्घकालिक लक्ष्यों पर फोकस करें।",
    benefits:
      "इस महीने मकर राशि के जातकों को करियर में बड़ी सफलता मिल सकती है। सरकारी पद या प्राधिकरण में वृद्धि होगी।",
    health:
      "हड्डियों और जोड़ों की समस्याओं से बचें। कैल्शियम और विटामिन डी का सेवन बढ़ाएं।",
    financial:
      "धीरे-धीरे लेकिन स्थिर आर्थिक वृद्धि होगी। पारंपरिक निवेश लाभकारी होंगे।",
    love: "प्रेम में स्थिरता और प्रतिबद्धता होगी। पारंपरिक रिश्तों को प्राथमिकता मिलेगी।",
    career:
      "सरकारी या कॉर्पोरेट क्षेत्र में पदोन्नति के अवसर मिलेंगे। अनुशासन और मेहनत का फल मिलेगा।",
    family: "बुजुर्गों का आशीर्वाद मिलेगा। पारिवारिक परंपराओं का सम्मान करें।",
    education:
      "व्यावसायिक शिक्षा में रुचि होगी। प्रबंधन या इंजीनियरिंग के कोर्स फायदेमंद होंगे।",
    travel:
      "व्यावसायिक यात्रा अधिक होगी। पहाड़ी स्थानों की यात्रा लाभकारी होगी।",
    overall:
      "जनवरी 2025 मकर राशि के जातकों के लिए अनुशासन, मेहनत और धीमी लेकिन स्थिर प्रगति का महीना रहेगा।",
  },
  {
    rashi: "kumbha",
    name: "कुम्भ",
    description:
      "कुंभ राशि के जातकों के लिए जनवरी 2025 नवाचार और मित्रता का महीना है। सामाजिक नेटवर्क का विस्तार होगा।",
    benefits:
      "इस महीने कुंभ राशि के जातकों को टेक्नोलॉजी और इनोवेशन के क्षेत्र में सफलता मिलेगी। सामाजिक कार्यों में सम्मान मिलेगा।",
    health:
      "ब्लड सर्कुलेशन और पैरों की समस्याओं से बचें। नियमित चेकअप कराएं और एक्टिव रहें।",
    financial:
      "टेक्नोलॉजी स्टॉक्स या फ्यूचर इन्वेस्टमेंट से फायदा होगा। ग्रुप इन्वेस्टमेंट लाभकारी होंगे।",
    love: "अनोखे और अलग तरीके से प्रेम व्यक्त करेंगे। मित्रता से प्रेम में बदलाव हो सकता है।",
    career:
      "IT, साइंस या सामाजिक सेवा के क्षेत्र में अवसर मिलेंगे। टीम लीडर की भूमिका मिल सकती है।",
    family:
      "मित्र समान परिवारिक संबंध बनेंगे। सामाजिक कार्यों में परिवार का साथ मिलेगा।",
    education:
      "विज्ञान, टेक्नोलॉजी या सामाजिक विज्ञान में रुचि बढ़ेगी। ऑनलाइन कोर्स फायदेमंद होंगे।",
    travel:
      "ग्रुप ट्रैवल के अवसर मिलेंगे। टेक्नोलॉजी कॉन्फ्रेंस या सेमिनार में भागीदारी होगी।",
    overall:
      "जनवरी 2025 कुंभ राशि के जातकों के लिए नवाचार, मित्रता और सामाजिक सेवा का महीना रहेगा। भविष्य की योजना बनाएं।",
  },
  {
    rashi: "meena",
    name: "मीन",
    description:
      "मीन राशि के जातकों के लिए जनवरी 2025 आध्यात्म और कल्पना का महीना है। अंतर्ज्ञान और भावनाओं को महत्व दें।",
    benefits:
      "इस महीने मीन राशि के जातकों को आध्यात्मिक उन्नति मिलेगी। कला, संगीत या फिल्म के क्षेत्र में सफलता होगी।",
    health:
      "पैरों और इम्यून सिस्टम का ध्यान रखें। मेडिटेशन और योग को दैनिक जीवन में शामिल करें।",
    financial:
      "भावनात्मक निवेश या क्रिएटिव फील्ड से आय हो सकती है। दान-पुण्य के कार्य करें।",
    love: "प्रेम में रोमांटिक और कल्पनाशील होंगे। आध्यात्मिक साझेदारी मिल सकती है।",
    career:
      "फिल्म, संगीत, चिकित्सा या आध्यात्मिक क्षेत्र में अवसर मिलेंगे। सेवा भाव से काम करें।",
    family:
      "पारिवारिक सदस्यों की मदद करने का अवसर मिलेगा। भावनात्मक जुड़ाव बढ़ेगा।",
    education:
      "कला, संगीत या आध्यात्मिक विषयों में रुचि होगी। इंट्यूशन डेवलपमेंट कोर्स कर सकते हैं।",
    travel:
      "आध्यात्मिक या पवित्र स्थानों की यात्रा हो सकती है। जल के पास के स्थान अच्छे रहेंगे।",
    overall:
      "जनवरी 2025 मीन राशि के जातकों के लिए आध्यात्म, कल्पना और सेवा का महीना रहेगा। अंतर्ज्ञान पर भरोसा करें।",
  },
];

const getRashiIcon = (rashi: string) => {
  switch (rashi) {
    case "mesha":
      return <Flame className="w-8 h-8 text-red-600" />;
    case "vrishabha":
      return <Mountain className="w-8 h-8 text-green-700" />;
    case "mithuna":
      return <Wind className="w-8 h-8 text-blue-600" />;
    case "karka":
      return <Waves className="w-8 h-8 text-blue-500" />;
    case "simha":
      return <Crown className="w-8 h-8 text-yellow-600" />;
    case "kanya":
      return <Leaf className="w-8 h-8 text-green-600" />;
    case "tula":
      return <Scale className="w-8 h-8 text-purple-600" />;
    case "vrishchika":
      return <Eye className="w-8 h-8 text-red-700" />;
    case "dhanu":
      return <Target className="w-8 h-8 text-orange-600" />;
    case "makara":
      return <Shield className="w-8 h-8 text-gray-700" />;
    case "kumbha":
      return <Droplets className="w-8 h-8 text-cyan-600" />;
    case "meena":
      return <Waves className="w-8 h-8 text-teal-600" />;
    default:
      return <Star className="w-8 h-8 text-amber-600" />;
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

export default function RashifalSection() {
  return (
    <div className="min-h-screen  p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 mb-6 shadow-lg">
            <Star className="w-10 h-10 text-white fill-current" />
          </div>
          <h1 className="text-2xl md:text-4xl font-bold text-amber-900 mb-4 font-serif">
            राशिफल जनवरी 2025
          </h1>
          <p className="text-xl text-amber-800 max-w-3xl mx-auto leading-relaxed">
            सभी 12 राशियों के लिए विस्तृत भविष्यफल और जीवन के विभिन्न क्षेत्रों
            की जानकारी
          </p>
          <div className="flex items-center justify-center gap-2 mt-6">
            <div className="w-2 h-2 rounded-full bg-amber-400"></div>
            <div className="w-3 h-3 rounded-full bg-amber-500"></div>
            <div className="w-2 h-2 rounded-full bg-amber-400"></div>
          </div>
        </div>

        {/* Zodiac Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {rasifalData.map((rashi) => (
            <Dialog key={rashi.rashi}>
              <DialogTrigger asChild>
                <Card className="cursor-pointer transition-all duration-300 hover:shadow-2xl hover:scale-105 border-2 border-amber-200 hover:border-amber-400 bg-gradient-to-br from-white to-amber-50 group">
                  <CardHeader className="text-center pb-4">
                    <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-amber-100 to-orange-200 flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
                      {getRashiIcon(rashi.rashi)}
                    </div>
                    <CardTitle className="text-3xl font-bold text-amber-900 font-serif mb-2">
                      {rashi.name}
                    </CardTitle>
                   
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base text-amber-800 line-clamp-4 leading-relaxed text-center">
                      {rashi.description}
                    </CardDescription>
                    <div className="mt-6 text-center">
                      <span className="text-sm text-amber-600 font-medium bg-amber-100 px-3 py-1 rounded-full">
                        विस्तार से देखें →
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </DialogTrigger>

              <DialogContent className="overflow-hidden bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-200">
                <DialogHeader className="border-b border-amber-200 pb-4">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-200 to-orange-300 flex items-center justify-center shadow-lg">
                      {getRashiIcon(rashi.rashi)}
                    </div>
                    <div>
                      <DialogTitle className="text-3xl font-bold text-amber-900 font-serif">
                        {rashi.name} राशिफल
                      </DialogTitle>
                      <DialogDescription className="text-amber-700 text-lg mt-1">
                        जनवरी 2025 - विस्तृत भविष्यफल
                      </DialogDescription>
                    </div>
                  </div>
                </DialogHeader>

                <ScrollArea className="h-[60vh] pr-4">
                  <div className="space-y-6">
                    {/* Description */}
                    <div className="p-4 bg-gradient-to-r from-amber-100 to-orange-100 rounded-lg border-l-4 border-amber-500">
                      <h3 className="font-bold text-lg mb-3 text-amber-900 flex items-center gap-2">
                        <Star className="w-5 h-5" />
                        सामान्य विवरण
                      </h3>
                      <p className="text-amber-800 leading-relaxed text-base">
                        {rashi.description}
                      </p>
                    </div>

                    <Tabs defaultValue="benefits" className="w-full">
                      <TabsList className="grid w-full grid-cols-4 lg:grid-cols-9 gap-1 h-auto p-1 bg-amber-100">
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
                            className="flex flex-col items-center gap-1 p-3 text-xs data-[state=active]:bg-amber-600 data-[state=active]:text-white data-[state=active]:shadow-md transition-all"
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
                          <Card className="border-amber-200 bg-gradient-to-br from-white to-amber-50">
                            <CardHeader className="bg-gradient-to-r from-amber-100 to-orange-100 rounded-t-lg">
                              <CardTitle className="flex items-center gap-3 text-xl text-amber-900">
                                {getTabIcon(tab)}
                                {getTabLabel(tab)}
                              </CardTitle>
                            </CardHeader>
                            <CardContent className="pt-6">
                              <p className="text-amber-800 leading-relaxed text-base">
                                {rashi[tab as keyof typeof rashi]}
                              </p>
                            </CardContent>
                          </Card>
                        </TabsContent>
                      ))}
                    </Tabs>
                  </div>
                </ScrollArea>
              </DialogContent>
            </Dialog>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center mt-16 py-8 border-t border-amber-200">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Star className="w-5 h-5 text-amber-500 fill-current" />
            <Star className="w-6 h-6 text-amber-600 fill-current" />
            <Star className="w-5 h-5 text-amber-500 fill-current" />
          </div>
          <p className="text-amber-700 text-base font-medium">
            यह राशिफल केवल मनोरंजन के लिए है। महत्वपूर्ण निर्णयों के लिए
            विशेषज्ञ सलाह लें।
          </p>
        </div>
      </div>
    </div>
  );
}
