import { BookingHistory } from "@/components/BookingHistory";
import getBookingHistory from "@/lib/actions/getBookingHistory";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

import { redirect } from "next/navigation";

export default async function History() {
  const session = await getServerSession(authOptions);
  if (!session?.user) {
    redirect("/");
  }

  const allBookings = await getBookingHistory(session.user.id);

  if (!allBookings || allBookings?.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-900">
            No Booking is currently available!
          </h1>
        </div>
      </div>
    );
  }

  allBookings.sort(function (a, b) {
    const x = a.bookingDate.split("-").join("");
    const y = b.bookingDate.split("-").join("");
    return x > y ? 1 : x < y ? -1 : 0;
  });

  return <BookingHistory allBookings={allBookings} />;
}
