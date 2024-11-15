"use server";

import db from "@/lib/db";

export default async function getBookingHistory(userId: string) {
  try {
    const allTours = await db.booking.findMany({
      where: {
        userId: parseInt(userId),
        },
        include: {
            tour: true
        }
    });
    return allTours;
  } catch (e) {
    console.log(e);
    return null;
  }
}
