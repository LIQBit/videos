import axios from 'axios';

const KEY = 'AIzaSyCS9352ES1vKVnqk5vdxaWH-Jypf3KKWPw';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }    
});