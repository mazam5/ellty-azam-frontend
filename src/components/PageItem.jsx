import { useState } from "react";
import Checkbox from "./Checkbox";

const PageItem = ({ id, title, isChecked, onSelect }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="flex cursor-pointer items-center justify-between rounded-md p-2"
      onClick={() => onSelect(id)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <label className="text-sm">{title}</label>
      <Checkbox
        isChecked={isChecked}
        handleChange={() => onSelect(id)}
        isHovered={isHovered}
      />
    </div>
  );
};

export default PageItem;
