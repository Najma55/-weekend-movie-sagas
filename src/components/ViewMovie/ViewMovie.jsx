import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function ViewMovie() {
  const params = useParams();
  // Get the fetched movie from the store---2
  const oneMovie = useSelector((store) => store.oneMovie);
  console.log(oneMovie);
  const dispatch = useDispatch();
  useEffect(() => {
    if (params?.id) {
      // Get one movie from the server---- 1
      dispatch({ type: "FETCH_ONEMOVIE", payload: params.id });
    }
  }, []);

  const [movie, setMovie] = useState(null);

  // format data----3
  useEffect(() => {
    if (oneMovie) {
      setMovie({
        title: oneMovie[0].title,
        poster: oneMovie[0].poster,
        description: oneMovie[0].description,
        // Get genre names from all records
        genres: oneMovie.map((one) => one.name),
      });
    }
  }, [oneMovie]);

  //when the component renders the movie and movie details are undefined 
  //therefore we make use of condition rendering by checking if movie is defined.
  return movie ? (
    <div
      className="movie-page"
      style={{
        backgroundImage: `url(${movie?.poster})`,
      }}
    >
        {/* this is an overlay it sits between the content and the image using z-index. */}
      <div className="overlay"></div>

      <div className="left">
        <h1>{movie?.title}</h1>
        <p>{movie?.description}</p>
        <div className="genre">
          <span>Genre</span>
          {/* movie.genere is an array of strings we use the .map to render the list of generes */}
          <p className="list">
            {movie?.genres.map((oneGenre) => (
              <span key={oneGenre}>{oneGenre}</span>
            ))}
          </p>
        </div>
        <button>WATCH NOW</button>
      </div>
    </div>
  ) : null;
}
