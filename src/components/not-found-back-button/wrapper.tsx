"use client";

import dynamic from "next/dynamic";

const WrapperBackButton = dynamic(() => import("./"), {
  ssr: false,
  loading: () => (
    <div className="animate-pulse bg-gray-200 h-[69px] w-[141px] px-8 py-3 rounded-full"></div>
  ),
});

export default WrapperBackButton;
