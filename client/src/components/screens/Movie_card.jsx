import React from "react";

const Movie_card = ({ movie }) => {
  return (
    <div class="inline-block h-full px-3">
      <div class="w-64 h-full max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
        <img
          src={movie.poster}
          alt="Movie Poster"
          class="rounded-lg border- border-black"
        />
        <div class="card-body">
          <h5 class="py-2 px-2 font-bold text-black">{movie.title}</h5>
        </div>
      </div>
    </div>
  );
};

export default Movie_card;
