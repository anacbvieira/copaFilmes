import React, {useState, useEffect} from 'react'
import api from '../server/index.js';
import ListMoviesContext from './SelectedMoviesContext'

export default function ListMoviesProvider( {children} ) {
    const [movies, setMovies] = useState([])
    const [winners] = useState([])
    
    

    useEffect(() => {
        async function getMovies() {
            const response = await api.get("/filmes");
            setMovies(response.data);
        }
        getMovies();
    }, [])

    


    return (
        <ListMoviesContext.Provider value={{ movies, setMovies, winners}}>
            {children}
        </ListMoviesContext.Provider> 
    )
}
