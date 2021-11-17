const Movie=require("../models/Movie")

module.exports={
    addmovie:async(title,year,backdrop,id,description,genres,status,vote_average,vote_count,poster,runtime)=>{
        const Movie_det=await Movie.create({

            title,
            year,
            backdrop: `https://image.tmdb.org/t/p/original${backdrop}`,
            id,
            description,
            genres,
            status,
            vote_average,
            vote_count,
            poster: `https://image.tmdb.org/t/p/w500/${poster}`,
            runtime,

        })
        return Movie_det
    }
}

module.exports={
    getMovies:async()=>{
        const Movies=await Movie.find()
        db.movies.find({})
    }
}