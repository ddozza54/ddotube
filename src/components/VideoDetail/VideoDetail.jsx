import React from 'react';

export default function VideoDetail({ title, description }) {
    return (
        <div>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
}

