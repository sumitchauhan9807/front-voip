import './App.css'
import 'src/assets/css/main.css'
import { Routes, Route, Link } from "react-router-dom";
import useJqueryNav from 'src/hooks/useJqueryNav'
import Home from 'src/pages/Home'
import Product from 'src/pages/Product'
import { useEffect } from 'react';
import AnimatedCursor from "react-animated-cursor"
function App() {
  useJqueryNav()
  return (
    <>
    <AnimatedCursor
        innerSize={0}              // ❌ no dot
        outerSize={40}             // donut size
        color="0, 200, 255"
        outerAlpha={0.8}
        innerScale={0}
        outerScale={1.3}
        showSystemCursor={true}   // ❌ hide arrow
        outerStyle={{
          border: "2px solid rgba(0,200,255,0.9)",
          backgroundColor: "transparent",
        }}
        trailingSpeed={6}
      />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
      </Routes>
    </>
  )
}

export default App
