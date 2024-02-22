import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const ProtectedDashboard = () => {
    const navigate = useNavigate()

    const pageReload = () => {
        if (!localStorage.getItem('token')) {
            navigate('/login')
        }
    }
    useEffect(() => {

        pageReload();
    }, [])
    return (
        <>
            <Outlet />
        </>
    )
}

export default ProtectedDashboard
