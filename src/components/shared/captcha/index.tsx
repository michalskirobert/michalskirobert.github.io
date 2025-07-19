"use client";

import { ReactNode, useEffect, useRef, useState } from "react";

import { CustomButton, CustomButtonProps } from "@shared/button";
import { checkInvalidClass } from "@utils/functions";
import { API_ENDPOINTS } from "@utils/constants";
import { CustomImage } from "@shared/image";

import axios from "axios";
import { CaptchaSkeleton } from "./Skeleton";
import { LoadingBlocker } from "../loading-blocker";

interface CaptchaData {
  token: string;
  image: string;
}

interface Props {
  children: ReactNode;
  buttonParams?: CustomButtonProps;
  onVerified?: () => void;
}

export default function TextCaptcha({
  children,
  buttonParams,
  onVerified,
}: Props) {
  const { content, isLoading, ...restButtonParams } = buttonParams || {};

  const calledRef = useRef(false);

  const [captcha, setCaptcha] = useState<CaptchaData | null>(null);
  const [answer, setAnswer] = useState("");
  const [alert, setAlert] = useState("");
  const [isVeryfing, setIsVeryfing] = useState(false);

  const invalidClassName = checkInvalidClass(!!alert);

  const getCaptcha = async () => {
    const res = await axios.get(API_ENDPOINTS.GENERATE_CAPTCHA);
    setCaptcha(res.data);
  };

  const submit = async () => {
    setAlert("");
    setIsVeryfing(true);

    if (!captcha) return;

    try {
      await axios.post(API_ENDPOINTS.VERIFY_CAPTCHA, {
        token: captcha.token,
        userResponse: answer,
      });

      if (onVerified) onVerified();
    } catch {
      getCaptcha();
      setAlert("Incorrect input. Please try again.");
    } finally {
      setAnswer("");
      setIsVeryfing(false);
    }
  };

  useEffect(() => {
    if (calledRef.current) return;
    calledRef.current = true;
    getCaptcha();
  }, []);

  return (
    <LoadingBlocker isLoading={isVeryfing || !!isLoading}>
      {children}
      {!captcha ? (
        <CaptchaSkeleton />
      ) : (
        <div>
          <CustomImage
            src={captcha.image}
            alt="captcha"
            className="mb-2"
            title="captcha"
            placeholder="empty"
          />
          <div className="flex gap-1">
            <input
              type="text"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              disabled={isVeryfing}
              className={`${invalidClassName} mt-0.5 w-full p-2 rounded  shadow-sm sm:text-sm focus-visible:outline-[var(--clr-accent)] transition-colors duration-300`}
              placeholder="Enter the text shown"
            />
            <CustomButton
              {...restButtonParams}
              isLoading={isLoading || isVeryfing}
              content={content || "Verify"}
              onClick={submit}
            />
          </div>
          {alert && <span className="text-xs text-red-400">{alert}</span>}
        </div>
      )}
    </LoadingBlocker>
  );
}
