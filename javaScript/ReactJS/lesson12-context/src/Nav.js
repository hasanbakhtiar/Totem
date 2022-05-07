import React,{useContext} from "react";
import { MovieContext } from "./MovieContext";


const Nav = () => {
    const [movies,setMovies] = useContext(MovieContext);
  return (
    <div>
      <ul className="nav">
        <li className="nav-item">
          <div className="nav-link active" aria-current="page">
            Movie({movies.length})
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
