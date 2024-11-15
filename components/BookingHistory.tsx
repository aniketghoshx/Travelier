"use client";

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
import { BookingTypes } from "@/types/types";
import { useToast } from "@/hooks/use-toast";
import { ToastVariant } from "@/lib/types";
import cancelBooking from "@/lib/actions/cancelBooking";

export const BookingHistory = ({
  allBookings,
}: {
  allBookings: BookingTypes[];
}) => {
  const [bookings, setBookings] = useState(allBookings);
  const { toast } = useToast();

  const msgToast = (variant: ToastVariant, title: string) => {
    console.log("in toast");
    toast({
      variant,
      title,
    });
  };

  const handleClick = async (bookingId: number) => {
    await cancelBooking(bookingId);
    setBookings(
      bookings.map((booking) =>
        booking.id === bookingId ? { ...booking, status: "Cancelled" } : booking
      )
    );
    msgToast("default", "Booking is canceled successfully");
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
                  <CardTitle>{booking.tour.title}</CardTitle>
                  <CardDescription>Booking ID: {booking.id}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center">
                      <Calendar className="w-5 h-5 mr-2 text-teal-600" />
                      <span>Date: {booking.bookingDate}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 mr-2 text-teal-600" />
                      <span>Duration: {booking.tour.duration} days</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="w-5 h-5 mr-2 text-teal-600" />
                      <span>Price: ${booking.amount}</span>
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
                      onClick={() => handleClick(booking.id)}
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
};
