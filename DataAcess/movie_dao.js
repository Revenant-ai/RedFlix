const Movie=require("../models/Movie")

module.exports={
    addmovie:async(title,year,backdrop,id,description,genres,status,vote_average,vote_count,poster,runtime)=>{
        console.log("flag 2")
        const Movie_det=await Movie.create({

            title,
            year,
            backdrop,
            id,
            description,
            genres,
            status,
            vote_average,
            vote_count,
            poster,
            runtime,

        })
        return Movie_det
    }
}