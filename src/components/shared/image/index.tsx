import React from "react";
import Image, { ImageProps } from "next/image";

interface Props extends ImageProps {
  width?: number;
  height?: number;
}

export const CustomImage = ({
  src,
  className,
  alt,
  onClick,
  ...restProps
}: Props) => {
  return (
    <Image
      {...{
        ...restProps,
        src,
        alt,
        className,
        width: 220,
        height: 220,
        placeholder: "blur",
        title: alt,
        onClick,
      }}
    />
  );
};
