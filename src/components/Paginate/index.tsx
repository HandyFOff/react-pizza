import ReactPaginate from "react-paginate";
import styles from "./Paginate.module.scss";
import { memo } from "react";

interface IPaginateProps {
  handlePageClick: (page: number) => void;
  currentPage: number;
}

export const Paginate: React.FC<IPaginateProps> = memo(({ handlePageClick, currentPage }) => {
  return (
    <ReactPaginate
      className={styles.paginate}
      breakLabel="..."
      nextLabel=">"
      onPageChange={(page) => handlePageClick(page.selected)}
      pageRangeDisplayed={5}
      pageCount={3}
      previousLabel="<"
      initialPage={currentPage}
      renderOnZeroPageCount={null}
    />
  );
});
