import React, { useEffect } from 'react';
import { useState } from 'react';
import styles from './app.module.css';
import SearchHeader from './components/search_header/search_header';
import VideoList from './components/video_list/video_list';

function App({youtube}) {
    const [videos, setVideos] = useState([]);//useState Api 이용 setvideo는 함수 
    const search = query =>{
      youtube
        .search(query)//프리티어 자동 방자
        .then(videos => setVideos(videos));//promise 가 return이 되면 아이탬들이 리런
      
    };
    useEffect(()=>{ 
      youtube.mostPopular()//
      .then(videos => setVideos(videos));
    }, []);//컴포넌트가 업데이트 될때 마다 네트워크 통신을 하면 안좋으므로 텅빈 배열을[] 2번째인자로 전달하면 마운트가 될때만 이부분이호출
  return (
    <div className = {styles.app}>
      <SearchHeader onSearch={search}/ >
      <VideoList videos={videos}/>
    </div>
    );
}

export default App;
