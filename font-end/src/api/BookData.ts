import { useEffect, useState } from "react";
import { getAllTheBookPagination } from "./BookAPI";
import BookModel from "../models/BookModel";

interface UseFetchBooksReturn {
  listBook: BookModel[];
  loadingData: boolean;
  error: string | null;
  totalPage: number;
}

const BookData = (): UseFetchBooksReturn => {
  const[listBook, setListBook] = useState<BookModel[]>([]);
  const[loadingData, setLoadingData] = useState(true);
  const[error, setError] = useState(null);

  // Phân trang
  const[currentPage, setCurrentPage] = useState(1);
  const[totalPage, setTotalPage] = useState(0);

  // Lấy dữ liệu các cuốn sách
  useEffect(() => {
    getAllTheBookPagination(currentPage - 1)
    .then(rs => {
      // In danh sách các quyển sách
      console.log("API của sách:", rs.result);
      // Lấy ra danh sách book
      setListBook(rs.result);
      setTotalPage(rs.totalPage);
      setLoadingData(false);
    })
    .catch(error => {
      setError(error.message);
    })
  }, [currentPage]);

  return { listBook, loadingData, error, totalPage };
};

export default BookData;
