
const Movie_DAO=require('../DataAcess/movie_dao')

exports.GetMovies = async (req, res, next) => {
    const movies = await Movie_DAO.getMovies()
    res.send(movies)
}