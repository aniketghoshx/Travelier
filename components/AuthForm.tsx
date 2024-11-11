"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

const signUp = {
  title: "Create Your Travel Account",
  description:
    "Join Travelier to access exclusive deals and personalized travel recommendations.",
  footer: "Already have an account?",
};

const signIn = {
  title: "Welcome Back to Travelier",
  description:
    "Sign in to access your account and continue planning your next adventure.",
  footer: "Don't have an account?",
};

interface AuthFormProps {
  type: "signIn" | "signUp";
}

export const AuthForm = ({ type }: AuthFormProps) => {
  const [isOpen, setIsOpen] = useState(true);
  const router = useRouter();
  return (
    <>
      <Dialog
        open={isOpen}
        onOpenChange={() => {
          setIsOpen(!isOpen);
          router.push("/");
        }}
      >
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="text-center">
              {type == "signUp" ? signUp.title : signIn.title}
            </DialogTitle>
            <DialogDescription className="text-center">
              {type == "signUp" ? signUp.description : signIn.description}
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            {type == "signUp" && (
              <div>
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input id="name" className="col-span-3 mt-2" />
              </div>
            )}
            <div>
              <Label htmlFor="email" className="text-right">
                Email
              </Label>
              <Input id="email" type="email" className="col-span-3 mt-2" />
            </div>
            <div>
              <Label htmlFor="password" className="text-right">
                Password
              </Label>
              <Input
                id="password"
                type="password"
                className="col-span-3 mt-2"
              />
            </div>
          </div>
          <DialogFooter>
            <Button
              size="lg"
              type="submit"
              className="bg-teal-600 hover:bg-teal-700"
            >
              {type == "signUp" ? "Sign Up" : "Sign In"}
            </Button>
          </DialogFooter>
          <div className="flex justify-center gap-2">
            <span>{type == "signUp" ? signUp.footer : signIn.footer}</span>
            <Link
              href={type == "signUp" ? "/signin" : "/signup"}
              className="text-teal-600"
            >
              {type == "signUp" ? "Sign In" : "Sign Up"}
            </Link>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
