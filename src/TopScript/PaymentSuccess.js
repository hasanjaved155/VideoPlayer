
import React from 'react'
import { useParams } from "react-router-dom"
const PaymentSuccess = () => {

    const seachQuery = useParams()[0]

    const referenceNum = seachQuery.get("reference")
    return (
        <div>
            <div className='h-[100vh] flex justify-center'>

                <h1 className='uppercase'> Order Successfull</h1>

                <p>
                    Reference No.{referenceNum}
                </p>

            </div>
        </div>
    )
}

export default PaymentSuccess