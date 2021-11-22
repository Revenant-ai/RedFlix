const Show=require('../models/Shows');

exports.addShow=async(movie, theater_id, date,time, screen,price,seats)=>{

   const show=await Show.create({
         movie, theater_id, date,time, screen,price,seats
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