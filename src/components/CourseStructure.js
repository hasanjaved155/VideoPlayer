import React, { Fragment, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Card from './Card';


const CourseStructure = (props) => {
    const [data, setData] = useState([]);
    const [video, setVideo] = useState("");
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

    const handleClick = (id) => {
        setVideo(`https://www.youtube.com/embed/${id}?list=PLXFMnNRcDZnYw1VE_sSFTD5l9FVaZ2EZJ`)
    }
    return (
        <Fragment>
            <div>
                <h1 className='text-2xl'>
                    welcome to {coursename}
                </h1>
            </div>
            <div className='flex'>
                <div>
                    {data && data?.map((item) => {
                        return <Card
                            title={item?.snippet?.title}
                            image={item?.snippet?.thumbnails?.default?.url}
                            id={item?.snippet?.resourceId?.videoId}
                            handleClick={handleClick}
                        />
                    })}
                </div>


            </div>

        </Fragment>
    )
}

export default CourseStructure
