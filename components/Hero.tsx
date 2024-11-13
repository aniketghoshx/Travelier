"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import Link from "next/link";

export const Hero = () => {
  return (
    <>
      <section className="bg-gradient-to-br from-teal-600 via-teal-500 to-teal-400 text-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-down">
              Discover Your Next Adventure
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Explore the world&apos;s most beautiful destinations with
              TravelEase
            </p>
            <div className="max-w-md mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Where do you want to go?"
                  className="pl-10 py-6 rounded-full text-black"
                />
              </div>
              <Link href={"/tours"}>
                <Button className="mt-4 bg-yellow-400 text-blue-900 hover:bg-yellow-400 px-8 py-6 rounded-full text-lg font-semibold transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-1">
                  Search Destinations
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
