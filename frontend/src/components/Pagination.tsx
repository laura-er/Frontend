import { useState } from "react";

type PaginationProps = {
  totalPages: number;
};

const Pagination = ({ totalPages }: PaginationProps) => {
  const [currentPage, setCurrentPage] = useState(1);

  const prevPage = () => setCurrentPage((p) => Math.max(p - 1, 1));
  const nextPage = () => setCurrentPage((p) => Math.min(p + 1, totalPages));

  return (
    <div className="join">
      <button onClick={prevPage} className="join-item btn">«</button>
      <button className="join-item btn">Page {currentPage}</button>
      <button onClick={nextPage} className="join-item btn">»</button>
    </div>
  );
};

export default Pagination;
