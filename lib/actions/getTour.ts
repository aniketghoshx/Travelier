"use server";

import db from "@/lib/db";

export default async function getTour(id: string) {
  try {
    const tour = await db.tour.findFirst({
      where: {
        id: parseInt(id),
      },
    });
    if (tour) {
      return tour;
    }
    return null;
  } catch (e) {
    return null;
    console.log(e);
  }
}
