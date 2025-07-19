"use client";

import { useEffect, useState } from "react";

import { CustomButton, CustomButtonProps } from "@shared/button";
import { checkInvalidClass } from "@utils/functions";
import { CustomImage } from "@shared/image";

import axios from "axios";

interface CaptchaData {
  token: string;
  image: string;
}

interface Props {
  buttonParams?: CustomButtonProps;
  onVerified?: () => void;
}

export default function TextCaptcha({ buttonParams, onVerified }: Props) {
  const { content, ...restButtonParams } = buttonParams || {};

  const [captcha, setCaptcha] = useState<CaptchaData | null>(null);
  const [answer, setAnswer] = useState("");
  const [alert, setAlert] = useState("");

  const invalidClassName = checkInvalidClass(!!alert);

  const getCaptcha = async () =>
    axios.get("/api/generate-captcha").then((res) => setCaptcha(res.data));

  const submit = async () => {
    setAlert("");

    if (!captcha) return;

    try {
      await axios.post("/api/verify-captcha", {
        token: captcha.token,
        userResponse: answer,
      });

      if (onVerified) onVerified();
    } catch {
      getCaptcha();
      setAlert("Incorrect input. Please try again.");
    } finally {
      setAnswer("");
    }
  };

  useEffect(() => {
    getCaptcha();
  }, []);

  if (!captcha) return <p>Ładowanie CAPTCHA...</p>;

  return (
    <div>
      <CustomImage
        src={captcha.image}
        alt="captcha"
        className="mb-2"
        title="captcha"
      />
      <div className="flex gap-1">
        <input
          type="text"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          className={`${invalidClassName} mt-0.5 w-full p-2 rounded  shadow-sm sm:text-sm focus-visible:outline-[var(--clr-accent)] transition-colors duration-300`}
          placeholder="Enter the text shown"
        />
        <CustomButton
          {...restButtonParams}
          content={content || "Verify"}
          onClick={submit}
        />
      </div>
      {alert && <span className="text-xs text-red-400">{alert}</span>}
    </div>
  );
}
