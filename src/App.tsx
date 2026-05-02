import './App.css'
import 'src/assets/css/main.css'
import { Routes, Route, Link } from "react-router-dom";
import useJqueryNav from 'src/hooks/useJqueryNav'
import Home from 'src/pages/Home'
import Product from 'src/pages/Product'
import { useEffect } from 'react';

function App() {
  useJqueryNav()
  return (
    <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
      </Routes>
    </>
  )
}

export default App
