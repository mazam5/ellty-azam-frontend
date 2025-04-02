import Check from "../assets/icons/Check";

const Checkbox = ({ isChecked, handleChange, isHovered }) => {
  return (
    <span
      className={`flex h-6 w-6 items-center justify-center rounded-md border border-[#CDCDCD] active:bg-[#5087F8] active:outline-[3px] active:outline-[#A3C3FA] ${isChecked ? "bg-[#2469F6]" : ""} ${isChecked && isHovered ? "bg-[#5087F8]" : ""}`}
      onClick={(e) => {
        e.stopPropagation();
        handleChange();
      }}
    >
      {isHovered ? (
        <Check fill={isChecked ? "white" : "#E3E3E3"} />
      ) : (
        isChecked && <Check fill="white" />
      )}
    </span>
  );
};

export default Checkbox;
