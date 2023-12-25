import React, { InputHTMLAttributes } from "react";

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  styles?: string;
  error?: string | undefined;
}

export const TextInput: React.FC<TextInputProps> = ({
  label,
  styles,
  error,
  ...inputProps
}) => {
  return (
    <div className="w-full flex flex-col mt-2">
      <label htmlFor={inputProps.id} className="text-ascent-2 text-sm mb-2">
        {label}
      </label>
      <input
        {...inputProps}
        className={`${styles} bg-secondary rounded border border-[#66666690] outline-none text-sm text-ascent-1 px-4 py-3 placeholder:text-[#666]`}
      />
      {error && <div className="text-lightRed text-sm mt-1">{error}</div>}
    </div>
  );
};
