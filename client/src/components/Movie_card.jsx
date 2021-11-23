import React from "react";

const Movie_card = ({ movie }) => {
  return (
      <div class="w-64 h-full max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
        <img
          src={movie.poster}
          alt="Movie Poster"
          class="rounded-lg border- border-black"
        />
      </div>
    
  );
};

export default Movie_card;
