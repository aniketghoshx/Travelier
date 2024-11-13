"use server";

import db from "@/lib/db";

export default async function getAllTours() {
  try {
    const allTours = await db.tour.findMany();
    return allTours;
  } catch (e) {
    console.log(e);
    return null;
  }
}
