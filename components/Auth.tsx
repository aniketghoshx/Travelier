"use client";

import { useState } from "react";
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

export const Auth = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [type, setType] = useState("signup");
  //   <Dialog open={isSignUpOpen} onOpenChange={setIsSignUpOpen}>
  //     <DialogContent className="sm:max-w-[425px]">
  //       <DialogHeader>
  //         <DialogTitle className="text-center">
  //           Create Your Travel Account
  //         </DialogTitle>
  //         <DialogDescription className="text-center">
  //           Join Travelier to access exclusive deals and personalized travel
  //           recommendations.
  //         </DialogDescription>
  //       </DialogHeader>
  //       <div className="grid gap-4 py-4">
  //         <div>
  //           <Label htmlFor="name" className="text-right">
  //             Name
  //           </Label>
  //           <Input id="name" className="col-span-3 mt-2" />
  //         </div>
  //         <div>
  //           <Label htmlFor="email" className="text-right">
  //             Email
  //           </Label>
  //           <Input id="email" type="email" className="col-span-3 mt-2" />
  //         </div>
  //         <div>
  //           <Label htmlFor="password" className="text-right">
  //             Password
  //           </Label>
  //           <Input id="password" type="password" className="col-span-3 mt-2" />
  //         </div>
  //       </div>
  //       <DialogFooter>
  //         <Button
  //           size="lg"
  //           type="submit"
  //           className="bg-teal-600 hover:bg-teal-700"
  //         >
  //           Sign Up
  //         </Button>
  //       </DialogFooter>
  //       <div className="flex justify-center gap-2">
  //         <span>Already have an account?</span>
  //         <button
  //           onClick={() => {
  //             setIsSignUpOpen(false);
  //             setIsSignInOpen(true);
  //           }}
  //           className="text-teal-600"
  //         >
  //           Sign in
  //         </button>
  //       </div>
  //     </DialogContent>
  //   </Dialog>
  // );

  // const SignInDialog = () => (
  //   <Dialog open={isSignInOpen} onOpenChange={setIsSignInOpen}>
  //     <DialogContent className="sm:max-w-[425px]">
  //       <DialogHeader>
  //         <DialogTitle className="text-center">
  //           Welcome Back to Travelier
  //         </DialogTitle>
  //         <DialogDescription className="text-center">
  //           Sign in to access your account and continue planning your next
  //           adventure.
  //         </DialogDescription>
  //       </DialogHeader>
  //       <div className="grid gap-4 py-4">
  //         <div>
  //           <Label htmlFor="signin-email" className="text-right">
  //             Email
  //           </Label>
  //           <Input id="signin-email" type="email" className="col-span-3 mt-2" />
  //         </div>
  //         <div>
  //           <Label htmlFor="signin-password" className="text-right">
  //             Password
  //           </Label>
  //           <Input
  //             id="signin-password"
  //             type="password"
  //             className="col-span-3 mt-2"
  //           />
  //         </div>
  //       </div>
  //       <DialogFooter>
  //         <Button
  //           size="lg"
  //           type="submit"
  //           className="bg-teal-600 hover:bg-teal-700"
  //         >
  //           Sign In
  //         </Button>
  //       </DialogFooter>
  //       <div className="flex justify-center gap-2">
  //         <span>Don&apost have an account?</span>
  //         <button
  //           onClick={() => {
  //             setIsSignInOpen(false);
  //             setIsSignUpOpen(true);
  //           }}
  //           className="text-teal-600"
  //         >
  //           Sign up
  //         </button>
  //       </div>
  //     </DialogContent>
  //   </Dialog>
  // );

  const AuthDialog = () => (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
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
            <Input id="password" type="password" className="col-span-3 mt-2" />
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
          <button
            onClick={() => {
              type == "signUp" ? setType("signIn") : setType("signUp");
            }}
            className="text-teal-600"
          >
            {type == "signUp" ? "Sign In" : "Sign Up"}
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );

  return (
    <>
      <div className="flex space-x-4">
        <Button
          variant="outline"
          className="text-teal-600 border-teal-600 hover:bg-teal-50"
          onClick={() => {
            setType("signIn");
            setIsOpen(true);
          }}
        >
          Sign In
        </Button>
        <Button
          className="bg-teal-600 text-white hover:bg-teal-700"
          onClick={() => {
            setType("signUp");
            setIsOpen(true);
          }}
        >
          Sign Up
        </Button>
      </div>
      
      <AuthDialog />
    </>
  );
};
