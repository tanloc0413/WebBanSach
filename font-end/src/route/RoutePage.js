import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../Pages/HomePage';

export default function RoutePage() {
  return (
    <Routes>
      <Route index element={<HomePage/>}/>
      
    </Routes>
  )
}
