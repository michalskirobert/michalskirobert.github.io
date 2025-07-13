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

  const checkValidation = (): React.ComponentProps<"input">["className"] =>
    invalid ? "!border-red-300 border-2" : "border-gray-300";

  return (
    <div className="w-full">
      <label htmlFor={name}>
        <span className="text-sm font-medium text-gray-700">{label}</span>

        <input
          {...field}
          aria-invalid={invalid}
          type={type}
          id={name}
          className={`${checkValidation()} mt-0.5 w-full p-2 rounded  shadow-sm sm:text-sm focus-visible:outline-[var(--clr-accent)] transition-colors duration-300`}
        />
        {invalid && (
          <span className="text-xs text-red-400">{error?.message}</span>
        )}
      </label>
    </div>
  );
};
