import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import CourseStructure from './components/CourseStructure';

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/:coursename' element={<CourseStructure />} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
