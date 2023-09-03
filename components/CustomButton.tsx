import React from "react";
import Image from "next/image";
import { CustomButtonProps } from "@/Types";
function CustomButton({
  title,
  containerStyles,
  handleClick,
}: CustomButtonProps) {
  // const _HandleClickBtn = (e: React.MouseEvent<HTMLButtonElement>) => {handleClick(e)}

  return (
    <button
      disabled={false}
      type="button"
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1`}>{title}</span>
    </button>
  );
}

export default CustomButton;
