import { Control, useController } from "react-hook-form";
import { ContactProps } from "./types";
import { checkInvalidClass } from "@utils/functions";

interface Props {
  control: Control<ContactProps>;
  name: keyof ContactProps;
  label: string;
  type: React.ComponentProps<"input">["type"];
  disabled: boolean;
}

export const Input = ({ control, name, label, type, disabled }: Props) => {
  const {
    field,
    fieldState: { invalid, error },
  } = useController({ name, control });

  const invalidClassName = checkInvalidClass(invalid);
  return (
    <div className="w-full">
      <label htmlFor={name}>
        <span className="text-sm font-medium text-gray-700">{label}</span>
        <input
          {...field}
          aria-invalid={invalid}
          type={type}
          id={name}
          className={`${invalidClassName} mt-0.5 w-full p-2 rounded shadow-sm sm:text-sm focus-visible:outline-[var(--clr-accent)] transition-colors duration-300`}
          disabled={disabled}
        />
      </label>
      {invalid && (
        <span className="text-xs text-red-400">{error?.message}</span>
      )}
    </div>
  );
};
