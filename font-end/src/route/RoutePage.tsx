import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../layout/HomePage/HomePage';
import ListBook from '../layout/ListBookPage/ListBook';

export default function RoutePage() {
  return (
    <Routes>
      <Route index element={<HomePage/>}/>
      <Route path='/sach' element={<ListBook/>}/>
      {/* <Route path='/chi-tiet-sach' element={</>}/> */}
    </Routes>
  )
}
