import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Thumnail from '../Thumnail/Thumnail';
import VideoDetail from '../VideoDetail/VideoDetail';

export default function Video({ videoId, title, description,
    thumnail }) {
    return (
        <div>
            <Link to={`/video/${videoId}`} >
                <Thumnail thumnail={thumnail} />

            </Link>
            <VideoDetail title={title} description={description} />
        </div>
    );
}

