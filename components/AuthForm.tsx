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
import { signUpSchema } from "@/lib/types";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";

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

type ToastVariant = "default" | "destructive" | null | undefined;

export const AuthForm = ({ type }: AuthFormProps) => {
  const router = useRouter();
  const { toast } = useToast();

  const msgToast = (variant: ToastVariant, title: string) => {
    console.log("in toast")
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
      msgToast("default", "Sign Up successfull, Please Sign in with your credentials")
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
              {type == "signUp" ? signUp.title : signIn.title}
            </CardTitle>
            <CardDescription className="text-center">
              {type == "signUp" ? signUp.description : signIn.description}
            </CardDescription>
          </CardHeader>
          <div className="grid py-2">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
                <div className="space-y-3">
                  {type == "signUp" && (
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
                  )}
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
                  {type == "signUp" && (
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone</FormLabel>
                          <FormControl>
                            <Input placeholder="0123456789" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  )}
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
                  {type == "signUp" ? "Sign Up" : "Sign In"}
                </Button>
              </form>
            </Form>
          </div>
          <div className="flex justify-center gap-2">
            <span>{type == "signUp" ? signUp.footer : signIn.footer}</span>
            <Link
              href={type == "signUp" ? "/signin" : "/signup"}
              className="text-teal-600"
            >
              {type == "signUp" ? "Sign In" : "Sign Up"}
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
