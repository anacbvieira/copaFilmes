import { createContext } from "react";

const ListMoviesContext = createContext({
   movies: [],
   setMovies:() => {},
   winners: []
});


export default ListMoviesContext;
