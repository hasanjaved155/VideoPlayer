import React, { Fragment } from 'react'
import Card from './Card';

const CourseDetails = ({ listobject }) => {

    return (
        <Fragment>
            <div >
                <Card
                    listId={listobject.listId}
                    name={listobject.name}
                    lecId={listobject.lecId}
                    role={listobject.role}
                />
            </div>
        </Fragment>
    )
}

export default CourseDetails
