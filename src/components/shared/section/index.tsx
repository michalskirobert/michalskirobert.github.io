import { ReactNode } from "react";

interface Props extends React.ComponentProps<"section"> {
  title?: string;
  headerClassName?: Pick<React.ComponentProps<"h2">, "className">;
  styledHeader?: boolean;
  children: ReactNode;
}

export const Section = ({
  children,
  title,
  headerClassName,
  styledHeader = true,
  ...props
}: Props) => (
  <section {...props} className={`${props.className} !pt-5`}>
    {title && (
      <h2
        className={`
    ${
      styledHeader
        ? "text-center text-[var(--fs-h2)] relative after:content-[''] after:block after:w-[2em] after:h-[1px] after:mx-auto after:my-[0.5em] after:mb-[1em] after:bg-[var(--clr-accent)] after:opacity-25"
        : ""
    }
  ${headerClassName}`}
      >
        {title}
      </h2>
    )}
    {children}
  </section>
);
