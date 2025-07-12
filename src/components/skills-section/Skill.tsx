import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  title: string;
}

export const Skill = ({ children, title }: Props) => (
  <div className="w-full md:w-1/3">
    <h3>{title}</h3>
    <div className={`flex flex-wrap justify-center !mt-2 gap-2`}>
      {children}
    </div>
  </div>
);
