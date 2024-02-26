import React from 'react'
//import { Link, useNavigate } from 'react-router-dom'
import AdminMenu from './AdminMenu'

const AdminDashboard = () => {

    return (
        <div className='container-fluid m-3 p-3'>
            <div className='row'>
                <div className='col-md-3'>
                    <AdminMenu />
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}

export default AdminDashboard
