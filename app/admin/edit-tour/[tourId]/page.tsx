import EditTour from "@/components/EditTour";
import getTour from "@/lib/actions/getTour";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function EditTourPage({
  params,
}: {
  params: Promise<{ tourId: string }>;
}) {
  const session = await getServerSession(authOptions);
  if (!session?.user || session.user.role !== "ADMIN") {
    redirect("/");
  }
  const tourId = (await params).tourId;
  const tour = await getTour(tourId);
  if (!tour) {
    redirect("/admin/dashboard");
  }

  return <EditTour tour={tour} />;
}
