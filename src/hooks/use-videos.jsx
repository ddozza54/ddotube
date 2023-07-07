import { useEffect, useState } from "react";


export default function useVideos() {
    //필요한 정보 : 비디오 id, 제목, 시간, 올린채널, 썸네일src, (채널 썸네일), 조회수, 
    const [isLoading, setIsLoading] = useState(false);
    const [videos, setVideos] = useState([]);
    const [error, setError] = useState();
    useEffect(() => {
        setIsLoading(true);
        fetch('data/search.json')
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
