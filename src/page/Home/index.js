import React, { useState, useEffect, useCallback } from "react";
import SearchBox from "../../components/SearchBox";
import Table from "../../components/Table";
import Pagination from "../../components/Pagination";
import geoDbApi from "../../api/geoDbApi";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await geoDbApi.getCities(searchTerm, limit, page);
        setData(response.data);
        const totalCount = response.metadata.totalCount;
        const calculatedTotalPages = Math.ceil(totalCount / limit);
        setTotalPages(calculatedTotalPages);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    if (searchTerm) {
      fetchData();
    }
  }, [searchTerm, limit, page]);

  useEffect(() => {
    setPage(1);
  }, [searchTerm]);

  const handlePageChange = useCallback((newPage) => {
    setPage(newPage);
  }, []);

  const handleLimitChange = useCallback((newLimit) => {
    setLimit(newLimit);
  }, []);

  return (
    <div className="App">
      <SearchBox setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
      <Table data={data} loading={loading} searchValue={searchTerm} />
      {data.length > 0 && searchTerm && (
        <Pagination
          page={page}
          totalPages={totalPages}
          setPage={handlePageChange}
          limit={limit}
          setLimit={handleLimitChange}
        />
      )}
    </div>
  );
};

export default Home;
