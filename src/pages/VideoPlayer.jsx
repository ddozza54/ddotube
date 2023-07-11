import React from 'react';
import { useParams } from 'react-router-dom';


export default function VideoPlayer() {
    let { id } = useParams();
    console.log(id)
    return (
        <>
            <video />
            <h1>Video player</h1>
        </>
    );
}

