"use server";

import db from "@/lib/db";

export default async function deleteTour(id: number) {
  try {
    await db.tour.delete({
      where: {
        id: id,
      },
    });
  } catch (e) {
    console.log(e);
  }
}
