import { Control, useController } from "react-hook-form";
import { ContactProps } from "./types";

interface Props {
  control: Control<ContactProps>;
  name: keyof ContactProps;
  label: string;
  type: React.ComponentProps<"input">["type"];
}

export const Input = ({ control, name, label, type }: Props) => {
  const {
    field,
    fieldState: { invalid, error },
  } = useController({ name, control });

  return (
    <div className="w-full">
      <label htmlFor={name}>
        <span className="text-sm font-medium text-gray-700">{label}</span>

        <input
          {...field}
          type={type}
          id={name}
          className="mt-0.5 w-full p-2 rounded border-gray-300 shadow-sm sm:text-sm focus-visible:outline-[var(--clr-accent)] transition-colors duration-300"
        />
      </label>
    </div>
  );
};
