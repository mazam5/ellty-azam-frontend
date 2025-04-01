import axios from "axios";
import { useEffect, useState } from "react";

const useData = () => {
  const [pages, setPages] = useState([]);

  const [selectedPages, setSelectedPages] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await axios.get("/data.json");
      setPages(response.data);
      // console.log(response.data);
    } catch (error) {
      console.log(error);
      setError(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSelectPage = (id) => {
    setSelectedPages((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((page) => page !== id)
        : [...prevSelected, id],
    );
  };

  const handleAllSelectPages = () => {
    setSelectedPages(
      selectedPages.length === pages.length ? [] : pages.map((page) => page.id),
    );
  };

  return {
    pages,
    isLoading,
    selectedPages,
    selectAll,

    setPages,
    handleSelectPage,
    handleAllSelectPages,
  };
};

export default useData;
