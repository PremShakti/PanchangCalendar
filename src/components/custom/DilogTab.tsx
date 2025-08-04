import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DialogClose, DialogFooter } from "../ui/dialog";
import { Button } from "../ui/button";
import UserTextForm from "../calander-sheet/UserTextForm";
import Image from "next/image";
import {
  BookOpen,
  Calendar,
  ExternalLink,
  Globe,
  Info,
  Moon,
  Sparkles,
  Star,
  Sun,
} from "lucide-react";
import { Badge } from "../ui/badge";
export function DilogTab({
  event,
  title,
  discription,
  dayName,
  dateObj,
  dayNumber,
  hinduMonth,
  paksh,
  tithi,
  nakshatra,
  sunrise,
  sunset,
  url,
  date,
  monthName,
}: {
  title?: string;
  discription?: string;
  dayName: string;
  dateObj?: Date;
  dayNumber?: string;
  hinduMonth?: string;
  paksh?: string;
  tithi?: string;
  nakshatra?: string;
  sunrise?: string;
  sunset?: string;
  event?: any;
  url?: string;
  date: string;
  monthName?: string;
}) {
  return (
    <div className="flex w-full h-full flex-col gap-4 sm:gap-6">
      <Tabs defaultValue="description">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="description">Description</TabsTrigger>
          <TabsTrigger value="todo">Todo</TabsTrigger>
        </TabsList>
        <TabsContent value="description" className="h-full ">
          <Card className=" bg-transparent border-none shadow-none">
            <CardHeader className="p-4 sm:p-6 bg-gradient-to-r from-orange-50 via-yellow-50 to-red-50 dark:from-orange-950/30 dark:via-yellow-950/30 dark:to-red-950/30 ">
              <div className="flex items-start gap-4">
                {/* Thumbnail Image */}
                {url && (
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden border-2 border-orange-300 shadow-lg shrink-0 ring-2 ring-orange-200">
                    <Image
                      src={url || "/placeholder.svg"}
                      alt={title || "Event Image"}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                  </div>
                )}

                <div className="flex-1 space-y-2">
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <CardTitle className="text-lg sm:text-xl md:text-2xl font-bold text-orange-700 dark:text-orange-400 flex items-center gap-2">
                        <Sparkles className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-500" />
                        {title}
                      </CardTitle>
                      <div className="flex items-center gap-2 text-orange-600 dark:text-orange-400">
                        <Calendar className="h-4 w-4" />
                        <span className="text-sm sm:text-base font-semibold">
                          {date}
                        </span>
                      </div>
                    </div>
                    <Badge
                      variant="secondary"
                      className="shrink-0 ml-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white border-0"
                    >
                      <Calendar className="h-3 w-3 mr-1" />
                      Today
                    </Badge>
                  </div>
                  <CardDescription className="text-sm sm:text-base text-muted-foreground">
                    {discription}
                  </CardDescription>
                </div>
              </div>
            </CardHeader>

            <CardContent className="space-y-4 sm:space-y-6 p-4 sm:p-0">
              {/* Enhanced Date Information */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mt-6 ">
                <Card className="border-l-4 border-l-orange-500 bg-gradient-to-r from-orange-50 via-yellow-50 to-orange-50 dark:from-orange-950/20 dark:via-yellow-950/20 dark:to-orange-950/20 shadow-md">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm font-semibold text-orange-700 dark:text-orange-400 flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-orange-600" />
                      Date Details
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="grid grid-cols-2 gap-3">
                      <div className="space-y-1">
                        <p className="text-xs text-muted-foreground">Day</p>
                        <p className="text-sm font-medium">{dayName}</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-xs text-muted-foreground">Month</p>
                        <p className="text-sm font-medium">{monthName}</p>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <p className="text-xs text-muted-foreground">Full Date</p>
                      <p className="text-sm font-semibold text-primary">
                        {date}
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-red-500 bg-gradient-to-r from-red-50 via-pink-50 to-red-50 dark:from-red-950/20 dark:via-pink-950/20 dark:to-red-950/20 shadow-md">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm font-semibold text-red-700 dark:text-red-400 flex items-center gap-2">
                      <Star className="h-4 w-4 text-red-600" />
                      Hindu Calendar
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="grid grid-cols-2 gap-3">
                      <div className="space-y-1">
                        <p className="text-xs text-muted-foreground">Month</p>
                        <p className="text-sm font-medium">
                          {hinduMonth || "N/A"}
                        </p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-xs text-muted-foreground">Paksh</p>
                        <p className="text-sm font-medium">{paksh || "N/A"}</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-xs text-muted-foreground">Tithi</p>
                        <p className="text-sm font-medium">{tithi || "N/A"}</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-xs text-muted-foreground">
                          Nakshatra
                        </p>
                        <p className="text-sm font-medium">
                          {nakshatra || "N/A"}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Enhanced Sun Times */}
              {(sunrise || sunset) && (
                <Card className="border-l-4 border-l-amber-500 bg-gradient-to-r from-amber-50 via-yellow-50 to-amber-50 dark:from-amber-950/20 dark:via-yellow-950/20 dark:to-amber-950/20 shadow-md">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm font-semibold text-amber-700 dark:text-amber-400 flex items-center gap-2">
                      <Sun className="h-4 w-4 text-amber-600" />
                      Sun Times
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
                      {sunrise && (
                        <div className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-orange-100 via-yellow-100 to-orange-100 dark:from-orange-950/40 dark:via-yellow-950/40 dark:to-orange-950/40 border border-orange-200 dark:border-orange-800">
                          <div className="p-2 rounded-full bg-gradient-to-r from-orange-400 to-yellow-400 shadow-md">
                            <Sun className="h-4 w-4 text-white" />
                          </div>
                          <div>
                            <p className="text-xs text-muted-foreground">
                              Sunrise
                            </p>
                            <p className="text-sm font-semibold">{sunrise}</p>
                          </div>
                        </div>
                      )}
                      {sunset && (
                        <div className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-purple-100 via-pink-100 to-purple-100 dark:from-purple-950/40 dark:via-pink-950/40 dark:to-purple-950/40 border border-purple-200 dark:border-purple-800">
                          <div className="p-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 shadow-md">
                            <Moon className="h-4 w-4 text-white" />
                          </div>
                          <div>
                            <p className="text-xs text-muted-foreground">
                              Sunset
                            </p>
                            <p className="text-sm font-semibold">{sunset}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Wikipedia Information Section */}
              <Card className="overflow-hidden border-2 border-border/50 shadow-none">
                <CardHeader className="bg-gradient-to-r from-indigo-50 via-blue-50 to-indigo-50 dark:from-indigo-950/30 dark:via-blue-950/30 dark:to-indigo-950/30">
                  <CardTitle className="text-base sm:text-lg font-semibold text-indigo-700 dark:text-indigo-400 flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-indigo-600" />
                    Learn More About This Festival
                  </CardTitle>
                  <CardDescription className="text-sm text-muted-foreground">
                    Discover the history, significance, and cultural importance
                    of {title}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-4 sm:p-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Globe className="h-4 w-4" />
                      <span>Wikipedia Preview</span>
                    </div>

                    {/* Enhanced Wikipedia Preview */}
                    <div className="relative w-full  rounded-lg overflow-hidden border-2 border-border  ">
                      <iframe
                        src="https://en.wikipedia.org/wiki/Republic_Day_(India)"
                        className="w-full h-60 sm:h-[500px] bg-transparent"
                        title={`Wikipedia preview for ${title}`}
                        loading="lazy"
                        sandbox="allow-scripts allow-same-origin"
                      />

                      {/* Enhanced Floating Button */}
                      <div className="absolute top-3 right-3 z-20">
                        <Button
                          size="sm"
                          className="group shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 border-0"
                          asChild
                        >
                          <a
                            href="https://en.wikipedia.org/wiki/Republic_Day_(India)"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2"
                          >
                            <ExternalLink className="h-4 w-4" />
                            <span className="hidden sm:inline">
                              Open Full Page
                            </span>
                          </a>
                        </Button>
                      </div>
                    </div>

                    {/* Enhanced Source Information */}
                    <div className="space-y-2 p-3 rounded-lg bg-gradient-to-r from-slate-50 to-gray-50 dark:from-slate-900/50 dark:to-gray-900/50 border border-slate-200 dark:border-slate-700">
                      <div className="flex items-center gap-2">
                        <Info className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
                        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                          Source Information
                        </span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-muted-foreground">
                        <div>
                          <span className="font-medium">Source:</span> Wikipedia
                        </div>
                        <div>
                          <span className="font-medium">Type:</span>{" "}
                          Encyclopedia
                        </div>
                        <div className="sm:col-span-2">
                          <span className="font-medium">Content:</span>{" "}
                          Historical information and cultural significance
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="todo" className="mt-3 sm:mt-4">
          <Card className="border-none shadow-none">
            <UserTextForm />
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
