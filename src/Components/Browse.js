import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../CustomHooks/useNowPlayingMovies'
import MainContainer from './MainContainer.js';
import SecondaryContainer from './SecondaryContainer.js';



const Browse = () => {

  useNowPlayingMovies();

  return (
    <div>
      <Header/>
      <MainContainer/>
      <SecondaryContainer/>
      
    </div>
  )
};

export default Browse;