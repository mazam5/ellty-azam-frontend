import Button from "./Button";
import HorizontalLine from "./HorizontalLine";
import PageItem from "./PageItem";
import SelectAllCheckItem from "./SelectAllCheckItem";

import useData from "../hooks/useData";
import { useEffect } from "react";

const PagesModal = () => {
  const { handleAllSelectPages, handleSelectPage, pages, selectedPages } =
    useData();

  useEffect(() => {
    console.log("Selected pages:", selectedPages);
  }, [selectedPages]);

  return (
    <div className="flex justify-center rounded-md border-[#EEEEEE] bg-white p-4 shadow-[0px_8px_15px_0px_#1414141F]">
      <div>
        <SelectAllCheckItem
          checked={selectedPages.length === pages.length && pages.length > 0}
          onChange={handleAllSelectPages}
        />

        <HorizontalLine />

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

        <HorizontalLine />

        <Button />
      </div>
    </div>
  );
};

export default PagesModal;
