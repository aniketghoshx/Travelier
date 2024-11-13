"use server";

import { EditedTourType } from "@/types/types";
import db from "@/lib/db";

export default async function updateTour(tour: EditedTourType) {
  try {
    const updatedTour = await db.tour.update({
      where: {
        id: parseInt(tour.id),
      },
      data: {
        title: tour.title,
        description: tour.description,
        destination: tour.destination,
        duration: parseInt(tour.duration),
        price: parseInt(tour.price),
      },
    });
    if (updatedTour) {
      return updatedTour;
    }
    return null;
  } catch (e) {
    console.log(e);
  }
}
