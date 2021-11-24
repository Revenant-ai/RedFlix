const { default: axios } = require("axios");
exports.getMovieTMDB=async (movie_id) =>
{
    const movie = await axios.get(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=129882aa35cd44a9f03ea40193b93383&language=en-US`);
    return movie.data;
}

exports.getMovieCreditsTMDB=async (movie_id) => {
    const credits = await axios.get(`https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=129882aa35cd44a9f03ea40193b93383&language=en-US`);
    return credits.data;
}