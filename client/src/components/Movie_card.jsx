import React from "react";
import { Link } from "react-router-dom";

const Movie_card = ({ movie }) => {
  return (
      <div  class="z- 30 w-64 h-full max-w-xs overflow-hidden rounded-lg transform h-full z-30 transition duration-500 hover:scale-110 hover:z-30">
        <Link to={`/movie-detail/${movie.id}`}> <img
          src={movie.poster}
          alt="Movie Poster"
          class="rounded-lg border border-black"
        /></Link>
      </div>  
  );
};
export default Movie_card;
