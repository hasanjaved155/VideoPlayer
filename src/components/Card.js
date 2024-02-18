import React from 'react'

const Card = (props) => {
    const handleClick = () => {
        <div>
            <iframe width="866" height="487" src={`https://www.youtube.com/embed/${props.id}?list=PLXFMnNRcDZnYw1VE_sSFTD5l9FVaZ2EZJ`} title="Community Training Program | MERN Stack | Every Sunday | Contact - 9836812465 | PCS Global" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
    }
    return (
        <div className='flex' onClick={handleClick}>
            <div>
                <img src={props.image} alt="" />
            </div>
            <div>
                <h2>{props.title}</h2>
            </div>
        </div>
    )
}

export default Card
