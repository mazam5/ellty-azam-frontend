import axios from "axios";
import { useEffect, useState } from "react";

const useData = () => {
  const [pages, setPages] = useState([]);

  const [selectedPages, setSelectedPages] = useState([]);

  const [formData, setFormData] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

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

  const fetchData = async () => {
    try {
      // This is a dummy GET API call for demonstration purposes, data.json file has json data just like the one in the API call
      const response = await axios.get("/data.json");
      setPages(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
      setError(error);
    }
    setIsLoading(false);
  };

  const handleDone = async () => {
    try {
      // This is a dummy API endpoint for demonstration purposes
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        formData,
      );
      console.log("Settings saved successfully:", response.data);
      setSelectedPages([]);
      alert("Settings saved successfully!");
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
