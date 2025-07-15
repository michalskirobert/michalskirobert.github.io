import React from "react";
import Image, { ImageProps } from "next/image";

interface Props extends ImageProps {
  width?: number;
  height?: number;
}

export const CustomImage = ({ src, className, alt }: Props) => {
  return (
    <Image
      {...{
        src,
        alt,
        className,
        width: 220,
        height: 220,
        placeholder: "blur",
      }}
    />
  );
};
