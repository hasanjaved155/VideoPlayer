import React, { Fragment, useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'

const Dashboard = () => {

    const [dashboards, setDashboards] = useState([]);
    const allData = useSelector((store) => store.dashboardSlice.filterData);

    useEffect(() => {
        console.log(allData)
        setDashboards(allData)
    }, [allData])


    return (
        <Fragment>
            <div className="flex flex-col items-center justify-center">
                <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
                    {dashboards.length > 0 && dashboards?.map((item) => {
                        return <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:-translate-y-2 duration-200 hover:shadow-[#6260607a] hover:shadow-xl">
                            <Link to={item?.link}>
                                <img className="rounded-t-lg" src={item?.image} alt="" width={"280px"} height={"140px"} />
                                <div className="p-5">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item?.name}</h5>
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