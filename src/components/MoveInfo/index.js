import ListMoviesContext from '../../context/SelectedMoviesContext';
import styles from '../../styles/components/MovieInfo.module.css';
import React, {useContext, useEffect} from 'react';

export default function MovieInfo({movie}) {

    const {movies, setMovies} = useContext(ListMoviesContext)
    const checked = false

    function checkMovie(id) {
        const newRepositories = movies.map(movie => {
            return id === movie.id ? {...movie, checked: !movie.checked}
            : movie;
        });
        setMovies(newRepositories)
    }

    function onChange() {
       checkMovie(movie.id)
    }

    useEffect(() => {
        setMovies(movies)
    }, [movies])

    return (
        <div className={styles.container}>

            <div>
                <input type="checkbox"
                    name={movie.titulo}
                    id={movie.id}
                    onChange={() => onChange()}
                    defaultChecked={checked}
                />
            </div>

            <div className={styles.infos}>
                <h3>{movie.titulo}</h3>
                <span>{movie.ano}</span>
            </div>
         
        </div>
    )
}
