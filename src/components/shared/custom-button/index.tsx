import { ReactNode } from "react";

import styles from "./styles.module.scss";

interface Props extends React.ComponentProps<"button"> {
  content: string;
  icon?: ReactNode;
  isLoading?: boolean;
}

export const CustomButton = ({ content, className, ...restProps }: Props) => (
  <button {...restProps} className={`${styles.btn} ${className}`}>
    {content}
  </button>
);
