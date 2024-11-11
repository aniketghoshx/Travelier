"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export const AuthButtons = () => {
  const router = useRouter();
  return (
    <>
      <div className="flex space-x-4">
        <Button
          variant="outline"
          className="text-teal-600 border-teal-600 hover:bg-teal-50"
          onClick={() => {
            router.push("/signin");
          }}
        >
          Sign In
        </Button>
        <Button
          className="bg-teal-600 text-white hover:bg-teal-700"
          onClick={() => {
            router.push("/signup");
          }}
        >
          Sign Up
        </Button>
      </div>
    </>
  );
};
