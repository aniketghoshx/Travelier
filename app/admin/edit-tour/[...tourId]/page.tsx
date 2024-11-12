"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function EditTour({ params }: { params: { id: string } }) {
  const session = useSession();
  if (!session.data || session.data.user.role != "ADMIN") {
    redirect("/");
  }

  const [tour, setTour] = useState({
    id: "",
    name: "",
    description: "",
    duration: "",
    price: "",
    included: "",
    itinerary: "",
  });

  useEffect(() => {
    const mockTour = {
      id: params.id,
      name: "Serene Bali Retreat",
      description:
        "Experience tranquility in the heart of Bali's lush landscapes.",
      duration: "7 days",
      price: "1299",
      included:
        "Luxury accommodation, Daily breakfast, Guided tours, Yoga sessions, Airport transfers",
      itinerary:
        "Day 1: Arrival, Day 2: Ubud tour, Day 3: Mount Batur trek, Day 4: Spa day, Day 5: Beach day, Day 6: Cultural show, Day 7: Departure",
    };
    setTour(mockTour);
  }, [params.id]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setTour((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Updated tour:", tour);
  };

  return (
    <>
      <main className="flex-grow">
        <Link href="/admin/dashboard">
          <Button variant="ghost" className="mt-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Dashboard
          </Button>
        </Link>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-900">Edit Tour</h1>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Edit Tour Details</CardTitle>
              <CardDescription>
                Update the information for this tour package
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Tour Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={tour.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      name="description"
                      value={tour.description}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="duration">Duration</Label>
                      <Input
                        id="duration"
                        name="duration"
                        value={tour.duration}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="price">Price</Label>
                      <Input
                        id="price"
                        name="price"
                        type="number"
                        value={tour.price}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="included">What's Included</Label>
                    <Textarea
                      id="included"
                      name="included"
                      value={tour.included}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="itinerary">Itinerary</Label>
                    <Textarea
                      id="itinerary"
                      name="itinerary"
                      value={tour.itinerary}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                <div className="mt-6">
                  <Button
                    type="submit"
                    className="w-full bg-teal-600 hover:bg-teal-700 text-white"
                  >
                    Update Tour
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
    </>
  );
}
