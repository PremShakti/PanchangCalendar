import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Star, Heart, BookOpen } from "lucide-react"
import { link } from "fs"
import Link from "next/link"

const months = [
  { hindi: "जनवरी", english: "January" ,link: "/january" },
  { hindi: "फरवरी", english: "February", link: "/february" },
  { hindi: "मार्च", english: "March", link: "/march" },
  { hindi: "अप्रैल", english: "April", link: "/april" },
  { hindi: "मई", english: "May", link: "/may" },
  { hindi: "जून", english: "June", link: "/june" },
  { hindi: "जुलाई", english: "July", link: "/july" },
  { hindi: "अगस्त", english: "August", link: "/august" },
  { hindi: "सितंबर", english: "September", link: "/september" },
  { hindi: "अक्टूबर", english: "October", link: "/october" },
  { hindi: "नवंबर", english: "November", link: "/november" },
  { hindi: "दिसंबर", english: "December", link: "/december" },
]

const features = [
  {
    icon: Calendar,
    title: "पारंपरिक तिथियां",
    description: "सभी महत्वपूर्ण धार्मिक तिथियों और त्योहारों की जानकारी",
  },
  {
    icon: Star,
    title: "शुभ मुहूर्त",
    description: "विवाह, गृह प्रवेश और अन्य शुभ कार्यों के लिए मुहूर्त",
  },
  {
    icon: Heart,
    title: "व्रत और उपवास",
    description: "सभी व्रत, उपवास और धार्मिक अनुष्ठानों की विस्तृत जानकारी",
  },
  {
    icon: BookOpen,
    title: "धार्मिक ज्ञान",
    description: "त्योहारों का महत्व और धार्मिक कथाओं की जानकारी",
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50">
        <div className="container mx-auto px-4 py-4 md:py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 md:gap-3">
              <Calendar className="h-6 w-6 md:h-8 md:w-8 text-primary" />
              <h1 className="font-playfair text-xl md:text-3xl font-bold text-foreground">भक्ति कैलेंडर</h1>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <a href="#about" className="text-muted-foreground hover:text-accent transition-colors">
                परिचय
              </a>
              <a href="#features" className="text-muted-foreground hover:text-accent transition-colors">
                विशेषताएं
              </a>
              <a href="#contact" className="text-muted-foreground hover:text-accent transition-colors">
                संपर्क
              </a>
            </nav>
            {/* Mobile menu button */}
            <button className="md:hidden p-2">
              <div className="w-5 h-5 flex flex-col justify-center items-center">
                <span className="block w-4 h-0.5 bg-foreground mb-1"></span>
                <span className="block w-4 h-0.5 bg-foreground mb-1"></span>
                <span className="block w-4 h-0.5 bg-foreground"></span>
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-card/30 to-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 md:mb-6">
            आध्यात्मिक कैलेंडर
          </h2>
          <p className="text-base md:text-xl text-muted-foreground mb-6 md:mb-8 max-w-2xl mx-auto px-4">
            पारंपरिक भारतीय कैलेंडर के साथ सभी धार्मिक तिथियों, त्योहार और शुभ मुहूर्त की संपूर्ण जानकारी प्राप्त करें
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground w-full sm:w-auto">
            कैलेंडर देखें
          </Button>
        </div>
      </section>

      {/* Month Navigation */}
      <section className="py-12 md:py-16" id="months">
        <div className="container mx-auto px-4">
          <h3 className="font-playfair text-2xl md:text-3xl font-bold text-center text-foreground mb-8 md:mb-12">
            महीने चुनें
          </h3>
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {months?.map((month, index) => (
              <Link href={month.link} key={index} className="group">
             
              <Card
           
                className="hover:shadow-lg transition-all duration-300 cursor-pointer group hover:scale-105"
              >
                <CardContent className="p-4 md:p-6 text-center">
                  <h4 className="font-playfair text-lg md:text-xl font-semibold text-foreground mb-1 md:mb-2 group-hover:text-primary transition-colors">
                    {month.hindi}
                  </h4>
                  <p className="text-xs md:text-sm text-muted-foreground">{month.english}</p>
                </CardContent>
              </Card>
               </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-16 bg-card/30" id="features">
        <div className="container mx-auto px-4">
          <h3 className="font-playfair text-2xl md:text-3xl font-bold text-center text-foreground mb-8 md:mb-12">
            विशेषताएं
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-4 md:p-6">
                  <feature.icon className="h-10 w-10 md:h-12 md:w-12 text-primary mx-auto mb-3 md:mb-4" />
                  <h4 className="font-playfair text-lg md:text-xl font-semibold text-foreground mb-2 md:mb-3">
                    {feature.title}
                  </h4>
                  <p className="text-sm md:text-base text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 md:py-16" id="about">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="font-playfair text-2xl md:text-3xl font-bold text-foreground mb-6 md:mb-8">
              भक्ति कैलेंडर के बारे में
            </h3>
            <p className="text-base md:text-lg text-muted-foreground mb-4 md:mb-6 px-2">
              भक्ति कैलेंडर एक पारंपरिक भारतीय कैलेंडर है जो आपको सभी महत्वपूर्ण धार्मिक तिथियों, त्योहारों और शुभ मुहूर्त की जानकारी प्रदान
              करता है। यह आपके आध्यात्मिक जीवन को व्यवस्थित करने में सहायक है।
            </p>
            <p className="text-base md:text-lg text-muted-foreground px-2">
              हमारा उद्देश्य भारतीय संस्कृति और परंपराओं को डिजिटल युग में संरक्षित रखना है, ताकि आने वाली पीढ़ियां भी इन मूल्यवान
              जानकारियों का लाभ उठा सकें।
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                <Calendar className="h-5 w-5 md:h-6 md:w-6" />
                <h4 className="font-playfair text-lg md:text-xl font-bold">भक्ति कैलेंडर</h4>
              </div>
              <p className="text-primary-foreground/80 text-sm md:text-base">आपका विश्वसनीय आध्यात्मिक कैलेंडर</p>
            </div>
            <div className="text-center md:text-left">
              <h5 className="font-semibold mb-4 text-base md:text-lg">त्वरित लिंक</h5>
              <ul className="space-y-2 text-primary-foreground/80 text-sm md:text-base">
                <li>
                  <a href="#months" className="hover:text-primary-foreground transition-colors">
                    महीने
                  </a>
                </li>
                <li>
                  <a href="#features" className="hover:text-primary-foreground transition-colors">
                    विशेषताएं
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-primary-foreground transition-colors">
                    परिचय
                  </a>
                </li>
              </ul>
            </div>
            <div className="text-center md:text-left">
              <h5 className="font-semibold mb-4 text-base md:text-lg">संपर्क</h5>
              <p className="text-primary-foreground/80 text-sm md:text-base">आपके सुझाव और प्रतिक्रिया का स्वागत है</p>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 mt-6 md:mt-8 pt-6 md:pt-8 text-center text-primary-foreground/80 text-sm md:text-base">
            <p>&copy; 2024 भक्ति कैलेंडर। सभी अधिकार सुरक्षित।</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
