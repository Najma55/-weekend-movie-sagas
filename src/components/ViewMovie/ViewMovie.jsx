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
    // Get one movie from the server---- 1
    dispatch({ type: "FETCH_ONEMOVIE", payload: params.id });
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

  return (
    <div
      className="movie-page"
      style={{
        backgroundImage: `url(${movie?.poster})`,
      }}
    ><div className="overlay"></div>
      {movie ? (
        <div className="left">
          <h1>{movie?.title}</h1>
          <p>
            {movie?.description}
          </p>
          <div className="genre">
            <span>Genre</span>
            <p className="list">
              {movie?.genres.map((oneGenre)=>(
                <span>{oneGenre}</span>
              ))}
            </p>
          </div>
          <button>WATCH NOW</button>
        </div>
      ) : null}
    </div>
  );
}
