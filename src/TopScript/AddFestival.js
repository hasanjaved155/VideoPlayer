import React, { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

const AddFestival = () => {
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [couponCode, setCouponCode] = useState('');

    const handleAddFestival = async () => {
        try {
            const res = await axios.post('/festival/create-festival', {
                name,
                date,
                couponCode
            });
            if (res && res.data.success) {
                toast.success(res.data.message)
            }
            // Optionally, you can redirect or show a success message
        } catch (error) {
            console.error('Error adding festival:', error);
        }
    };

    return (
        <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-xl">
            <h2 className="text-xl font-semibold mb-4">Add New Festival</h2>
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-400"
                />
            </div>
            <div className="mb-4">
                <input
                    type="date"
                    placeholder="Date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-400"
                />
            </div>
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Coupon Code"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-400"
                />
            </div>
            <button
                onClick={handleAddFestival}
                className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            >
                Add Festival
            </button>
        </div>
    );
};


export default AddFestival;
