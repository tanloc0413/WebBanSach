import { Routes, Route, useParams, useNavigate, Navigate } from 'react-router-dom';
import HomePage from '../layout/HomePage/HomePage';
import ListBook from '../layout/ListBookPage/ListBook';
import SearchResultList from '../layout/SearchResultPage/SearchResultList';
import BookDetail from '../layout/BookDetail/BookDetail';
import TestBook from '../layout/TestBook';
import Register from '../layout/User/Register';
import Login from '../layout/User/Login';
import ActivateAccount from '../layout/User/ActivateAccount';
import BookFormForAdmin from '../layout/Admin/BookForm';
import TestLogin from '../layout/User/TestLogin';
import { useEffect } from 'react';
import Cart from '../layout/Cart/Cart';

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


  // useEffect(() => {
  //   if (!searchKeyword) {
  //     navigate('/');
  //   }
  // }, [searchKeyword, navigate]);

  return (
    <Routes>
      <Route path='/' element={<HomePage/>}/>
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
        path='/dang-nhap'
        element={<Login/>}
      />
      <Route
        path='/kich-hoat/:email/:activationCode'
        element={<ActivateAccount/>}
      />
      <Route
        path='/admin/them-sach'
        element={<BookFormForAdmin/>}
      />
      <Route
        path='/gio-hang'
        element={<Cart/>}
      />
      <Route
        path='/test'
        element={<TestLogin/>}
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
