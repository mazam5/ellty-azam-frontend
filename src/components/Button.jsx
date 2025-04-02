import useData from "../hooks/useData";

const Button = () => {
  const { handleDone } = useData();
  return (
    <button
      type="button"
      onClick={() => handleDone()}
      className="flex h-10 w-[340px] items-center justify-center rounded-sm bg-[#FFCE22] px-5 py-2.5 hover:cursor-pointer hover:bg-[#FFD84D] active:bg-[#FFCE22]"
    >
      <p className="text-sm">Done</p>
    </button>
  );
};
export default Button;
