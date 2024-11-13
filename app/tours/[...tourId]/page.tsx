import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Calendar, Users, Clock, DollarSign } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default async function TourDetails({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const id = (await params).slug;
  const tour = {
    id: id,
    name: "Serene Bali Retreat",
    image: "/maldives.jpeg",
    description:
      "Experience tranquility in the heart of Bali's lush landscapes. This retreat offers a perfect blend of relaxation, culture, and adventure.",
    price: 1299,
    duration: "7 days",
    included: [
      "Luxury accommodation",
      "Daily breakfast and select meals",
      "Guided tours to iconic sites",
      "Yoga and meditation sessions",
      "Airport transfers",
    ],
    itinerary: [
      { day: 1, description: "Arrival in Bali, welcome dinner" },
      { day: 2, description: "Ubud art villages and rice terraces tour" },
      { day: 3, description: "Mount Batur sunrise trek" },
      { day: 4, description: "Relaxation day with spa treatments" },
      { day: 5, description: "Uluwatu Temple and beach day" },
      { day: 6, description: "Cooking class and cultural show" },
      { day: 7, description: "Departure day" },
    ],
  };

  return (
    <>
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Image
                src={tour.image}
                alt={tour.name}
                width={750}
                height={200}
              />
              <h1 className="text-4xl font-bold text-gray-900 my-4">
                {tour.name}
              </h1>
              <p className="text-lg text-gray-700 mb-8">{tour.description}</p>

              <Tabs defaultValue="itinerary">
                <TabsList>
                  <TabsTrigger value="itinerary">Itinerary</TabsTrigger>
                  <TabsTrigger value="included">
                    What&apos;s Included
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="itinerary">
                  <Card>
                    <CardHeader>
                      <CardTitle>Tour Itinerary</CardTitle>
                      <CardDescription>
                        Day-by-day breakdown of your adventure
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-4">
                        {tour.itinerary.map((day) => (
                          <li key={day.day} className="flex items-start">
                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-teal-100 text-teal-800 font-bold mr-4">
                              {day.day}
                            </span>
                            <span>{day.description}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="included">
                  <Card>
                    <CardHeader>
                      <CardTitle>What&apos;s Included</CardTitle>
                      <CardDescription>
                        Everything you get with this tour package
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {tour.included.map((item, index) => (
                          <li key={index} className="flex items-center">
                            <svg
                              className="w-5 h-5 mr-2 text-green-500"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 13l4 4L19 7"
                              ></path>
                            </svg>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>

            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Tour Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 mr-2 text-teal-600" />
                    <span>{tour.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <DollarSign className="w-5 h-5 mr-2 text-teal-600" />
                    <span className="text-2xl font-bold">${tour.price}</span>
                    <span className="text-sm text-gray-500 ml-2">
                      per person
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-5 h-5 mr-2 text-teal-600" />
                    <span>Select date</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-5 h-5 mr-2 text-teal-600" />
                    <span>Select travelers</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white">
                    Book Now
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
