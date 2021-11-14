const { default: axios } = require("axios");
const { response } = require("express");



exports.Add_movie = async(req,res,next) => {
    const{movie_id} = req.body;
    try{
      axios.get("https://api.themoviedb.org/3/movie/671?api_key=129882aa35cd44a9f03ea40193b93383&language=en-US")
      .then(response=>{
          console.log(response.data)
      })
        
    } catch(err){
       next(err)
    }
}