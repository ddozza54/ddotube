import React from 'react';
import { useParams } from 'react-router-dom'

export default function SearchVideos() {
    const { keyword } = useParams();

    return (
        <h1>Search Reasult{keyword}</h1>);
}

