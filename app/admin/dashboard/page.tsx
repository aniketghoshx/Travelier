import Dashboard from "@/components/Dashboard";
import { Button } from "@/components/ui/button";
import getAllTours from "@/lib/actions/getAllTours";
import { authOptions } from "@/lib/auth";
import { Plus } from "lucide-react";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);
  if (!session?.user || session.user.role !== "ADMIN") {
    redirect("/");
  }
  const allTours = await getAllTours();

  if (!allTours || allTours?.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-900">
            No Tour is currently available
          </h1>
          <Link href="/admin/create-tour">
            <Button className="bg-teal-600 hover:bg-teal-700 text-white">
              <Plus className="mr-2 h-4 w-4" /> Create New Tour
            </Button>
          </Link>
        </div>
      </div>
    );
  }
  return <Dashboard allTours={allTours} />;
}
