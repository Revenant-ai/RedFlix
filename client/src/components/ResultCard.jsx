import React from "react";
import { useState } from "react";
import axios from "axios";
import { addMovieApi } from "../services/MovieService";


const ResultCard = ({ movie }) => {

  const [error, setError] = useState("");


  const MovieHandler = async (e) => {
    e.preventDefault();
  
    try {
      const { data } = await addMovieApi(
        movie.id,
        {
          movie: movie.id,
        },
      );
      window.location.href = "/";
    } catch (error) {
      setError(error.response.data.error);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };


  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div class="border border-black py-2 px-2" style={{ width: "500px", marginTop: "20px" }}>
        <div class="card-body" style={{ display: "flex" }}>
          <img
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            class="img-thumbnail"
            style={{ width: "100px", height: "150px" }}
            alt={`${movie.title} Poster`}
          />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <h5 class="font-medium text-2xl" style={{ paddingLeft: "20px" }}>
              {movie.title}
            </h5>
            <p class="card-text" style={{ paddingLeft: "20px",paddingTop:"10px" }}>
              <b>Relsease Year:-</b>

              {movie.release_date ? movie.release_date.substring(0, 4) : "-"}
            </p>
            <br />

            <button
            onClick={MovieHandler}
              type="button"
              class="bg-red-600 hover:bg-red-800 text-white font-bold py-2 px-4 border border-red-700 rounded"
              style={{ marginLeft: "10px" ,width:"300px"}}>
              Add Movie
            </button>
          </div>
           
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
