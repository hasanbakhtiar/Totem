import React,{useState,createContext} from 'react'
import movieData from './movieData';
export const MovieContext = createContext();
export const MovieProvider = (props) => {
   
    const [movie,setMovie] = useState(movieData);
  return (
    <MovieContext.Provider value={[movie,setMovie]}>
        {props.children}
    </MovieContext.Provider>
  )
}


