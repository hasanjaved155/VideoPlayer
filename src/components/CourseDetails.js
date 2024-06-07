import React, { Fragment } from 'react'
import Card from './Card';
// import { useState } from 'react';
// import { useEffect } from 'react';

const CourseDetails = ({ listobject, setRie }) => {
    // const [valid, setValid] = useState(false);
    // const user = JSON.parse(localStorage.getItem("user"));

    // useEffect(() => {
    //     if (user?.employeeId) {
    //         setValid(true);
    //     } else {
    //         setValid(false);
    //     }
    // }, [])

    return (
        <Fragment>
            <div >
                <Card
                    listId={listobject?.listId}
                    courseName={listobject?.courseName}
                    lecId={listobject?.lecId}
                    role={listobject?.role}
                    id={listobject?._id}
                    setRie={setRie}
                />
            </div>
        </Fragment>
    )
}

export default CourseDetails
