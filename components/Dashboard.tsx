"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Edit, Trash2, Plus } from "lucide-react";
import Link from "next/link";
import { TourType } from "@/types/types";
import { ToastVariant } from "@/lib/types";
import { useToast } from "@/hooks/use-toast";
import deleteTour from "@/lib/actions/deleteTour";
import { useRouter } from "next/navigation";

export default function Dashboard({ allTours }: { allTours: TourType[] }) {
  const router = useRouter();
  const [tours, setTours] = useState(allTours);
  const { toast } = useToast();

  const msgToast = (variant: ToastVariant, title: string) => {
    console.log("in toast");
    toast({
      variant,
      title,
    });
  };

  const handleClick = async (id: number) => {
    await deleteTour(id);
    setTours(tours.filter((tour) => tour.id !== id));
    msgToast("default", "Tour is deleted successfully");
    router.push("/admin/dashboard")
  };

  return (
    <>
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-gray-900">
              Tour Management
            </h1>
            <Link href="/admin/create-tour">
              <Button className="bg-teal-600 hover:bg-teal-700 text-white">
                <Plus className="mr-2 h-4 w-4" /> Create New Tour
              </Button>
            </Link>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>All Tours</CardTitle>
              <CardDescription>
                Manage and edit your tour offerings
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Tour Name</TableHead>
                    <TableHead>Duration</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {tours.map((tour) => (
                    <TableRow key={tour.id}>
                      <TableCell className="font-medium">
                        {tour.title}
                      </TableCell>
                      <TableCell>{tour.duration}</TableCell>
                      <TableCell>${tour.price}</TableCell>
                      <TableCell className="text-right">
                        <Link href={`/admin/edit-tour/${tour.id}`}>
                          <Button variant="ghost" size="sm" className="mr-2">
                            <Edit className="h-4 w-4" />
                          </Button>
                        </Link>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleClick(tour.id)}
                        >
                          <Trash2 className="h-4 w-4 text-red-500" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </main>
    </>
  );
}
