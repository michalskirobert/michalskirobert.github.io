"use client";

import { ReactNode } from "react";

import { FaArrowLeft } from "react-icons/fa";

import styles from "./styles.module.scss";
import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/navigation";

interface Props {
  title: string;
  children: ReactNode;
  showNav?: boolean;
  subtitle?: string;
  imageUrl?: StaticImageData | string;
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
  const router = useRouter();

  return (
    <div
      className={`relative ${
        fullScreen ? "min-h-[calc(100vh-25px)]" : "h-[100%]"
      }`}
    >
      {showNav && (
        <button
          className="flex items-center gap-2 mt-[25px] ml-5 cursor-pointer hover:scale-110 transition-transform duration-550"
          onClick={() => router.push("/")}
        >
          <FaArrowLeft /> Back
        </button>
      )}
      <section className={styles.section}>
        <h2 className={styles.title}>{title}</h2>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        {children}
        {imageUrl && (
          <Image
            className={styles.img}
            src={imageUrl}
            alt="Photography"
            width={0}
            height={0}
          />
        )}
      </section>
    </div>
  );
};
