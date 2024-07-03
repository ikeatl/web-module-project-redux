import { ADD_FAVORITE, REMOVE_FAVORITE, TOGGLE_FAVORITES } from "../actions/favoritesActions";
import { DELETE_MOVIE } from "../actions/movieActions";

const initialState = {
  favorites: [],
  displayFavorites: true,
};

const favoriteReducer = (state = initialState, action) => {
  console.log("action:", action);
  switch (action.type) {
    case ADD_FAVORITE:
      const isFavorite = state.favorites.some((movie) => movie.id === action.payload.id);
      if (isFavorite) {
        return state;
      }
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    case TOGGLE_FAVORITES:
      return {
        ...state,
        displayFavorites: !state.displayFavorites,
      };
    case REMOVE_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.filter((movie) => movie.id !== action.payload),
      };

    case DELETE_MOVIE:
      return {
        ...state,
        favorites: state.favorites.filter((movie) => movie.id !== action.payload),
      };
    default:
      return state;
  }
};
export default favoriteReducer;
