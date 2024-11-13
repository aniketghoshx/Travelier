"use server"

import { NewTourType } from "@/types/types";
import db from "@/lib/db";

export default async function createTour(tour: NewTourType) {
    try {
        const newTour = await db.tour.create({
            data: {
                title: tour.title,
                description: tour.description,
                destination: tour.destination,
                duration: parseInt(tour.duration),
                price: parseInt(tour.price),
            }
        })
        if (newTour) {
            return newTour;
        }
        return null;
    } catch (e) {
        console.log(e);
    }
}