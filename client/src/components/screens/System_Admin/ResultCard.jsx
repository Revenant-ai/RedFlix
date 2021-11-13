import React from "react";

const ResultCard = ({ movie }) => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div class="card" style={{ width: "500px", marginTop: "20px" }}>
        <div class="card-body" style={{ display: "flex" }}>
          <img
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            class="img-thumbnail"
            style={{ width: "100px", height: "150px" }}
            alt={`${movie.title} Poster`}
          />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <h5 class="card-title" style={{ paddingLeft: "20px" }}>
              {movie.title}
            </h5>
            <p class="card-text" style={{ paddingLeft: "20px",paddingTop:"10px" }}>
              <b>Relsease Year:-</b>{movie.release_date.substring(0, 4)}
            </p>
            <br />

            <button
              type="button"
              class="btn btn-danger"
              style={{ marginLeft: "10px" ,width:"300px"}}
            >
              Add Movie
            </button>
          </div>
           
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
