import React from "react";

interface ButtonProps {
  label: string;
  secondary?: boolean;
  fullWidth?: boolean;
  large?: boolean;
  onClick?: () => void;
  disabled?: boolean;
  outline?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  label,
  secondary,
  fullWidth,
  large,
  onClick,
  disabled,
  outline,
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`
      disabled:opacity-70
      disabled:cursor-not-allowed
      rounded-full
      font-semibold
      hover:bg-gray-80
      border-2
      ${fullWidth ? "w-full" : "w-fit"}
      ${large ? "text-lg px-5 py-3" : "text-md px-4 py-2"}
      ${
        secondary
          ? "bg-white text-black border-black"
          : "bg-sky-500 text-white border-sky-600"
      }
      ${outline ? "bg-transparent border-white text-white" : ""}
      
     `}
    >
      {label}
    </button>
  );
};

export default Button;
