import ReactPaginate from "react-paginate";
import styles from "./Paginate.module.scss";
import { useSelector } from "react-redux";
import { selectFilters } from "../../redux/slices/filterSlice";

const Paginate = ({ handlePageClick }) => {
  let { currentPage } = useSelector(selectFilters);

  return (
    <ReactPaginate
      className={styles.paginate}
      breakLabel="..."
      nextLabel=">"
      onPageChange={(page) => handlePageClick(page)}
      pageRangeDisplayed={5}
      pageCount={3}
      previousLabel="<"
      initialPage={currentPage -= 1}
      renderOnZeroPageCount={null}
    />
  );
};

export default Paginate;
