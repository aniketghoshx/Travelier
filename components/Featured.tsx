"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const destinations = [
  {
    name: "Serene Bali Retreat",
    image: "/placeholder.svg?height=400&width=600&text=Bali+Retreat",
    description:
      "Experience tranquility in the heart of Bali's lush landscapes.",
    price: 1299,
  },
  {
    name: "Alpine Adventure",
    image: "/placeholder.svg?height=400&width=600&text=Alpine+Adventure",
    description: "Discover the majestic beauty of the Swiss Alps.",
    price: 1899,
  },
  {
    name: "Maldives Paradise",
    image: "/placeholder.svg?height=400&width=600&text=Maldives+Paradise",
    description:
      "Indulge in luxury amidst crystal-clear waters and white sand beaches.",
    price: 2199,
  },
];

export const Featured = () => {
  return (
    <>
      <section id="destination" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Curated Destinations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {destinations.map((destination, index) => (
              <Card key={index} className="overflow-hidden shadow-lg">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-48 object-cover"
                />
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-gray-900">
                    {destination.name}
                  </CardTitle>
                  <CardDescription>{destination.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-teal-600">
                      ${destination.price}
                    </span>
                    <span className="text-sm text-gray-500">per person</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white">
                    Explore Package
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
