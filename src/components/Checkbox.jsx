import Check from "../assets/icons/Check";

const Checkbox = ({ isChecked, handleChange, isHovered, isFocused }) => {
  return (
    <span
      className={`flex h-6 w-6 items-center justify-center rounded-md border border-[#CDCDCD] ${isChecked ? "bg-[#2469F6]" : ""} ${isChecked && isHovered ? "bg-[#5087F8]" : ""} ${isFocused ? "border-[#A3C3FA] outline-[3px] outline-[#A3C3FA]" : ""} `}
      onClick={(e) => {
        e.stopPropagation();
        handleChange();
      }}
    >
      {isHovered || isFocused ? (
        <Check
          fill={
            isFocused
              ? isChecked
                ? "white"
                : "black"
              : isChecked && isHovered
                ? "white"
                : isChecked
                  ? "white"
                  : "#E3E3E3"
          }
        />
      ) : (
        isChecked && <Check fill="white" />
      )}
    </span>
  );
};

export default Checkbox;
