import React from 'react';
import { Link } from 'react-router-dom'

export default function VideoDetail({ videoId, title, date, channel }) {
    return (
        <div className="flex flex-col items-center">
            <Link to={`/video/${videoId}`} >
                <h3 className="">{title}</h3>
            </Link>
            <span className="">{channel}</span>
            <span className="">{
                date.slice(0, 10)}</span>
        </div>
    );
}

