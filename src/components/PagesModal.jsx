import useData from "../hooks/useData";
import Button from "./Button";
import CheckList from "./CheckList";
import CheckListItem from "./CheckListItem";
import HorizontalLine from "./HorizontalLine";

const PagesModal = () => {
  const { handleCheckAllChange } = useData();
  return (
    <div className="flex justify-center rounded-md border-[#EEEEEE] bg-white p-4 shadow-[0px_8px_15px_0px_#1414141F]">
      <div>
        <CheckListItem
          checkValue={false}
          id="selectAll"
          title="All Pages"
          onCheckChange={handleCheckAllChange}
        />
        <HorizontalLine />
        <CheckList />
        <HorizontalLine />
        <Button />
      </div>
    </div>
  );
};
export default PagesModal;
