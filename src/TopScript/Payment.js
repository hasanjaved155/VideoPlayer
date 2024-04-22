import React, { useState } from 'react';
import axios from 'axios';

function Payment() {
    const [amount, setAmount] = useState('');
    const [orderId, setOrderId] = useState('');

    const handlePayment = async () => {
        try {
            const response = await axios.post('/api/payments/create', { amount: amount });
            const { data } = response;
            setOrderId(data.id);

            const options = {
                key: 'YOUR_RAZORPAY_KEY_ID',
                amount: amount,
                currency: 'INR',
                name: 'Your Company Name',
                description: 'Test Payment',
                order_id: data.id,
                handler: async function (response) {
                    const paymentData = {
                        razorpay_payment_id: response.razorpay_payment_id,
                        razorpay_order_id: response.razorpay_order_id,
                        razorpay_signature: response.razorpay_signature
                    };

                    // Send payment callback to backend
                    const callbackResponse = await axios.post('/api/payments/callback', paymentData);
                    console.log(callbackResponse.data);
                },
                prefill: {
                    name: 'Test User',
                    email: 'test@example.com',
                    contact: '9999999999'
                },
                theme: {
                    color: '#F37254'
                }
            };

            const rzp1 = new window.Razorpay(options);
            rzp1.open();
        } catch (error) {
            console.error('Error initiating payment:', error);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="max-w-md p-8 bg-white shadow-lg rounded-md">
                <h1 className="text-3xl font-semibold text-center mb-4">Payment</h1>
                <input
                    type="text"
                    placeholder="Enter amount (in paise)"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500 mb-4"
                />
                <button
                    onClick={handlePayment}
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-3 rounded-md focus:outline-none"
                >
                    Pay Now
                </button>
                {orderId && <p className="text-center mt-4">Order ID: {orderId}</p>}
            </div>
        </div>
    );
}

export default Payment;
