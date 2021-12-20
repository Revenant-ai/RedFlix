const { default: axios } = require("axios");

const config = {
    header: {
      "Content-Type": "application/json",
    },
  };

exports.getMovieApi = async (movie_id) =>{
    return await axios.get(`/api/home/movie/${movie_id}`);
}

exports.TMDBSearchService = async (search_query)=>{
    return await fetch(`https://api.themoviedb.org/3/search/movie?api_key=129882aa35cd44a9f03ea40193b93383&language=en-US&page=1&include_adult=false&query=${search_query}`)
}

exports.getAllMovieApi = async ()=>{
    return await axios.get("/api/home/all-movie")
}

exports.addMovieApi = async (movie_id,body)=>{
    return await axios.put(
        `/api/sys/addmovie/${movie_id}`,
        body,
        config
      );
}

exports.getUpcomingMoviesApi = async ()=>{
  return await axios.get("/api/home/upc");
}

exports.getReleasedMoviesApi = async ()=>{
  return await axios.get("/api/home/curr");
}