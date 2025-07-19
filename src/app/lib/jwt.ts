import jwt, { SignOptions } from "jsonwebtoken";
import { StringValue } from "ms";

const JWT_SECRET = process.env.JWT_SECRET!;

export function signCaptcha(payload: object, expiresIn: StringValue = "5m") {
  const options: SignOptions = { expiresIn };
  return jwt.sign(payload, JWT_SECRET, options);
}

export function verifyCaptchaToken(token: string) {
  return jwt.verify(token, JWT_SECRET);
}
