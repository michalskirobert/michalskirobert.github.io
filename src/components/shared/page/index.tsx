"use client";

import { ReactNode } from "react";

import { useBack } from "@hooks/use-back";

import { FaArrowLeft } from "react-icons/fa";

import styles from "./styles.module.scss";
import { StaticImageData } from "next/image";
import { CustomImage } from "../image";

interface Props {
  title: string;
  children: ReactNode;
  imageUrl: StaticImageData;
  showNav?: boolean;
  subtitle?: string;
  fullScreen?: boolean;
}

export const CustomPage = ({
  title,
  subtitle,
  children,
  imageUrl,
  showNav = false,
  fullScreen = false,
}: Props) => {
  const { handleBack } = useBack();

  return (
    <div
      className={`relative ${
        fullScreen ? "min-h-[calc(100vh-25px)]" : "h-full"
      }`}
    >
      {showNav && (
        <button
          className="flex items-center gap-2 mt-[25px] ml-5 cursor-pointer hover:scale-110 transition-transform duration-550"
          onClick={handleBack}
        >
          <FaArrowLeft /> Back
        </button>
      )}
      <section className={styles.section}>
        <h2 className={styles.title}>{title}</h2>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        {children}
        <CustomImage className={styles.img} src={imageUrl} alt={title} />
      </section>
    </div>
  );
};
