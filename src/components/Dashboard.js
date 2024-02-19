import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import img1 from '../images/MERN.webp'
import img2 from '../images/Angular.webp'
import img3 from '../images/JAVA.jpg'
import img4 from '../images/Python.jpg'
import img5 from '../images/Salesforce.jpg'


const Dashboard = () => {

    const items = [
        {
            name: "Mern Dashboard",
            Link: "/mern",
            img: img1
        },
        {
            name: "Angular Dashboard",
            Link: "/angular",
            img: img2
        },
        {
            name: "Java Dashboard",
            Link: "/java",
            img: img3
        },
        {
            name: "Python Dashboard",
            Link: "/python",
            img: img4
        },
        {
            name: "Salesforce Dashboard",
            Link: "/salesforce",
            img: img5
        }
    ]

    return (
        <Fragment>
            <div className="flex flex-col items-center justify-center">
                <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
                    {items.map((item) => {
                        return <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:-translate-y-2 duration-200 hover:shadow-[#6260607a] hover:shadow-xl">
                            <Link to={item.Link}>
                                <img className="rounded-t-lg" src={item.img} alt="" width={"280px"} height={"140px"} />
                                <div className="p-5">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.name}</h5>
                                </div>
                            </Link>
                        </div>
                    })}
                </div>
            </div>
        </Fragment>
    )
}

export default Dashboard
