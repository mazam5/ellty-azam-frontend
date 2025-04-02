import { useState } from "react";

import Check from "../assets/icons/Check";

const Checkbox = ({ isChecked, handleChange }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <span
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleChange}
      className={`${isChecked && "bg-[#5087F8]"} flex h-[23px] w-[23px] items-center justify-center rounded-md border border-[#BDBDBD] hover:cursor-pointer active:bg-[#2469F6] active:outline-[3px] active:outline-[#A3C3FA]`}
    >
      <Check fill={isHovered ? "#E3E3E3" : "white"} />
    </span>
  );
};
export default Checkbox;
