import { useState, useEffect } from "react";
import { User, RiderData } from "../types/RidersComponentTypes";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../utils/Url";

const useRider = () => {
  const [loading, setLoading] = useState(true);
  const [riders, setRiders] = useState<User[]>([]);
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${baseUrl}/user/users?page=${currentPage}&size=10`)
      .then((response) => response.json())
      .then((data: RiderData) => {
        setRiders(data.content);
        setPageCount(data.totalPages);
        setLoading(false);
      })
      .catch((error) => console.error(error));
  }, [currentPage]);

  function handlePageClick({ selected }: { selected: number }) {
    setCurrentPage(selected);
  }

  function handleEditClick(id: number) {
    navigate(`/dashboard/riders/${id}`);
  }

  return {
    loading,
    riders,
    pageCount,
    currentPage,
    handlePageClick,
    handleEditClick,
  };
};

export default useRider;