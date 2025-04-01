import axios from "axios";
import { useEffect, useState } from "react";

const useData = () => {
  const [checkListData, setCheckListData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get("/data.json");
      setCheckListData(response.data);
    } catch (error) {
      console.log(error);
      setError(error);
    }
    setIsLoading(false);
  };
  const handleCheckChange = (id) => {
    setCheckListData((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item,
      ),
    );
  };

  const handleCheckAllChange = () => {
    const allChecked = checkListData.every((item) => item.checked);
    setCheckListData((prevData) =>
      prevData.map((item) => ({ ...item, checked: !allChecked })),
    );
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {
    checkListData,

    setCheckListData,
    handleCheckAllChange,
    handleCheckChange,
  };
};

export default useData;
