"use client";

import { ToastContext } from "@providers/toast-context";
import { useContext } from "react";
import type { ToastContextType } from "@providers/toast-context";

type ToastType = "success" | "error" | "info";

let toastRef: ((type: ToastType, msg: string) => void) | null = null;

export function ToastSetter() {
  const ctx = useContext(ToastContext) as ToastContextType | undefined;
  if (ctx) toastRef = ctx.addToast;
  return null;
}

export const toast = {
  success: (msg: string) => toastRef?.("success", msg),
  error: (msg: string) => toastRef?.("error", msg),
  info: (msg: string) => toastRef?.("info", msg),
};
