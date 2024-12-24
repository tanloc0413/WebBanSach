import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../layout/HomePage/HomePage';
import ListBook from '../layout/ListBookPage/ListBook';
import SearchResultList from '../layout/SearchResultPage/SearchResultList';

interface RoutePageProps {
  searchKeyword: string;
}

export default function RoutePage({ searchKeyword }: RoutePageProps) {
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
    </Routes>
  )
}
