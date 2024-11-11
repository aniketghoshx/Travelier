import { NextRequest, NextResponse } from "next/server";
import db from "@/lib/db";
import bcrypt from "bcryptjs";
import { signUpSchema } from "@/lib/types";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, name, password, phone } = signUpSchema.parse(body);

    const existingUser = await db.user.findUnique({
      where: { email: email },
    });

    if (existingUser) {
      return NextResponse.json(
        { user: null, message: "User with this email already exists" },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await db.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        phone,
      },
    });

    return NextResponse.json(
      {
        message: "User created successfully",
      },
      { status: 200 }
    );
  } catch (e) {
    return NextResponse.json(
      {
        message: "Signup Failed",
      },
      { status: 500 }
    );
  }
}
