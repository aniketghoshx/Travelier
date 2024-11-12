"use client"

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Calendar, Users, Clock } from "lucide-react";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";


export default function History() {
  const session = useSession();
  if (!session.data?.user) {
    redirect("/");
  }

  const [bookings, setBookings] = useState([
    {
      id: 1,
      tourName: "Serene Bali Retreat",
      date: "2023-08-15",
      duration: "7 days",
      price: 1299,
      status: "Upcoming",
    },
    {
      id: 2,
      tourName: "Alpine Adventure",
      date: "2023-09-22",
      duration: "10 days",
      price: 1899,
      status: "Upcoming",
    },
    {
      id: 3,
      tourName: "Tokyo Tech Tour",
      date: "2023-07-01",
      duration: "6 days",
      price: 1799,
      status: "Completed",
    },
    {
      id: 4,
      tourName: "Sahara Desert Expedition",
      date: "2023-11-05",
      duration: "12 days",
      price: 2499,
      status: "Upcoming",
    },
  ]);

  const cancelBooking = (id: number) => {
    setBookings(
      bookings.map((booking) =>
        booking.id === id ? { ...booking, status: "Cancelled" } : booking
      )
    );
  };

  return (
    <>
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">
            Booking History
          </h1>
          <div className="space-y-6">
            {bookings.map((booking) => (
              <Card key={booking.id}>
                <CardHeader>
                  <CardTitle>{booking.tourName}</CardTitle>
                  <CardDescription>Booking ID: {booking.id}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center">
                      <Calendar className="w-5 h-5 mr-2 text-teal-600" />
                      <span>Date: {booking.date}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 mr-2 text-teal-600" />
                      <span>Duration: {booking.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="w-5 h-5 mr-2 text-teal-600" />
                      <span>Price: ${booking.price}</span>
                    </div>
                    <div className="flex items-center">
                      <span
                        className={`px-2 py-1 rounded-full text-sm ${
                          booking.status === "Upcoming"
                            ? "bg-green-100 text-green-800"
                            : booking.status === "Completed"
                            ? "bg-blue-100 text-blue-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {booking.status}
                      </span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  {booking.status === "Upcoming" && (
                    <Button
                      variant="destructive"
                      onClick={() => cancelBooking(booking.id)}
                    >
                      Cancel Booking
                    </Button>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
