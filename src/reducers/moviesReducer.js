export const ACTIONS = {
    ADD_MOVIE: 'ADD_MOVIE',
    REMOVE_MOVIE: 'REMOVE_MOVIE',
    UPDATE_MOVIE: 'UPDATE_MOVIE'
}

export default function moviesReducer(state, action) {
    switch (action.type) {
        case ACTIONS.ADD_MOVIE:
            return [...state, action.payload];
        case ACTIONS.REMOVE_MOVIE:
            return state.filter(movie => movie.id !== action.payload);
        default:
            return state;
    }
}