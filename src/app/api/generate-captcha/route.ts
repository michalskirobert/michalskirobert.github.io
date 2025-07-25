import { NextResponse } from "next/server";
import { CaptchaGenerator } from "captcha-canvas";
import { registerFont } from "canvas";
import jwt from "jsonwebtoken";
import path from "path";

const JWT_SECRET = process.env.JWT_SECRET!;

registerFont(
  path.join(
    process.cwd(),
    "src",
    "app",
    "lib",
    "fonts",
    "OpenSans-Regular.ttf"
  ),
  {
    family: "OpenSans",
  }
);

export async function GET() {
  const captcha = new CaptchaGenerator({ width: 150, height: 50 });

  captcha.setCaptcha({
    font: "35px OpenSans",
  });

  const buffer = await captcha.generate();
  const base64 = buffer.toString("base64");
  const text = captcha.text;

  const token = jwt.sign({ captcha: text, createdAt: Date.now() }, JWT_SECRET, {
    expiresIn: "5m",
  });

  return NextResponse.json({
    image: `data:image/png;base64,${base64}`,
    token,
  });
}
