import React from 'react'

const Home = () => {
    return (
        <div className="container mx-auto py-12 px-4 sm:py-16 lg:px-6">
            <div className=" flex justify-center items-start flex-col md:flex-row gap-x-8">
                <div>
                    <h1 className="text-4xl font-bold text-center text-blue-700">Welcome to PCS Global Pvt Ltd</h1>
                </div>
                <div>
                    <img src="https://i.ytimg.com/vi/7Jh-KADePFU/maxresdefault.jpg" alt="" style={{ width: "800px" }} />
                </div>
            </div>
        </div>

    )
}

export default Home
