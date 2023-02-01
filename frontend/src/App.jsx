import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MultiImage from './pages/MultiImage';
import MultipleDocs from './pages/MultipleDocs';
import Navbar from './pages/Navbar';
import SingleImage from './pages/SingleImage';
export default function App() {
  return (<>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<h1>Home Page</h1>} />
        <Route path='/multi-image-upload' element={<MultiImage></MultiImage>} />
        <Route path='/multiple-docs' element={<MultipleDocs></MultipleDocs>} />
        <Route path='/single-image-upload' element={<SingleImage></SingleImage>} />
        <Route path='*' element={<h1>Page not found</h1>} />
      </Routes>
    </BrowserRouter>

  </>

  )
}

// git init
// git add . 
//  git commit -m "initial commit" 
//  git remote add origin https://github.com/ambre1909/mern-file-upload.git
// git push origin master

// to host=> yarn run build