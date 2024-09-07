import { useLoaderData, useNavigate } from "react-router-dom";

function Pagination() {
  const navigate = useNavigate();
  const { currentPage, totalPages } = useLoaderData();

  const handlePageChange = (newPage) => {
    if (newPage < 1 || newPage > totalPages) return;

    navigate(`?page=${newPage}`);
  };
  return (
    <div className="flex justify-between mt-4">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="p-2 bg-blue-500 text-white"
      >
        Previous
      </button>
      <span>
        Page {currentPage} of {totalPages}
      </span>
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="p-2 bg-blue-500 text-white"
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
