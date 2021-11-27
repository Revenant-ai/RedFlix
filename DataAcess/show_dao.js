const Show=require('../models/Shows');

exports.addShow=async(movie_id, theater_id, date,time, screen,price,seats,grid)=>{

   const show=await Show.create({
         movie_id, theater_id, date,time, screen,price,seats,grid
    });
    return show;
    
}

exports.getShows_by_theater_id=async(theater_id)=>{
    const shows=await Show.find({theater_id:theater_id})
    return shows;
}

exports.getShows_by_movie_id=async(movie)=>{
    const shows=await Show.find({movie:movie})
    console.log(shows);
    return shows;
}
exports.getShow_by_id=async(id)=>{
    const show=await Show.findById(id)
    return show;
}
