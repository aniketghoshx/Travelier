"use client";

import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { signInSchema, signUpSchema, ToastVariant } from "@/lib/types";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";
import { signIn } from "next-auth/react";

export const SignInForm = () => {
  const router = useRouter();
  const { toast } = useToast();

  const msgToast = (variant: ToastVariant, title: string) => {
    console.log("in toast");
    toast({
      variant,
      title,
    });
  };

  const form = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof signInSchema>) => {
    const res = await signIn("credentials", {
      email: values.email,
      password: values.password,
      redirect: false,
    });

    if (!res?.error) {
      router.push("/");
      msgToast("default", "Sign In successfull");
    } else {
      msgToast("destructive", "Sign In Failed! Please try again");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <Card>
        <CardContent className="sm:max-w-[425px]">
          <CardHeader>
            <CardTitle className="text-center">
              Welcome Back to Travelier
            </CardTitle>
            <CardDescription className="text-center">
              Sign in to access your account and continue planning your next
              adventure.
            </CardDescription>
          </CardHeader>
          <div className="grid py-2">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
                <div className="space-y-3">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="mail@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <Input
                            type="password"
                            placeholder="Enter your password"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <Button
                  size="lg"
                  type="submit"
                  className="bg-teal-600 hover:bg-teal-700 w-full mt-5"
                >
                  Sign In
                </Button>
              </form>
            </Form>
          </div>
          <div className="flex justify-center gap-2">
            <span>Don&apos;t have an account?</span>
            <Link href={"/signup"} className="text-teal-600">
              Sign Up
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
