const Movie=require("../models/Movie")


    exports.addmovie=async(title,year,backdrop,id,description,genres,status,vote_average,vote_count,poster,runtime,cast,crew)=>{
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
            cast,
            crew,

        })
        return Movie_det
    }



    exports.get_upcoming_movies=async()=>{
        const movies=await Movie.find({status:"unreleased"})
        return movies
    }

    exports.get_current_movies=async()=>{
        const movies=await Movie.find({status:"released"})
        return movies
    }

    exports.getMovieById =async(movie_id)=>{
        const movie=await Movie.find({id:movie_id})
        console.log(movie)
        return movie[0];
    }
