import React from 'react'
import { useState } from 'react';
import {

    LockClosedIcon
} from "@heroicons/react/outline";

const CardVideo = ({ video, role, title }) => {
    const user = JSON.parse(localStorage.getItem("user"));

    const [showErrorMessage, setShowErrorMessage] = useState(false);

    const handleLockIconHover = () => {
        setShowErrorMessage(true);
    };

    const handleLockIconLeave = () => {
        setShowErrorMessage(false);
    };
    return (
        <div>
            {!user?.employeeId && role === "Employee" ? (
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
        </div>
    )
}

export default CardVideo
