"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export const NewsLetter = () => {
  const [email, setEmail] = useState("");

  const handleClick = () => {
    console.log(email);
    setEmail("");
  };

  return (
    <>
      <section className="py-20 bg-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4 text-white">
              Stay Inspired
            </h2>
            <p className="text-xl mb-8 text-white">
              Subscribe to our newsletter for exclusive travel insights and
              special offers
            </p>
            <div className="max-w-md mx-auto flex gap-2">
              <Input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                className="flex-grow rounded-l-md border-0 font-medium"
              />
              <Button
                className="rounded-r-md bg-orange-500 text-white hover:bg-orange-400"
                onClick={handleClick}
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
