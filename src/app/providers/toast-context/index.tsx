"use client";

import React, {
  createContext,
  useState,
  useCallback,
  ReactNode,
  useEffect,
} from "react";

export type ToastType = "success" | "error" | "info";

interface Toast {
  id: number;
  message: string;
  type: ToastType;
  visible: boolean;
}

export interface ToastContextType {
  addToast: (type: ToastType, message: string) => void;
}

export const ToastContext = createContext<ToastContextType | undefined>(
  undefined
);

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const addToast = useCallback((type: ToastType, message: string) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, type, message, visible: true }]);

    // Po 2.7s ustawiamy visible=false żeby zacząć animację wychodzenia
    setTimeout(() => {
      setToasts((prev) =>
        prev.map((toast) =>
          toast.id === id ? { ...toast, visible: false } : toast
        )
      );
    }, 2700);

    // Po 3s usuwamy toast
    setTimeout(() => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id));
    }, 3000);
  }, []);

  const removeToast = (id: number) => {
    // Ustaw visible=false aby rozpocząć animację wychodzenia
    setToasts((prev) =>
      prev.map((toast) =>
        toast.id === id ? { ...toast, visible: false } : toast
      )
    );

    // Usuń po animacji 300ms
    setTimeout(() => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id));
    }, 300);
  };

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
        {toasts.map(({ id, type, message, visible }) => (
          <div
            key={id}
            role="alert"
            onClick={() => removeToast(id)}
            className={`
              rounded-md border border-gray-300 bg-white p-4 shadow-sm w-[300px] cursor-pointer
              transform transition-all duration-300 ease-in-out
              ${
                visible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              }
            `}
          >
            <div className="flex items-start gap-4">
              {/* Ikony jak wcześniej */}
              {type === "success" && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 text-green-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              )}
              {type === "error" && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 text-red-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v3.75m0 3.75h.007M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              )}
              {type === "info" && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 text-blue-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6.75h.008v.008H12V6.75zm0 3.75v6m9-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              )}

              <div className="flex-1">
                <strong className="font-medium text-gray-900 capitalize">
                  {type}
                </strong>
                <p className="mt-0.5 text-sm text-gray-700">{message}</p>
              </div>

              <button
                type="button"
                aria-label="Dismiss alert"
                className="-m-3 rounded-full p-1.5 text-gray-500 transition-colors hover:bg-gray-50 hover:text-gray-700"
              >
                <span className="sr-only">Dismiss popup</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}
