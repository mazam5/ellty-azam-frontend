const SelectAllCheckItem = ({ checked, onChange }) => {
  return (
    <div className="flex px-4 py-2">
      <label className="text-sm">All pages</label>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="focus-within: ml-auto h-[23px] w-[23px] cursor-pointer rounded-md bg-white text-[#5087F8] shadow-sm"
      />
    </div>
  );
};

export default SelectAllCheckItem;
