import Button from "./Button";
import Divider from "./Divider";
import PageItem from "./PageItem";

import useData from "../hooks/useData";

const PagesModal = () => {
  const {
    isLoading,
    pages,
    selectedPages,
    handleAllSelectPages,
    handleSelectPage,
  } = useData();

  return (
    <div className="flex justify-center rounded-md border-[#EEEEEE] bg-white p-4 shadow-[0px_8px_15px_0px_#1414141F]">
      <div>
        {isLoading ? (
          <div className="animate-pulse">
            <div className="mb-4 h-6 w-[370px] rounded bg-gray-200"></div>
            <Divider />
            <div className="space-y-2">
              {[...Array(4)].map((_, index) => (
                <div
                  key={index}
                  className="h-6 w-[370px] rounded bg-gray-200"
                ></div>
              ))}
            </div>
            <Divider />
            <div className="flex">
              <div className="mt-4 h-10 w-[340px] rounded bg-gray-200"></div>
            </div>
          </div>
        ) : (
          <>
            <PageItem
              id="select-all"
              title="All pages"
              isChecked={
                selectedPages.length === pages.length && pages.length > 0
              }
              onSelect={handleAllSelectPages}
            />

            <Divider />

            <div>
              {pages.map((page) => (
                <PageItem
                  key={page.id}
                  id={page.id}
                  title={page.title}
                  isChecked={selectedPages.includes(page.id)}
                  onSelect={handleSelectPage}
                />
              ))}
            </div>

            <Divider />

            <Button />
          </>
        )}
      </div>
    </div>
  );
};

export default PagesModal;
