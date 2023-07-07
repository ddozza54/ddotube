import React, { useEffect } from 'react';
import Thumnail from '../Thumnail/Thumnail';
import VideoDetail from '../VideoDetail/VideoDetail';

export default function Video({ videoId, title, description,
    thumnail }) {
    return (
        <div>
            <Thumnail thumnail={thumnail} />
            <VideoDetail title={title} description={description} />
        </div>
    );
}

