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
import { signUpSchema, ToastVariant } from "@/lib/types";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";


export const SignUpForm = () => {
  const router = useRouter();
  const { toast } = useToast();

  const msgToast = (variant: ToastVariant, title: string) => {
    console.log("in toast");
    toast({
      variant,
      title,
    });
  };

  const form = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      phone: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof signUpSchema>) => {
    const response = await fetch("/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: values.name,
        email: values.email,
        password: values.password,
        phone: values.phone,
      }),
    });
    if (response.ok) {
      router.push("/signin");
      msgToast(
        "default",
        "Sign Up successfull, Please Sign in with your credentials"
      );
    } else {
      console.log(response);
      msgToast("destructive", "Sign Up Failed! Please try again");
      console.error("Signup Failed");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <Card>
        <CardContent className="sm:max-w-[425px]">
          <CardHeader>
            <CardTitle className="text-center">
              Create Your Travel Account
            </CardTitle>
            <CardDescription className="text-center">
              Join Travelier to access exclusive deals and personalized travel
              recommendations.
            </CardDescription>
          </CardHeader>
          <div className="grid py-2">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
                <div className="space-y-3">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="johndoe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
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
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone</FormLabel>
                        <FormControl>
                          <Input type="number" placeholder="0123456789" {...field} />
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
                  Sign Up
                </Button>
              </form>
            </Form>
          </div>
          <div className="flex justify-center gap-2">
            <span>Already have an account?</span>
            <Link href={"/signin"} className="text-teal-600">
              Sign In
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
