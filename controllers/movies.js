
const Movie_DAO=require('../DataAcess/movie_dao')

exports.GetMovies = async (req, res, next) => {
    res.send(Movie_DAO.getMovies);
}