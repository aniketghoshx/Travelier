import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default function Tours() {
  const tours = [
    {
      id: 1,
      name: "Serene Bali Retreat",
      image: "/maldives.jpeg",
      description:
        "Experience tranquility in the heart of Bali's lush landscapes.",
      price: 1299,
      duration: "7 days",
    },
    {
      id: 2,
      name: "Alpine Adventure",
      image: "/maldives.jpeg",
      description: "Discover the majestic beauty of the Swiss Alps.",
      price: 1899,
      duration: "10 days",
    },
    {
      id: 3,
      name: "Maldives Paradise",
      image: "/maldives.jpeg",
      description:
        "Indulge in luxury amidst crystal-clear waters and white sand beaches.",
      price: 2199,
      duration: "8 days",
    },
    {
      id: 4,
      name: "Tokyo Tech Tour",
      image: "/maldives.jpeg",
      description: "Explore the futuristic wonders of Tokyo's technology hubs.",
      price: 1799,
      duration: "6 days",
    },
    {
      id: 5,
      name: "Sahara Desert Expedition",
      image: "/maldives.jpeg",
      description:
        "Embark on a thrilling journey through the golden dunes of the Sahara.",
      price: 2499,
      duration: "12 days",
    },
  ];

  return (
    <>
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Search Results
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tours.map((tour) => (
              <Card key={tour.id} className="overflow-hidden">
                <Image
                  src={tour.image}
                  alt={tour.name}
                  width={500}
                  height={500}
                />
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-gray-900">
                    {tour.name}
                  </CardTitle>
                  <CardDescription>{tour.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-teal-600">
                      ${tour.price}
                    </span>
                    <span className="text-sm text-gray-500">
                      {tour.duration}
                    </span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link href={`/tours/${tour.id}`} className="w-full">
                    <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white">
                      View Details
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
