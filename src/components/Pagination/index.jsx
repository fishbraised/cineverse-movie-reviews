import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

import "./index.css";

const Pagination = (props) => {
  const { handlePrevPage, handleNextPage, page } = props;

  const onPrevClick = () => {
    handlePrevPage();
  };

  const onNextClick = () => {
    handleNextPage();
  };

  return (
    <div className="flex justify-center items-center gap-10 mt-8 py-4">
      <button
        className="px-3 py-1 rounded bg-yellow-400 hover:opacity-70 cursor-pointer disabled:cursor-not-allowed"
        onClick={onPrevClick}
        disabled={page === 1}
      >
        <FaChevronLeft size="14" />
      </button>
      <span className="text-white text-base font-semibold">Page {page}</span>
      <button
        className="px-3 py-1 rounded bg-yellow-400 cursor-pointer"
        onClick={onNextClick}
      >
        <FaChevronRight size="14" />
      </button>
    </div>
  );
};

export default Pagination;
