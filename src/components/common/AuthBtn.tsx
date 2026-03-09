import React, { ReactNode } from "react";
import "../../styles/authbtn.css";

interface Props {
  children: ReactNode;
  variant?: "primary" | "secondary" | "black";
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

function AuthBtn({
  children,
  variant = "primary",
  onClick,
  disabled = false,
  className = "",
}: Props) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={"authbtn" + " " + variant + " " + className}
    >
      {children}
    </button>
  );
}

export default AuthBtn;
