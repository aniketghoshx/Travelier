"use client";

import { useState } from "react";
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
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Label } from "@/components/ui/label";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function CreateTour() {
  const session = useSession();
  if (!session.data || session.data.user.role != "ADMIN") {
    redirect("/");
  }

  const [tour, setTour] = useState({
    name: "",
    description: "",
    duration: "",
    price: "",
    included: "",
    itinerary: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setTour((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("New tour:", tour);
  };

  return (
    <main className="flex-grow">
      <Link href="/admin/dashboard">
        <Button variant="ghost" className="mt-4">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Dashboard
        </Button>
      </Link>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Create Tour</h1>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>New Tour Details</CardTitle>
            <CardDescription>
              Enter the information for the new tour package
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
                  Create Tour
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
