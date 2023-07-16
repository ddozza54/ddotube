import axios from 'axios';
const key = process.env.REACT_APP_YOUTUBE;

export async function search(keyword) {
    const basicUrl = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&regionCode=KR&`
    const searchUrl = `${basicUrl}q=${keyword ? keyword : ""}&key=${key}`

    return axios.get('/data/search.json')
        .then(res => res.data.items)
}