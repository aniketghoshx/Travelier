"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export const DropDownAvatar = () => {
  const { data } = useSession();
  const router = useRouter();
  return (
    <>
      <div className="flex items-center space-x-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative h-10 w-10 rounded-full">
              <Avatar className="h-12 w-12">
                <AvatarImage
                  src="/placeholder.svg?height=32&width=32&text=User"
                  alt="User"
                />
                <AvatarFallback className="text-xl">
                  {data?.user.name?.charAt(0).toUpperCase()}
                </AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end" forceMount>
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col space-y-2">
                <p className="text-sm font-medium leading-none">
                  {data?.user.name}
                </p>
                <p className="text-xs leading-none text-muted-foreground">
                  {data?.user.email}
                </p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <button
                onClick={() => {
                  router.push("/user/booking-history");
                }}
              >
                Booking History
              </button>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <button
                onClick={() => {
                  router.push("/user/profile");
                }}
              >
                Profile
              </button>
            </DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <button
                onClick={() => {
                  signOut();
                }}
              >
                Log out
              </button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </>
  );
};
