const { findByIdAndUpdate } = require('../models/Shows');
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

//give only shows grouped by theaters (no movie info except movied id with every show)
exports.getShows_by_movie_id=async(movie)=>{
    const shows=await Show.aggregate([
        {
          '$match': {
            'movie_id': parseInt(movie)
          }
        }, {
          '$sort': {
            'date': 1, 
            'time': 1
          }
        }, {
          '$lookup': {
            'from': 'theaters', 
            'localField': 'theater_id', 
            'foreignField': 'theater_id', 
            'as': 'theater_name'
          }
        }, {
          '$set': {
            'theater_name': {
              '$arrayElemAt': [
                '$theater_name.theater_name', 0
              ]
            }
          }
        }, {
          '$group': {
            '_id': '$theater_id', 
            'theater_name': {
              '$first': '$theater_name'
            }, 
            'movie': {
              '$first': '$movie'
            }, 
            'shows': {
              '$push': '$$ROOT'
            }
          }
        }
      ])
    console.log(shows);
    return shows;
}
exports.getShow_by_id=async(id)=>{
    const show=await Show.findById(id)
    return show;
}

exports.holdSeats=async(show_id,seats)=>{
    for(let i=0;i<seats.length;i++){
        const id=seats[i]
        let row=parseInt(id.split("-")[0]);
        let col=parseInt(id.split("-")[1]);
        console.log(row,col);
        await Show.findByIdAndUpdate(show_id,{$set:{[`grid.${row}.${col}.isAvailable`]:false}});
        
      }
      
}
exports.releaseSeats=async(show_id,seats)=>{
  for(let i=0;i<seats.length;i++){
      const id=seats[i]
      let row=parseInt(id.split("-")[0]);
      let col=parseInt(id.split("-")[1]);
      console.log(row,col);
      await Show.findByIdAndUpdate(show_id,{$set:{[`grid.${row}.${col}.isAvailable`]:true}});
      
    }
    
}
