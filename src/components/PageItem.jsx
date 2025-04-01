const PageItem = ({ id, title, isChecked, onSelect }) => {
  return (
    <div className="flex px-4 py-2">
      <label className="text-sm">{title}</label>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={() => onSelect(id)}
        className="ml-auto h-[23px] w-[23px] cursor-pointer rounded-md bg-white text-[#5087F8] shadow-sm focus:ring-[#5087F8]"
      />
    </div>
  );
};

export default PageItem;
