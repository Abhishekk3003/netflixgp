import React from 'react'
import MovieLists from './MovieLists'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector(store => store.movies)
  return (
    <div>

      {/* 
      MovieLists
       - Nowplaying Movies
       - Popular Movire
       - Upcoming Movies
      */}
     <div>
     <MovieLists title={"Now Playing"} movies={movies.nowPlayingMovies} />
      <MovieLists title={"Trending"} movies={movies.nowPlayingMovies} />
      <MovieLists title={"UpComing"} movies={movies.nowPlayingMovies} />
      <MovieLists title={"Now Playing"} movies={movies.nowPlayingMovies} />
      <MovieLists title={"Now Playing"} movies={movies.nowPlayingMovies} />
     </div>
    </div>
  )
}

export default SecondaryContainer