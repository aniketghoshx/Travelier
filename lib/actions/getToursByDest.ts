"use server";

import db from "@/lib/db";

export default async function getToursByDest(dest: string) {
  try {
    const tours = await db.tour.findMany({
      where: {
        destination: { contains: dest, mode: "insensitive" },
      },
    });
    return tours;
  } catch (e) {
    console.log(e);
    return null;
  }
}
