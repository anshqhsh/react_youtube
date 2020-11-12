import React, { useEffect } from 'react';
import { useState } from 'react';
import styles from './app.module.css';
import SearchHeader from './components/search_header/search_header';
import VideoList from './components/video_list/video_list';

function App() {
    const [videos, setVideos] = useState([]);//useState Api 이용 setvideo는 함수 
    const search = query =>{
      const requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
      fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&type=video&key=AIzaSyBgi4KNI7kLRVfi7sBphsRmX64RXXtm6AY`, requestOptions)
        .then(response => response.json())
        .then(result => result.items.map(
          item => ({...item , id: item.id.videoId}))) //id를 받아서 새로운 오브젝트를 생성 기존정보를유지하고 id만 오브젝트가 아닌 video id 로 덮어줌  
        .then(items => setVideos(items))
        .catch(error => console.log('error', error));
    }
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
  return (
    <div className = {styles.app}>
      <SearchHeader onSearch={search}/ >
      <VideoList videos={videos}/>
    </div>
    );
}

export default App;
