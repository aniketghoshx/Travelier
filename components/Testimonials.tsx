"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const Testimonials = () => {
  return (
    <>
      <section id="experiences" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            What Our Travelers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Emily R.",
                location: "New York, USA",
                quote:
                  "Travelier transformed my vacation into an unforgettable journey. Their attention to detail and personalized service exceeded all expectations.",
              },
              {
                name: "James L.",
                location: "London, UK",
                quote:
                  "I've traveled with many companies, but none compare to the level of luxury and authenticity that Travelier provides. Truly a cut above the rest.",
              },
              {
                name: "Sophia C.",
                location: "Sydney, Australia",
                quote:
                  "From the moment I booked until the day I returned home, Travelier ensured every aspect of my trip was perfect. I can't wait for my next adventure with them!",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="bg-gray-50">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-gray-900">
                    {testimonial.name}
                  </CardTitle>
                  <CardDescription>{testimonial.location}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="italic text-gray-700">{testimonial.quote}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
