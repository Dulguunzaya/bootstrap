"use client";

import React from "react";
import MovieList from "./MovieList";

function MovieItem({ name }) {
  return (
    <div>
      <h1>{name}</h1>
      {/* {movie.coverImage} */}
    </div>
  );
}

export default MovieItem;
