import React,{Component}  from 'react';
import VideoListItem from './videolistItem';


 const VideoList =(props)=>{
    const videoitems = props.videos.map((video)=>{
        return <VideoListItem 
         key={video.etag}
         onVideoSelect={props.onVideoSelect}
         video={video}/>
    }) 
    return(
        <ul className="col-md-4 list-group">
            {videoitems}
        </ul>
    ) 
 }
 export default VideoList;