"use client";

import React from "react";
import MovieItem from "./MovieItem";

function MovieList() {
  const movies = [
    {
      name: "The Dark Knight",
      category: "Action",
      movieTime: "2h 32m",
      imdbScore: 9.0,
      coverImage:
        "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
      description:
        "Batman faces his greatest psychological and physical test as the Joker unleashes chaos on Gotham City.",
    },
    {
      name: "Iar",
      category: "Sci-Fi",
      movieTime: "2h 49m",
      imdbScore: 8.6,
      coverImage:
        "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
      description:
        "A team of explorers travels through a wormhole in space to save humanity as Earth faces a global food crisis.",
    },
    {
      name: "Parasite",
      category: "Thriller",
      movieTime: "2h 12m",
      imdbScore: 8.5,
      coverImage:
        "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
      description:
        "A poor family schemes to infiltrate the lives of a wealthy household, but their plan spirals out of control.",
    },
    {
      name: "The Shawshank Redemption",
      category: "Drama",
      movieTime: "2h 22m",
      imdbScore: 9.3,
      coverImage:
        "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
      description:
        "A banker wrongfully imprisoned for murder finds hope and friendship behind bars as he plots his escape.",
    },
    {
      name: "The Godfather",
      category: "Crime",
      movieTime: "2h 55m",
      imdbScore: 9.2,
      coverImage:
        "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
      description:
        "The aging patriarch of a powerful crime family hands control to his reluctant son, igniting a saga of loyalty and betrayal.",
    },
    {
      name: "Spirited Away",
      category: "Animation",
      movieTime: "2h 5m",
      imdbScore: 8.6,
      coverImage:
        "https://image.tmdb.org/t/p/w500/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg",
      description:
        "A young girl enters a magical world of spirits and must find a way to free herself and her parents from a mysterious curse.",
    },
    {
      name: "Mad Max: Fury Road",
      category: "Action",
      movieTime: "2h 0m",
      imdbScore: 8.1,
      coverImage:
        "https://image.tmdb.org/t/p/w500/8tZYtuWezp8JbcsvHYO0O46tFbo.jpg",
      description:
        "In a desert wasteland, Max teams up with Furiosa to flee a tyrant and lead a rebellion for freedom.",
    },
    {
      name: "La La Land",
      category: "Musical",
      movieTime: "2h 8m",
      imdbScore: 8.0,
      coverImage:
        "https://image.tmdb.org/t/p/w500/uDO8zWDhfWwoFdKS4fzkUJt0Rf0.jpg",
      description:
        "An aspiring actress and a jazz musician fall in love while chasing their dreams in Los Angeles.",
    },
  ];

  return (
    <div className="grid grid-cols-8 gap-5 w-[80%] mx-auto">
      {movies.map((movie, index) => (
        <MovieItem
          key={index}
          name={movie.name}
          coverImage={movie.coverImage}
          description={movie.description}
          movieTime={movie.movieTime}
          imdbScore={movie.imdbScore}
          category={movie.category}
        />
      ))}
    </div>
  );
}

export default MovieList;
