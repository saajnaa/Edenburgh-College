import { useState } from 'react'
import Home from "../src/components/"

import { BrowserRouter, Routes, Route } from 'react-router-dom'


import './App.css'

function App() {




  return (
    <>


      <BrowserRouter>

        <Routes>


          <Route path='/' element={<Navbar />} ></Route>


        </Routes>


      </BrowserRouter>


      <div>dddd</div>



    </>
  )
}

export default App
