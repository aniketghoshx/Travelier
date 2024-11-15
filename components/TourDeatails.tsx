"use client";
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
import { BookingDetailsType, TourType } from "@/types/types";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { useEffect, useState } from "react";
import { Slider } from "./ui/slider";
import { useSession } from "next-auth/react";
import bookTour from "@/lib/actions/bookTour";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";
import { ToastVariant } from "@/lib/types";

export const TourDetails = ({ tour }: { tour: TourType }) => {
  const session = useSession();
  const router = useRouter();
  const [travelers, setTravelers] = useState(1);
  const [bookingDate, setBookingDate] = useState("");
  const [minDate, setMinDate] = useState("");
  const totalPrice = tour.price * travelers;

  const { toast } = useToast();

  const msgToast = (variant: ToastVariant, title: string) => {
    console.log("in toast");
    toast({
      variant,
      title,
    });
  };

  const included = [
    "Luxury accommodation",
    "Daily breakfast and select meals",
    "Guided tours to iconic sites",
    "Yoga and meditation sessions",
    "Airport transfers",
  ];
  const itinerary = [
    { day: 1, description: "Arrival in Bali, welcome dinner" },
    { day: 2, description: "Ubud art villages and rice terraces tour" },
    { day: 3, description: "Mount Batur sunrise trek" },
    { day: 4, description: "Relaxation day with spa treatments" },
    { day: 5, description: "Uluwatu Temple and beach day" },
    { day: 6, description: "Cooking class and cultural show" },
    { day: 7, description: "Departure day" },
  ];

  const handleBooking = async () => {
    if (bookingDate.length === 0) {
      msgToast("destructive", "Please select booking date");
      return;
    }
    const bookingDetails: BookingDetailsType = {
      userId: parseInt(session.data?.user.id!),
      tourId: tour.id,
      amount: totalPrice,
      noOfTraveler: travelers,
      bookingDate: bookingDate,
    };

    const res = await bookTour(bookingDetails);
    if (res) {
      msgToast("default", "Tour booked successfully");
    } else {
      msgToast("destructive", "Failed to book Tour");
    }
    router.push("/");
  };

  useEffect(() => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    setMinDate(`${year}-${month}-${day}`);
  }, []);

  return (
    <>
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Image
                src={"/maldives.jpeg"}
                alt={tour.title}
                width={750}
                height={200}
              />
              <h1 className="text-4xl font-bold text-gray-900 my-4">
                {tour.title}
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
                        {itinerary.map((day) => (
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
                        {included.map((item, index) => (
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
                  <CardTitle>Book Your Tour</CardTitle>
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
                  <div className="space-y-2">
                    <Label htmlFor="booking-date">Booking Date</Label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <Input
                        id="booking-date"
                        type="date"
                        className="pl-10"
                        value={bookingDate}
                        onChange={(e) => setBookingDate(e.target.value)}
                        min={minDate}
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="travelers">Number of Travelers</Label>
                    <div className="relative flex justify-between">
                      <span>
                        <Users className="absolute left-1 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      </span>
                      <span>{travelers} person</span>
                      <div className="w-[68%] lg:w-[55%]">
                        <Slider
                          defaultValue={[1]}
                          min={1}
                          max={8}
                          step={1}
                          onValueChange={(value: number[]) =>
                            setTravelers(value[0])
                          }
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t">
                    <span className="text-lg font-semibold">Total Price:</span>
                    <span className="text-2xl font-bold text-teal-600">
                      ${totalPrice}
                    </span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    className="w-full bg-teal-600 hover:bg-teal-700 text-white"
                    onClick={handleBooking}
                  >
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
};
