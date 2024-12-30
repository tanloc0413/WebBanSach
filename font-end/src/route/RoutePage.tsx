import { Routes, Route, useParams } from 'react-router-dom';
import HomePage from '../layout/HomePage/HomePage';
import ListBook from '../layout/ListBookPage/ListBook';
import SearchResultList from '../layout/SearchResultPage/SearchResultList';
import BookDetail from '../layout/BookDetail/BookDetail';
import TestBook from '../layout/TestBook';
import Register from '../layout/Account/Register';

interface RoutePageProps {
  searchKeyword: string;
}

export default function RoutePage({ searchKeyword }: RoutePageProps) {
  const { searchKeywordUrl, categoryName } = useParams();
  // let categoryIdNumber = 0;

  // try {
  //   categoryIdNumber = parseInt(categoryId + '');

  // } catch(error) {
  //   categoryIdNumber = 0;
  //   console.log("Lỗi: ", error)
  // }

  // if(Number.isNaN(categoryIdNumber)) {
  //   categoryIdNumber = 0;
  // }

  return (
    <Routes>
      <Route index element={<HomePage/>}/>
      <Route path='/sach' element={<ListBook/>}/>
      <Route
        path='/tim-kiem/:searchKeyword'
        element={
          <SearchResultList
            searchKeyword={searchKeyword}
          />
        }
      />
      <Route
        path='/sach/:bookId'
        element={<BookDetail/>}
      />
      <Route 
        path='/dang-ky'
        element={<Register/>}
      />
      <Route
        path='/mau'
        element={<TestBook/>}
      />
      
      {/* <Route
        path='/tim-kiem/the-loai/:categoryName'
        element={
          <SearchResultList
            searchKeyword={searchKeywordUrl || ''}
            categoryName={categoryName || ''}
          />
        }
      /> */}
      {/* <Route
        path='/tim-kiem/the-loai/:categoryName'
        element={<SearchResultList searchKeyword={searchKeyword} categoryName={categoryName || ''} />}
      /> */}      
    </Routes>
  )
}
