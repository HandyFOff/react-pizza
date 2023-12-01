import ReactPaginate from "react-paginate";
import styles from "./Paginate.module.scss";
import { useSelector } from "react-redux";
import { selectFilters } from "../../redux/slices/filterSlice";

interface IPaginateProps {
  handlePageClick: (page: number) => void;
}

const Paginate: React.FC<IPaginateProps> = ({ handlePageClick }) => {
  const { currentPage } = useSelector(selectFilters);

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
};

export default Paginate;
