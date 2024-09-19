import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../Utilis/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../Utilis/constants";


const useNowPlayingMovies = () => {

      // Fetch data from TMDB Api for Movies and update the Movie store
  const dispatch = useDispatch()

  const getNowPlayingMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS)
    const json = await data.json();
    console.log(json.results);
    dispatch(addNowPlayingMovies(json.results));
  }

  useEffect(() => {
    getNowPlayingMovies()
  },[])
}

export default useNowPlayingMovies;