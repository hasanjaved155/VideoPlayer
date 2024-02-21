import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CourseStructure from './components/CourseStructure';
import AngularStructure from './components/AngularStructure';
import JavaStructure from './components/JavaStructure';
import PythonStructure from './components/PythonStructure';
import SalesStructure from './components/SalesStructure';
import Dashboard from './components/Dashboard';
import Home from './pages/Home';
import Layout from './pages/Layout';
import Register from './pages/Register';
import Login from './pages/Login';
import axios from 'axios';
import ProtectedDashboard from './components/ProtectedDashboard';
axios.defaults.baseURL = "http://localhost:8000"

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path='/' element={<Home />} />

            <Route path='/dashboard' element={<Dashboard />} />

            <Route path='/mern' element={<CourseStructure />} />
            <Route path='/angular' element={<AngularStructure />} />
            <Route path='/java' element={<JavaStructure />} />
            <Route path='/python' element={<PythonStructure />} />
            <Route path='/salesforce' element={<SalesStructure />} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
          </Routes>
        </Layout>
      </BrowserRouter>

    </div>
  )
}

export default App
