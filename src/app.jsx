import React, { useEffect } from 'react';
import { useState } from 'react';
import './app.css';
import VideoList from './components/video_list/video_list';

function App() {

    const [videos, setVideos] = useState([]);//useState Api 이용 setvideo는 함수 
    
    useEffect(()=>{ 
      const requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

fetch("https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyBgi4KNI7kLRVfi7sBphsRmX64RXXtm6AY", requestOptions)
  .then(response => response.json())
  .then(result => setVideos(result.items))
  .catch(error => console.log('error', error));
    }, []);//컴포넌트가 업데이트 될때 마다 네트워크 통신을 하면 안좋으므로 텅빈 배열을[] 2번째인자로 전달하면 마운트가 될때만 이부분이호출
  return <VideoList videos={videos}/>
}

export default App;
