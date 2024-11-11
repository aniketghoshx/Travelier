"use client";

import { MapPin } from "lucide-react";
import { AuthButtons } from "./AuthButtons";
import Link from "next/link";
import { Navbar } from "./Navbar";

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
            <Navbar/>
            <AuthButtons />
          </div>
        </div>
      </header>
    </>
  );
};
