import { ReactNode } from "react";

import styles from "./styles.module.scss";
import { CustomLoader } from "../loader";

export interface CustomButtonProps extends React.ComponentProps<"button"> {
  content: string;
  icon?: ReactNode;
  isLoading?: boolean;
}

export const CustomButton = ({
  content,
  className,
  icon,
  isLoading,
  ...restProps
}: CustomButtonProps) => (
  <button
    {...restProps}
    className={`${
      isLoading ? "!bg-gray-100 !cursor-wait !transform-none !pointer-none" : ""
    } ${styles.btn} ${className}`}
  >
    {isLoading ? <CustomLoader height={12} width={12} color="blue" /> : icon}
    {content}
  </button>
);
