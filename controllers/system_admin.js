const { default: axios } = require("axios");
const { response } = require("express");
const Movie_DAO=require("../DataAcess/movie_dao")
const Theater_DAO=require("../DataAcess/theater_dao")
const TMDB_DAO=require("../DataAcess/tmdb_dao")

exports.Add_movie = async(req,res,next) => {
    const{movie_id} = req.body;
    try{
      const id=req.params.id;
      //const movie_details=await 
      const movie_details = await TMDB_DAO.getMovieTMDB(id);
      const credits = await TMDB_DAO.getMovieCreditsTMDB(id);
      const cast=(credits.cast===undefined)?[]:credits.cast.slice(0,10);
          const crew=(credits.crew===undefined)?[]:credits.crew.slice(0,10);
          console.log(`-------------------------------------\n${credits}`)
          console.log(id)
          //console.log(crew)
          const poster=movie_details.poster_path
            const runtime=movie_details.runtime
            const movie=Movie_DAO.addmovie(movie_details.title,movie_details.release_date,movie_details.backdrop_path,movie_details.id,
              movie_details.overview,movie_details.genres,"unreleased",movie_details.vote_average,movie_details.vote_count,poster,runtime,cast,crew)
    } catch(err){
       next(err)
    }
}
exports.Add_theater=async(req,res,next)=>{
  
  try{
    const{theater_name,theater_city,theater_id,theater_address,screens} = req.body;
      console.log(req.body);
      const theater=await Theater_DAO.addtheater(theater_name,theater_city,theater_id,theater_address,screens)
      res.status(200).json({
        message:"theater added successfully",
        theater
      })
  }
  catch(err){
    next(err)
  }
}

