import React, { useState } from 'react'
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
import { getFilterData } from './store/dashboardSlice';
import { useEffect } from 'react';
import CourseDetails from './components/CourseDetails';
import AdminDashboard from './admindashboard/AdminDashboard';
import ShowAllUsers from './admindashboard/ShowAllUsers';
import CreatePlaylist from './admindashboard/CreatePlaylist';
import ProtectedAdmin from './components/ProtectedAdmin';
import PageNotFound from './pages/PageNotFound';
import { Toaster } from 'react-hot-toast';
axios.defaults.baseURL = "http://localhost:8000"

const App = () => {

  const [playlist, setPlaylist] = useState([]);


  const dispatch = useDispatch()

  const fetchData = async () => {
    try {
      const res = await axios.get('/dashboard/get-dashboard');
      //dispatch(getAllData(res.data.dashboards));
      dispatch(getFilterData(res.data.dashboards))
    } catch (err) {
      console.error(`Failed to fetch dashboards: ${err}`);
    }
  };



  const fetchPlaylist = async () => {
    try {
      const res = await axios.get('/playlist/allPlaylist');
      setPlaylist(res.data.playlist);

    } catch (err) {
      console.error(`Failed to fetch dashboards: ${err}`);
    }
  };


  useEffect(() => {
    fetchData();

    fetchPlaylist();
  }, []);

  return (

    <div className='App'>
      <BrowserRouter>
        <Toaster />
        <Layout>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/dashboard' element={<Dashboard />} />


            <Route element={<ProtectedAdmin />}>
              <Route path='/admin' element={<AdminDashboard />} />
              <Route path='/admin/createDashboard' element={<CreateDashboard />} />
              <Route path='/admin/allUsers' element={<ShowAllUsers />} />
              <Route path='/admin/createPlaylist' element={<CreatePlaylist />} />
            </Route>

            <Route element={<ProtectedDashboard />}>
              {playlist.map((a) => {
                return <Route path={a.path} element={<CourseDetails listobject={a} />}
                />
              })}

            </Route>
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
            <Route path='*' element={<PageNotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>

    </div>
  )
}

export default App
