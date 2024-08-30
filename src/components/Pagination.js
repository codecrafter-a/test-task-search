import React, { useEffect, useCallback } from 'react';

const Pagination = ({ page, totalPages, setPage, limit, setLimit }) => {
  useEffect(() => {
    if (page > totalPages && totalPages > 0) {
      setPage(totalPages);
    }
  }, [page, totalPages, setPage]);

  const handleLimitChange = useCallback((e) => {
    const newLimit = Number(e.target.value);
    if (newLimit > 0) {
      setLimit(newLimit);
    }
  }, [setLimit]);

  const handlePageChange = useCallback((newPage) => {
    setPage(prevPage => Math.max(1, Math.min(newPage, totalPages)));
  }, [setPage, totalPages]);

  return (
    <div className="pagination">
      <div className="pagination-options">
        Items per Page
        <select
          value={limit}
          onChange={handleLimitChange}
        >
          {[1,2,3,4,5,6,7,8,9,10].map(option => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div className="pagination-controls">
        <button 
          onClick={() => handlePageChange(page - 1)} 
          disabled={page <= 1}
        >
          Previous
        </button>
        <span>Page {page} of {totalPages}</span>
        <button 
          onClick={() => handlePageChange(page + 1)} 
          disabled={page >= totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
