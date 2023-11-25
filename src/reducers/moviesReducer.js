export const ACTIONS = {
    INITIALIZE: 'INITIALIZE',
    ADD_MOVIE: 'ADD_MOVIE',
    REMOVE_MOVIE: 'REMOVE_MOVIE',
    UPDATE_MOVIE: 'UPDATE_MOVIE'
}

export default function moviesReducer(state, action) {
    switch (action.type) {
        case ACTIONS.INITIALIZE:
            console.log(`Payload: ${typeof (action.payload)}`)
            return action.payload.map((movie) => movie);
        case ACTIONS.ADD_MOVIE:
            return [...state, action.payload];
        case ACTIONS.REMOVE_MOVIE:
            return state.filter(movie => movie.id !== action.payload);
        default:
            return state;
    }
}