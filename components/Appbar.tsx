"use client";

import { MapPin } from "lucide-react";
import { Button } from "./ui/button";
import { Auth } from "./Auth";
import Link from "next/link";

export const Appbar = () => {
  return (
    <>
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center space-x-4">
              <MapPin className="h-8 w-8 text-teal-600" />
              <span className="text-2xl font-bold text-gray-900">
                Travelier
              </span>
            </Link>
            <nav>
              <ul className="flex space-x-6">
                <li>
                  <Link href="#destination">
                    <Button
                      variant="ghost"
                      className="text-gray-600 hover:text-teal-600"
                    >
                      Destinations
                    </Button>
                  </Link>
                </li>
                <li>
                  <Link href="#about">
                    <Button
                      variant="ghost"
                      className="text-gray-600 hover:text-teal-600"
                    >
                      About Us
                    </Button>
                  </Link>
                </li>
                <li>
                  <Link href="#experiences">
                    <Button
                      variant="ghost"
                      className="text-gray-600 hover:text-teal-600"
                    >
                      Experiences
                    </Button>
                  </Link>
                </li>

                <li>
                  <Link href="#contact">
                    <Button
                      variant="ghost"
                      className="text-gray-600 hover:text-teal-600"
                    >
                      Contact
                    </Button>
                  </Link>
                </li>
              </ul>
            </nav>
            <Auth />
          </div>
        </div>
      </header>
    </>
  );
};
