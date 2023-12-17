import React, { ReactNode, MouseEvent } from "react";

interface ButtonProps {
  title: string;
  styles?: string;
  iconRight?: ReactNode;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  loading?: boolean;
}

const Spinner: React.FC = () => {
  return (
    <div className="inline-block animate-spin rounded-full border-b-2 border-gray-700 h-5 w-5" />
  );
};

export const Button: React.FC<ButtonProps> = ({
  title,
  styles = "",
  iconRight,
  type = "button",
  onClick,
  loading = false,
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`inline-flex items-center text-base ${styles}`}
      disabled={loading}
    >
      {loading ? (
        <Spinner />
      ) : (
        <>
          {title}
          {iconRight && <div className="ml-2">{iconRight}</div>}
        </>
      )}
    </button>
  );
};
