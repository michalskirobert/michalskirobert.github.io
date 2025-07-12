interface Props {
  name: string;
  label: string;
  type: React.ComponentProps<"input">["type"];
}

export const Input = ({ name, label, type }: Props) => {
  return (
    <div className="w-full">
      <label htmlFor={name}>
        <span className="text-sm font-medium text-gray-700">{label}</span>

        <input
          type={type}
          id={name}
          className="mt-0.5 w-full p-2 rounded border-gray-300 shadow-sm sm:text-sm focus-visible:outline-[var(--clr-accent)] transition-colors duration-300"
        />
      </label>
    </div>
  );
};
