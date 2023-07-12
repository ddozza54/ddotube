import { useEffect, useState } from 'react';

const key = process.env.REACT_APP_YOUTUBE;

export default function useVideo({ videoId }) {
    const [isLoading, setIsLoading] = useState(false);
    const [videoData, setVideoData] = useState();
    const [error, setError] = useState();

    useEffect(() => {
        const base = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet`
        const videourl = `${base}&id=${videoId}&key=${key}`
        setIsLoading(true);
        fetch(videourl)
            .then(res => res.json())
            .then(data => {
                setVideoData(data);
            }).catch((e => { setError("에러가 발생했습니다. ") }
            )).finally(() => {
                setIsLoading(false)
            })
    }, []);
    return [videoData, isLoading, error]
}

