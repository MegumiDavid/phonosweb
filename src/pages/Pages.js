import React from 'react'
import { Routes, Route, useLocation } from "react-router-dom"

const Pages = () => {
  return (
    <>
      <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/signup/:type" element={<Cuisine />} />
          <Route path="/login/:search" element={<Searched />} />
          <Route path="/dahsboard/:id" element={<Recipe />} />
      </Routes>
    </>
  )
}

export default Pages