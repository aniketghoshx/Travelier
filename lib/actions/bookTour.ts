"use server";

import db from "@/lib/db";
import { BookingDetailsType } from "@/types/types";

export default async function bookTour(details: BookingDetailsType) {
  try {
    const res = await db.booking.create({
      data: {
        userId: details.userId,
        tourId: details.tourId,
        amount: details.amount,
        noOfTraveler: details.noOfTraveler,
        bookingDate: details.bookingDate,
      },
    });
    if (res) {
      return res;
    }
    return null;
  } catch (e) {
    console.log(e);
    return null;
  }
}
