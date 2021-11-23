const { default: axios } = require("axios");
const Movie_DAO=require("../DataAcess/movie_dao")
const Theater_DAO=require("../DataAcess/theater_dao")


exports.Add_movie = async(req,res,next) => {
    const{movie_id} = req.body;
    try{
      const id=req.params.id;
      axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=129882aa35cd44a9f03ea40193b93383&language=en-US`)
      .then(response=>{
        console.log(response.data);
        const poster=response.data.poster_path
        const runtime=response.data.runtime
        const movie=Movie_DAO.addmovie(response.data.title,response.data.release_date,response.data.backdrop_path,response.data.id,
          response.data.overview,response.data.genres,"unreleased",response.data.vote_average,response.data.vote_count,poster,runtime)
          console.log(response.data.overview);
      })
        
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

