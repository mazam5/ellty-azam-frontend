import useData from "../hooks/useData";
import CheckListItem from "./CheckListItem";
const CheckList = () => {
  const { checkListData, handleCheckChange } = useData();
  return (
    <div>
      {checkListData.map((item) => {
        return (
          <div key={item.id}>
            <CheckListItem
              id={item.id}
              checkValue={item.checked}
              title={item.title}
              onCheckChange={() => {
                handleCheckChange(item.id);
              }}
            />
          </div>
        );
      })}
    </div>
  );
};
export default CheckList;
