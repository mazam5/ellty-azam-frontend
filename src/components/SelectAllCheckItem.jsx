import Checkbox from "./Checkbox";

const SelectAllCheckItem = ({ checked, onChange }) => {
  return (
    <div className="flex items-center justify-between px-4 py-2">
      <label className="text-sm">All pages</label>
      <Checkbox isChecked={checked} handleChange={onChange} />
    </div>
  );
};

export default SelectAllCheckItem;
