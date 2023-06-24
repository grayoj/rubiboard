import { useState, useEffect } from "react";
import { User } from "../types/RidersComponentTypes";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../utils/Url";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { setUserToken } from "../store/authSlice";

const useRider = () => {
  const [loading, setLoading] = useState(true);
  const [riders, setRiders] = useState<User[]>([]);
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const userToken = useSelector((state: RootState) => state.auth.userToken);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      dispatch(setUserToken(token));
    }
  }, [dispatch]);

  useEffect(() => {
    if (userToken) {
      axios
        .get(`${baseUrl}/api/user/riders?page=${currentPage}&size=10`, {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        })
        .then((response) => {
          setRiders(response.data.content);
          setPageCount(response.data.totalPages);
          setLoading(false);
        })
        .catch((error) => {
          console.error(error);
          setLoading(false);
        });
    }
  }, [currentPage, userToken]);

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