"use client";

import { useBack } from "@src/hooks/use-back";

export default function BackButton() {
  const { handleBack } = useBack();

  return (
    <button
      onClick={handleBack}
      className="border-2 border-[#ffc300] text-[#ffc300] hover:bg-[#ffc300]/10 px-8 py-3 rounded-full font-medium text-lg transition-all flex items-center justify-center"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 mr-2"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
        focusable="false"
      >
        <path
          fillRule="evenodd"
          d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"
          clipRule="evenodd"
        />
      </svg>
      Go Back
    </button>
  );
}
