import Checkbox from "./Checkbox";

const PageItem = ({ id, title, isChecked, onSelect }) => {
  return (
    <div className="flex items-center justify-between px-4 py-2">
      <label htmlFor={`checkbox-${id}`} className="text-sm">
        {title}
      </label>
      <Checkbox isChecked={isChecked} handleChange={() => onSelect(id)} />
    </div>
  );
};

export default PageItem;
