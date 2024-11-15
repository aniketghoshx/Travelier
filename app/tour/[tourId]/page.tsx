import { TourDetails } from "@/components/TourDeatails";
import getTour from "@/lib/actions/getTour";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function TourDetailsPage({
  params,
}: {
  params: Promise<{ tourId: string }>;
}) {
  const session = await getServerSession(authOptions);
  if (!session?.user) {
    redirect("/signin");
  }
  const tourId = (await params).tourId;
  const tour = await getTour(tourId);
  if (!tour) {
    redirect("/tours");
  }
  return <TourDetails tour={tour} id={session.user.id} />;
}
