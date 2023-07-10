import { useEffect, useState } from "react";

const key = process.env.REACT_APP_YOUTUBE;
console.log('key', key)

export default function useVideos({ searchKey }) {
    //필요한 정보 : 비디오 id, 제목, 시간, 올린채널, 썸네일src, (채널 썸네일), 조회수, 
    const [isLoading, setIsLoading] = useState(false);
    const [videos, setVideos] = useState([]);
    const [error, setError] = useState();
    useEffect(() => {
        const basicUrl = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&`
        const searchUrl = `${basicUrl}maxResults=30&${searchKey ? 'q=' + { searchKey } : ""}&regionCode=US&key=${key}`

        //https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&regionCode=US&key={{key}}
        setIsLoading(true);
        fetch(searchUrl)
            .then(res => res.json())
            .then(data => {
                setVideos(data.items);
            }).catch((e) => {
                setError("에러가 발생했습니다.")
            }).finally(() => {
                setIsLoading(false)
            })
    }, [])
    return [isLoading, videos, error];
}
