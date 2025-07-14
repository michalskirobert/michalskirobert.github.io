"use client";

import dynamic from "next/dynamic";
import { Skeleton } from "./loading";

const CategoryPicker = dynamic(() => import("./"), {
  ssr: false,
  loading: () => <Skeleton />,
});

export default CategoryPicker;
