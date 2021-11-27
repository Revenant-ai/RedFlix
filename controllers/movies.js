const Movie_DAO = require("../DataAcess/movie_dao");

exports.Get_Upcoming_Movies = async (req, res, next) => {
  const movies = await Movie_DAO.get_upcoming_movies();
  res.send(movies);
};
exports.Get_current_movies = async (req, res, next) => {
  const movies = await Movie_DAO.get_current_movies();
  res.send(movies);
};

exports.getMovieDetailsById = async (req, res, next) => {
  const movie = await Movie_DAO.getMovieById(req.params.movie_id);
  res.send(movie);
};

exports.Get_all_Movies=async (req,res,next)=>{
  const movies=await Movie_DAO.get_all_movies();
  res.send(movies);
}
