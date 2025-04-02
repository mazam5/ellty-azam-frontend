import axios from "axios";
import { useEffect, useState } from "react";

const useData = () => {
  const [pages, setPages] = useState([]);

  const [selectedPages, setSelectedPages] = useState([]);

  const [formData, setFormData] = useState([
    {
      title: "",
      selected: false,
    },
  ]);

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
  useEffect(() => {
    const updatedFormData = pages.map((page) => {
      return {
        id: page.id,
        title: page.title,
        selected: selectedPages.includes(page.id),
      };
    });
    setFormData(updatedFormData);
  }, [selectedPages, pages]);

  const handleDone = async () => {
    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
      console.log("Data sent successfully:", response.data);
      setSelectedPages([]);
      alert("Data sent successfully!");
    } catch (error) {
      console.log(error);
    }
  };

  return {
    pages,
    isLoading,
    selectedPages,

    setPages,
    handleSelectPage,
    handleAllSelectPages,
    handleDone,
  };
};

export default useData;
