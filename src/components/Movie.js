import React from "react";
import { useParams, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { deleteMovie } from "../actions/movieActions";
import { addFavorite } from "../actions/favoritesActions";

const Movie = ({ movies, deleteMovie, addFavorite, displayFavorites }) => {
  const { id } = useParams();
  const { push } = useHistory();

  const movie = movies.find((movie) => movie.id === Number(id));

  const handleDelete = (e) => {
    e.preventDefault();
    deleteMovie(movie.id);
    push("/movies/");
  };

  const handleFavorite = () => {
    addFavorite(movie);
    console.log("this-movie:", movie);
  };

  // If (!movies) {
  //   return <div>Movie not found</div>;
  // }

  return (
    <div className="modal-page col">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">{movie.title} Details</h4>
          </div>
          <div className="modal-body">
            <div className="flexContainer">
              <section className="movie-details">
                <div>
                  <label>
                    Title: <strong>{movie.title}</strong>
                  </label>
                </div>
                <div>
                  <label>
                    Director: <strong>{movie.director}</strong>
                  </label>
                </div>
                <div>
                  <label>
                    Genre: <strong>{movie.genre}</strong>
                  </label>
                </div>
                <div>
                  <label>
                    Metascore: <strong>{movie.metascore}</strong>
                  </label>
                </div>
                <div>
                  <label>Description:</label>
                  <p>
                    <strong>{movies.description}</strong>
                  </p>
                </div>
              </section>

              <section>
                <span className="m-2 btn btn-dark" onClick={handleFavorite}>
                  Favorite
                </span>
                <span className="delete">
                  <input type="button" className="m-2 btn btn-danger" value="Delete" onClick={handleDelete} />
                </span>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    movies: state.movies.movies,
    displayFavorites: state.favorites.displayFavorites,
  };
};
export default connect(mapStateToProps, { deleteMovie, addFavorite })(Movie);
