"use client";

import dynamic from "next/dynamic";
import { PortfolioListSkeleton } from "./loading";

const PortfolioList = dynamic(
  () => import("@components/photography-portfolio-list"),
  {
    ssr: false,
    loading: () => <PortfolioListSkeleton />,
  }
);

export default PortfolioList;
