import React, { useContext } from 'react';
import MovieInfo from "../MoveInfo";
import ListMoviesContext from '../../context/SelectedMoviesContext';
import styles from '../../styles/components/ListMovies.module.css';


export default function ListMovies() {
    let {movies} = useContext(ListMoviesContext);

    let listMovies = movies.sort(function (a, b) {	
        return (a.titulo > b.titulo) ? 1 : ((b.titulo > a.titulo) ? -1 : 0);     
    })

    return(
        <div className={styles.container}>
            <div className={styles.listMovies} >
                    {
                        listMovies.map( movie => (
                            <li key={movie.id} >
                                <MovieInfo movie={movie}  />
                            </li>
                        ))
                    }
                </div>
        </div>
    )
}
