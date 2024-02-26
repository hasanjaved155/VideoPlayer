import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ShowAllUsers = () => {
    const [users, setUsers] = useState([]);


    const fetchUsers = async () => {
        try {
            const res = await axios.get('/auth/users');
            setUsers(res.data.users);

        } catch (err) {
            console.error(`Failed to fetch dashboards: ${err}`);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">All Users</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {users.map(user => (
                    <div key={user.id} className="bg-white p-4 rounded shadow-md">
                        <p className="text-lg font-semibold">Name: {user.name}</p>
                        <p className="text-gray-600">Email: {user.email}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ShowAllUsers;