import React, { useEffect } from 'react'
import { API_OPTIONS } from '../Utilis/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addTrailerVideo } from '../Utilis/moviesSlice';

const VideoContainer = ({movieID}) => {
  const dispatch = useDispatch();
  const trailerVideo = useSelector(store => store.movies?.trailerVideo);
  
  
  // fetch video trailer and updating the store

  const getMovieVideos = async() => {

    const data = await fetch('https://api.themoviedb.org/3/movie/957452/videos?language=en-US', API_OPTIONS)
    const json = await data.json();
    
    const filterData  = json.results.filter(video => video.type === "Trailer")
    const trailer = filterData[0];
    dispatch(addTrailerVideo(trailer));

    
  }

   useEffect(() => {
    getMovieVideos()
   },[])
  return (
    <div >
      <iframe
      className='w-screen aspect-video'
        src={"https://www.youtube.com/embed/"+trailerVideo?.key + "?&autoplay=1&mute=1"}
        title="YouTube video player"

        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerpolicy="strict-origin-when-cross-origin" 
        ></iframe>
    </div>
  )
}

export default VideoContainer