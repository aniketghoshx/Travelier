"use client";

import { Button } from "./ui/button";
import { signOut } from "next-auth/react";

export const LogoutButton = () => {
  return (
    <Button
      variant="outline"
      className="bg-teal-600 text-white hover:bg-teal-700"
      onClick={() => {
        signOut();
      }}
    >
      Logout
    </Button>
  );
};
