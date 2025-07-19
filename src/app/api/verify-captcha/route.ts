import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET!;

export async function POST(req: NextRequest) {
  const { token, userResponse } = await req.json();

  try {
    const payload = jwt.verify(token, JWT_SECRET) as {
      captcha: string;
      createdAt: number;
    };

    if (payload.captcha.toLowerCase() === userResponse.toLowerCase()) {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json(
        { success: false, error: "Incorrect captcha" },
        { status: 400 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Invalid or expired token" },
      { status: 400 }
    );
  }
}
