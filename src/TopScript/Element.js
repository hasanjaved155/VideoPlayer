import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const Element = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [paymentError, setPaymentError] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const cardElement = elements.getElement(CardElement);

        try {
            const { error, paymentMethod } = await stripe.createPaymentMethod({
                type: 'card',
                card: cardElement
            });

            if (error) {
                throw new Error(error.message);
            }

            // Send paymentMethod.id to your server
            const response = await fetch('/create/payment', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    amount: 2500, // Amount in cents
                    currency: 'INR',
                    token: paymentMethod.id
                })
            });

            const responseData = await response.json();

            if (!response.ok) {
                throw new Error(responseData.error);
            }

            console.log('Payment successful:', responseData.message);
        } catch (error) {
            setPaymentError(error.message);
            console.error('Error processing payment:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-sm mx-auto my-8 p-6 bg-white shadow-md rounded-lg">
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Card details:</label>
                <CardElement className="border p-2 rounded-md" />
            </div>
            <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded disabled:bg-gray-400 disabled:cursor-not-allowed" disabled={!stripe}>
                Pay
            </button>
            {paymentError && <p className="text-red-500 text-sm mt-2">{paymentError}</p>}
        </form>
    );
};

export default Element;