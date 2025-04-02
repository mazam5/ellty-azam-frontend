import useData from "../hooks/useData";

const Button = () => {
  const { handleDone } = useData();
  return (
    <button
      type="button"
      onClick={() => handleDone()}
      className="flex h-10 w-[340px] items-center justify-center rounded-sm bg-[#FFCE22] px-5 py-2.5 hover:cursor-pointer hover:bg-[#FFCE22] active:bg-[#FFD84D]"
    >
      <p>Done</p>
    </button>
  );
};
export default Button;
