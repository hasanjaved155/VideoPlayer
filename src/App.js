import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CourseStructure from './components/CourseStructure';
import AngularStructure from './components/AngularStructure';
import JavaStructure from './components/JavaStructure';
import PythonStructure from './components/PythonStructure';
import SalesStructure from './components/SalesStructure';
import Home from './pages/Home';
import Layout from './pages/Layout';
import Register from './pages/Register';
import Login from './pages/Login';
import axios from 'axios';
import ProtectedDashboard from './components/ProtectedDashboard';
import CareerJourneyStories from './components/CareerJourneyStories';
import Dashboard from './admindashboard/Dashboard';
import CreateDashboard from './admindashboard/CreateDashboard';
import { useDispatch } from 'react-redux';
import { getAllData, getFilterData } from './store/dashboardSlice';
import { useEffect } from 'react';
axios.defaults.baseURL = "http://localhost:8000"

const App = () => {


  const dispatch = useDispatch()

  const fetchData = async () => {
    try {
      const res = await axios.get('/dashboard/get-dashboard');
      dispatch(getAllData(res.data.dashboards));
      dispatch(getFilterData(res.data.dashboards))
    } catch (err) {
      console.error(`Failed to fetch dashboards: ${err}`);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='App'>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/createDashboard' element={<CreateDashboard />} />
            <Route element={<ProtectedDashboard />}>
              <Route path='/career' element={<CareerJourneyStories />} />
              <Route path='/mern' element={<CourseStructure />} />
              <Route path='/angular' element={<AngularStructure />} />
              <Route path='/java' element={<JavaStructure />} />
              <Route path='/python' element={<PythonStructure />} />
              <Route path='/salesforce' element={<SalesStructure />} />
            </Route>
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
          </Routes>
        </Layout>
      </BrowserRouter>

    </div>
  )
}

export default App
