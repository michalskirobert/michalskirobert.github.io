import { ReactNode } from "react";
import { Section } from "@shared/section";

import styles from "./styles.module.scss";
import Image, { StaticImageData } from "next/image";

interface Props {
  title: string;
  children: ReactNode;
  subtitle?: string;
  imageUrl?: StaticImageData | string;
}

export const CustomPage = ({ title, subtitle, children, imageUrl }: Props) => (
  <Section className={styles.section}>
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
  </Section>
);
