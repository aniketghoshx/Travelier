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
import { Label } from "@/components/ui/label";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { TourType } from "@/types/types";
import updateTour from "@/lib/actions/updateTour";
import { useToast } from "@/hooks/use-toast";
import { ToastVariant } from "@/lib/types";

export default function EditTour({ tour }: { tour: TourType }) {
  const router = useRouter();
  const { toast } = useToast();

  const msgToast = (variant: ToastVariant, title: string) => {
    console.log("in toast");
    toast({
      variant,
      title,
    });
  };

  const [editedTour, setEditedTour] = useState({
    id: `${tour.id}`,
    title: tour.title,
    description: tour.description,
    destination: tour.destination,
    duration: `${tour.duration}`,
    price: `${tour.price}`,
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setEditedTour((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await updateTour(editedTour);
    if (res) {
      msgToast("default", "Tour is edited");
    } else {
      msgToast("destructive", "Failed to edit tour, Please try again");
    }
    router.push("/admin/dashboard");
  };

  return (
    <>
      <main className="flex-grow">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="mb-6 flex justify-between items-center">
            <div className="text-3xl font-bold text-gray-900">Edit Tour</div>
            <Link href="/admin/dashboard">
              <Button variant="ghost" className="mt-4">
                <ArrowLeft className=" h-4 w-4" />
                Back to Dashboard
              </Button>
            </Link>
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
                    <Label htmlFor="name">Destination</Label>
                    <Input
                      id="destination"
                      name="destination"
                      value={editedTour.destination}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="name">Tour Name</Label>
                    <Input
                      id="title"
                      name="title"
                      value={editedTour.title}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      name="description"
                      value={editedTour.description}
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
                        value={editedTour.duration}
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
                        value={editedTour.price}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
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
