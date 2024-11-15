"use server";

import db from "@/lib/db";

export default async function cancelBooking(bookingId: number) {
  try {
    await db.booking.update({
      where: {
        id: bookingId,
      },
      data: {
        status: "Cancelled",
      },
    });
  } catch (e) {
    console.log(e);
  }
}
