import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Layout from './pages/Layout';
import Register from './pages/Register';
import Login from './pages/Login';
import axios from 'axios';
import ProtectedDashboard from './components/ProtectedDashboard';

import Dashboard from './admindashboard/Dashboard';
import CreateDashboard from './admindashboard/CreateDashboard';
import { useDispatch } from 'react-redux';
import { getAllData, getFilterData } from './store/dashboardSlice';
import { useEffect } from 'react';
import CourseDetails from './components/CourseDetails';
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


  const listarr = [
    {
      path: "/career",
      listId: "PLXFMnNRcDZnaUkb3lwqe-oARx3BcJ4t25",
      name: "Career Journey Stories - Sayatan Saha | Fireside Chat With Debamitra Banerjee",
      lecId: "QQB93QyEHJ0"
    },
    {
      path: "/mern",
      listId: "PLXFMnNRcDZnYw1VE_sSFTD5l9FVaZ2EZJ",
      name: "#Lecture-0 | Community Training Program | MERN Stack | Every Sunday | PCS GLOBAL",
      lecId: "orbBzzq7ofM",
    },
    {
      path: "/java",
      listId: "PLXFMnNRcDZnYm92fT94YgZTLJQ5CJq2eT",
      name: "Java Training Session 1 of Team 26 | PCS Global | as on 21st Sept 2023 by Debojyoti Saha",
      lecId: "RbN7EYa8PYs",
    },
    {
      path: "/python",
      listId: "PLXFMnNRcDZnbVz0GI4lUeyJRegMMeThO7",
      name: "CELP - Python Session - Day 1 | By Ramakanta | PCS Global PVT LTD. | As on 17th Aug 2023",
      lecId: "d_l_auG3DT8",
    },
    {
      path: "/salesforce",
      listId: "PLXFMnNRcDZna1a6W2_BQuPlEKrL6PiPxd",
      name: "#Session-1- PCS Global - A Hub Of Salesforce | Salesforce Admin | Introduction | PCS Global",
      lecId: "fhTo0ALft9U",
    },
    {
      path: "/angular",
      listId: "PLXFMnNRcDZnbx2W2B0-2WBivTR_MV8A1C",
      name: "PCS Global Angular Session 1 as on 14th May 23 | PCS Global Pvt Ltd | by Debojyoti Saha",
      lecId: "bPGEOBa_r0I"
    }
  ]



  return (

    <div className='App'>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/createDashboard' element={<CreateDashboard />} />

            <Route element={<ProtectedDashboard />}>
              {listarr.map((a) => {
                return <Route path={a.path} element={<CourseDetails listobject={a} />}
                />
              })}

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
