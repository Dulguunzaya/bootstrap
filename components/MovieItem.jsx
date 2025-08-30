"use client";

import React from "react";
import MovieList from "./MovieList";

function MovieItem({
  name,
  coverImage,
  category,
  movieTime,
  imdbScore,
  description,
}) {
  return (
    <div>
      <div className="bg-black opacity-100 {description} hover:opacity-60"></div>
      <img
        src={coverImage}
        alt={name}
        className="mt-10 w-70 rounded-2xl overflow-hidden shadow hover:shadow-lg transition transform hover:scale-105 duration-300 bg-black hover:opacity-60"
      />
    </div>
  );
}

export default MovieItem;
