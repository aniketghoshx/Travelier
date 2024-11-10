"use client";

import { Plane, Hotel, Utensils, Camera } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const TravelExperience = () => {
  return (
    <>
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Tailored Travel Experiences
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Luxury Transportation",
                icon: Plane,
                description:
                  "Travel in style with our premium transportation options.",
              },
              {
                name: "Exquisite Accommodations",
                icon: Hotel,
                description:
                  "Stay in hand-picked, world-class hotels and resorts.",
              },
              {
                name: "Culinary Journeys",
                icon: Utensils,
                description:
                  "Savor local cuisines and fine dining experiences.",
              },
              {
                name: "Exclusive Tours",
                icon: Camera,
                description:
                  "Enjoy private, guided tours of iconic landmarks and hidden gems.",
              },
            ].map((experience, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 mx-auto rounded-full bg-teal-100 flex items-center justify-center">
                    <experience.icon className="h-8 w-8 text-teal-600" />
                  </div>
                  <CardTitle className="mt-4 text-xl font-semibold">
                    {experience.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{experience.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
