import { ReactNode } from "react";

interface Props extends React.ComponentProps<"section"> {
  title?: string;
  children: ReactNode;
}

export const Section = ({ children, title, ...props }: Props) => (
  <section {...props}>
    {title && <h2>{title}</h2>}
    {children}
  </section>
);
