import Button from "./Button";
import Divider from "./Divider";
import PageItem from "./PageItem";

import useData from "../hooks/useData";

const PagesModal = () => {
  const { pages, selectedPages, handleAllSelectPages, handleSelectPage } =
    useData();

  return (
    <div className="flex justify-center rounded-md border-[#EEEEEE] bg-white p-4 shadow-[0px_8px_15px_0px_#1414141F]">
      <div>
        <PageItem
          id="select-all"
          title="All pages"
          isChecked={selectedPages.length === pages.length && pages.length > 0}
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
      </div>
    </div>
  );
};

export default PagesModal;
