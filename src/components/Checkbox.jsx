import { useState } from "react";

import Check from "./Check";

const Checkbox = ({ isChecked, handleChange }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <input
        type="checkbox"
        className="hidden"
        checked={isChecked}
        onChange={handleChange}
      />
      <span
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleChange}
        className={`hover: flex h-[23px] w-[23px] items-center justify-center focus:bg-[#5087F8] focus:outline-2 focus:outline-offset-2 focus:outline-blue-300 ${isChecked ? "bg-[#2469F6]" : ""} rounded-md border border-[#BDBDBD] hover:cursor-pointer hover:shadow active:bg-[#2469F6]`}
      >
        <Check fill={isHovered ? "#E3E3E3" : "white"} />
      </span>
    </>
  );
};
export default Checkbox;
