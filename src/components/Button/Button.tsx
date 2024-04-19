import React, { ButtonHTMLAttributes } from "react";
import clsx from "clsx";
import css from "./Button.module.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  selected: boolean;
}

const Button: React.FC<ButtonProps> = ({
  selected = false,
  type = "button",
  children,
  ...otherProps
}) => {
  return (
    <button
      className={clsx(css.btn, {
        [css.isSelected]: selected,
      })}
      type={type}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
