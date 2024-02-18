import React, { Fragment, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';




const CourseStructure = (props) => {
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const [video, setVideo] = useState("orbBzzq7ofM");
    const [title, setTitle] = useState("Community Training Program | MERN Stack | Every Sunday | Contact - 9836812465 | PCS Global");
    const { coursename } = useParams();
    const course = async () => {
        const data = await fetch("https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=PLXFMnNRcDZnYw1VE_sSFTD5l9FVaZ2EZJ&key=AIzaSyDbYK0Ag14Hq2En0PhG32o4ksktsuEgBLk")
        const json = await data.json();
        setData(json.items);
    }
    console.log(data);
    useEffect(() => {
        course();
    }, [])

    const handleClick = (item) => {
        setTitle((crr) => crr = item?.snippet?.title)
        setVideo((crr) => crr = item?.snippet?.resourceId.videoId)
    }
    console.log(video);
    return (
        <Fragment>
            <div>
                <span style={{ marginRight: "1000px", cursor: "pointer" }} onClick={() => navigate("/")}>back</span>

            </div>

            <div className='grid grid-cols-2 gap-3 mt-10'>
                <div className='flex flex-col gap-4 h-[30rem] px-10 overflow-scroll overflow-x-hidden'>
                    <div className='text-5xl '>
                        <h1>FSD - MERN STACK TRAINING</h1>
                    </div>
                    {data && data?.map((item) => {
                        return <div className='flex cursor-pointer gap-4 hover:bg-gray-400 duration-100 ' onClick={() => handleClick(item)} key={item.id}>
                            {/* <div>
                                <img src={item?.snippet?.thumbnails?.default?.url} alt="" />
                            </div> */}
                            <div>
                                <h2>{item?.snippet?.title}</h2>
                            </div>
                        </div>
                    })}
                </div>
                <div className='flex flex-1 px-4 flex-col'>
                    <iframe className='w-full h-[27rem]' src={"https://www.youtube.com/embed/" + video} title="Ecommerce Website Development Tutorial With MERN Stack, Razorpay, Redux, MUI &amp; Tailwind | Hindi" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    <div className='mt-4'>
                        {title}
                    </div>
                </div>

            </div>

        </Fragment>
    )
}

export default CourseStructure