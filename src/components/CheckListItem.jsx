const CheckListItem = ({ title, checkValue, onCheckChange, id }) => {
  return (
    <div className="flex px-4 py-2">
      <p className="text-sm">{title}</p>
      <input
        type="checkbox"
        checked={checkValue}
        onChange={(e) => onCheckChange(e.target.checked)}
        className="ml-auto h-[23px] w-[23px] cursor-pointer rounded-md bg-white text-[#5087F8] shadow-sm focus:ring-[#5087F8]"
      />
    </div>
  );
};
export default CheckListItem;
