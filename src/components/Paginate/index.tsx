import ReactPaginate from "react-paginate";
import styles from "./Paginate.module.scss";
import { useSelector } from "react-redux";
import { selectFilters } from "../../redux/slices/filterSlice";

interface ICurrentPage {
  currentPage: number;
}

interface IPaginateProps {
  handlePageClick: (page: { selected: number }) => void;
}

const Paginate: React.FC<IPaginateProps> = ({ handlePageClick }) => {
  let { currentPage }: ICurrentPage = useSelector(selectFilters);

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
