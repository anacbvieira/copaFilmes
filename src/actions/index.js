import {createStore} from 'redux'

export function addMovie(movie) {
    return {
        type: 'ADD_MOVIE',
        payload: {movie}
    }
    
}

const store = createStore(addMovie)

export default store