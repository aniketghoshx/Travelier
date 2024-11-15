import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TourType } from "@/types/types";
import Image from "next/image";
import Link from "next/link";

export const AllTours = ({tours}: {tours: TourType[]}) => {
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
                  src={"/maldives.jpeg"}
                  alt={tour.title}
                  width={500}
                  height={500}
                />
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-gray-900">
                    {tour.title}
                  </CardTitle>
                  <CardDescription>{tour.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-teal-600">
                      ${tour.price}
                    </span>
                    <span className="text-sm text-gray-500">
                      {tour.duration} days
                    </span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link href={`/tour/${tour.id}`} className="w-full">
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
};
