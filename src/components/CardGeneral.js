import React, { Fragment, useEffect, useState } from "react";
import {

    LockClosedIcon
} from "@heroicons/react/outline";
import axios from 'axios';
//import { Link, useParams } from "react-router-dom";
import Review from "../Comment/Review";

const CardGeneral = (props) => {
    const [data, setData] = useState(null); // all heading of separate video
    const [list, setList] = useState(""); //main heading of list
    const [video, setVideo] = useState(props.lecId);
    const [title, setTitle] = useState(props.courseName);
    const user = JSON.parse(localStorage.getItem("user"));

    const [showErrorMessage, setShowErrorMessage] = useState(false);

    const handleLockIconHover = () => {
        setShowErrorMessage(true);
    };

    const handleLockIconLeave = () => {
        setShowErrorMessage(false);
    };


    // const { coursename } = useParams();
    const course = async () => {
        const res = await axios.get(
            `https://www.googleapis.com/youtube/v3/playlistItems?playlistId=${props.listId}&part=snippet&maxResults=50&key=AIzaSyBMPqrF-TWzQnaE0DaSZ2y5SR4Ns-Bbb2E`
            // `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${props.listId}&key=AIzaSyDbYK0Ag14Hq2En0PhG32o4ksktsuEgBLk`
        );


        const playlistData = {

            videos: res.data.items.map(item => ({
                title: item.snippet.title,
                videoId: item.snippet.resourceId.videoId
            }))
        };

        const videosWithViewCount = await Promise.all(
            playlistData.videos.map(async video => {
                const videoStatsResponse = await axios.get(
                    `https://www.googleapis.com/youtube/v3/videos?id=${video.videoId}&part=statistics&key=AIzaSyBMPqrF-TWzQnaE0DaSZ2y5SR4Ns-Bbb2E`
                );
                const firstItem = videoStatsResponse.data.items[0];
                if (firstItem && firstItem.statistics && firstItem.statistics.viewCount) {
                    const viewCount = firstItem.statistics.viewCount;
                    return {
                        ...video,
                        viewCount
                    };
                } else {
                    // Handle case where statistics are not available
                    return {
                        ...video,
                        viewCount: 0 // Or any default value you prefer
                    };
                }
            })
        );




        // const json = await res.data;
        // console.log(json.items);
        // setData(json.items);
        setData({ ...playlistData, videos: videosWithViewCount });
    };

    useEffect(() => {
        course();
    }, [props.listId])
    //console.log(data)
    const playlistname = async () => {
        const res = await axios.get(
            // `https://www.googleapis.com/youtube/v3/videos?id=${video}&key=AIzaSyDbYK0Ag14Hq2En0PhG32o4ksktsuEgBLk&part=snippet, contentDetails, statistics, status`
            `https://www.googleapis.com/youtube/v3/playlists?id=${props.listId}&part=snippet&key=AIzaSyBMPqrF-TWzQnaE0DaSZ2y5SR4Ns-Bbb2E`
        );
        const json = await res.data;
        // console.log(json)
        // json.items.map((item) => {
        //   console.log(item);
        // })
        // console.log(json.items);
        setList(json?.items[0]?.snippet?.title);
    };

    useEffect(() => {

        playlistname();
        //eslint-disable-next-line
    }, []);

    const handleClick = (item) => {
        setTitle((crr) => (crr = item?.title));
        setVideo((crr) => (crr = item?.videoId));
        setShowErrorMessage(true);
    };
    //console.log(video);
    return (
        <Fragment>
            <div className="grid grid-cols-2 gap-3">
                <div className="flex flex-col gap-4 h-[30rem] px-10 overflow-scroll overflow-x-hidden">

                    <div className="text-5xl ">
                        <h1>{list}</h1>

                    </div>
                    {data &&
                        data?.videos.map((item) => {
                            return (
                                <div
                                    className="flex cursor-pointer gap-1 hover:bg-gray-400 duration-100 p-2"
                                    style={{ border: "1px solid gray" }}
                                    onClick={() => handleClick(item)}
                                    key={item.id}>
                                    <div>
                                        <h2>{item?.title}</h2>
                                        <p>View Count: {item.viewCount}</p>
                                    </div>
                                </div>
                            );
                        })}
                </div>

                {!user?.employeeId && props?.role && props?.role[0]?.rolename === "Employee" ? (
                    <div className="locked-content" style={{ marginLeft: "110px", width: "450px", opacity: showErrorMessage ? '0.8' : '1' }}>
                        <LockClosedIcon className="lock-icon"
                            onMouseEnter={handleLockIconHover}
                            onMouseLeave={handleLockIconLeave}
                        />
                        {showErrorMessage && (
                            <div className="lock-message error-message">
                                You don't have access. Please contact the help desk.
                            </div>)}
                    </div>) : (
                    <div className="flex flex-1 px-4 flex-col">

                        <iframe
                            className="w-full h-[27rem]"
                            src={"https://www.youtube.com/embed/" + video}
                            title="Ecommerce Website Development Tutorial With MERN Stack, Razorpay, Redux, MUI &amp; Tailwind | Hindi"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen></iframe>
                        <div className="mt-4">{title}</div>
                    </div>
                )}
                {/* <Link to="/feedback" class="bg-blue-500 py-4 hover:bg-blue-700 text-white font-bold px-4 rounded">
          Drop Your Review
        </Link> */}


            </div>
            <Review id={props.id} setRie={props.setRie} />

        </Fragment>
    );
};

export default CardGeneral;
