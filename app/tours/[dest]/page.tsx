import { AllTours } from "@/components/AllTours";
import getToursByDest from "@/lib/actions/getToursByDest";

export default async function ToursPage({
  params,
}: {
  params: Promise<{ dest: string }>;
}) {
    const dest = (await params).dest;
    const tours = await getToursByDest(dest);
  if (!tours || tours.length == 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          No Tours Found!
        </h2>
      </div>
    );
  }
  return <AllTours tours={tours} />;
}
