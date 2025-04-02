import Checkbox from "./Checkbox";

const PageItem = ({ id, title, isChecked, onSelect }) => {
  return (
    <div className="flex items-center justify-between p-2">
      <label className="text-sm">{title}</label>
      <Checkbox isChecked={isChecked} handleChange={() => onSelect(id)} />
    </div>
  );
};

export default PageItem;
