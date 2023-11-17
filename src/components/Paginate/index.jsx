import ReactPaginate from "react-paginate";
import styles from "./Paginate.module.scss";

const Paginate = ({ handlePageClick }) => {
  return (
    <ReactPaginate
      className={styles.paginate}
      breakLabel="..."
      nextLabel=">"
      onPageChange={(page) => handlePageClick(page)}
      pageRangeDisplayed={5}
      pageCount={3}
      previousLabel="<"
      renderOnZeroPageCount={null}
    />
  );
};

export default Paginate;
