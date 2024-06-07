import React from 'react'
import CardPayment from './CardPayment'
import axios from "axios";


const Payment = () => {


    const checkoutHandler = async (amount) => {

        const { data: { key } } = await axios.get("/api/getkey")

        const { data: { order } } = await axios.post("/api/checkout", {
            amount
        })

        const options = {
            key,
            amount: order.amount,
            currency: "INR",
            name: "6 Pack Programmer",
            description: "Tutorial of RazorPay",
            image: "https://avatars.githubusercontent.com/u/25058652?v=4",
            order_id: order.id,
            callback_url: "/api/paymentverification",
            prefill: {
                name: "Javed Hasan",
                email: "javed.hasan@example.com",
                contact: "9999999999"
            },
            notes: {
                "address": "Razorpay Corporate Office"
            },
            theme: {
                "color": "#121212"
            }
        };
        const razor = new window.Razorpay(options);
        razor.open();
    }

    return (
        <div>

            <div className='h-[100vh] flex flex-row items-center justify-center' >

                <CardPayment amount={5000} img={"https://cdn.shopify.com/s/files/1/1684/4603/products/MacBookPro13_Mid2012_NonRetina_Silver.png"} checkoutHandler={checkoutHandler} />
                <CardPayment amount={3000} img={"http://i1.adis.ws/i/canon/eos-r5_front_rf24-105mmf4lisusm_32c26ad194234d42b3cd9e582a21c99b"} checkoutHandler={checkoutHandler} />

            </div>
        </div>
    )
}

export default Payment