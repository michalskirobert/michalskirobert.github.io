import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  title: string;
  contentSize?: "sm" | "md" | "lg" | `${number}xl`;
}

export const Skill = ({ children, title, contentSize = "3xl" }: Props) => (
  <div className="w-full md:w-1/3">
    <h3>{title}</h3>
    <div
      className={`flex flex-wrap justify-center !mt-2 !text-${contentSize} gap-2`}
    >
      {children}
    </div>
  </div>
);
