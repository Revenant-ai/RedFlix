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

function convertToUTC(date)
{
  const temp=new Date(date);
  temp.setUTCDate(date.getDate());
  temp.setUTCFullYear(date.getFullYear());
  temp.setUTCMonth(date.getMonth());
  temp.setUTCHours(date.getHours());
  temp.setUTCMinutes(date.getMinutes());
  temp.setUTCSeconds(date.getSeconds());
  return temp;
}
//give only shows grouped by theaters (no movie info except movied id with every show)
exports.getShows_by_movie_id=async(movie)=>{
  let today=new Date();
  let dayaftertom=new Date(today);
  dayaftertom.setDate(dayaftertom.getDate()+3);
  dayaftertom.setHours(0);
  dayaftertom.setMinutes(0);
  today=convertToUTC(today);
  dayaftertom=convertToUTC(dayaftertom);
  console.log(today)
  console.log(dayaftertom)
    const shows=await Show.aggregate([
      {
        '$match': {
          '$and': [
            {
              'movie_id': parseInt(movie)
            }, {
              'date': {
                '$gte': today, 
                '$lte': dayaftertom
              }
            }
          ]
        }
      }, {
        '$sort': {
          'date': 1
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


exports.getShowsByMovieAndDateForTheater=async(theater_id)=>{
  let day=new Date();
  day=convertToUTC(day);
  console.log(theater_id,day)
  const shows = await Show.aggregate([
    {
      '$match': {
        '$and': [
          {
            'theater_id': theater_id
          }, {
            'date': {
              '$gte': day
            }
          }
        ]
      }
    }, {
      '$sort': {
        'date': 1
      }
    }, {
      '$group': {
        '_id': {
          'date': {
            '$dateToString': {
              'format': '%Y-%m-%d', 
              'date': '$date'
            }
          }, 
          'movie_id': '$movie_id'
        }, 
        'shows': {
          '$push': '$$ROOT'
        }
      }
    }, {
      '$lookup': {
        'from': 'movies', 
        'localField': '_id.movie_id', 
        'foreignField': 'id', 
        'as': 'movie'
      }
    }, {
      '$set': {
        'movie': {
          '$arrayElemAt': [
            '$movie', 0
          ]
        }
      }
    }, {
      '$group': {
        '_id': '$_id.date', 
        'date': {
          '$first': '$_id.date'
        },
        'shows': {
          '$push': {
            'movie': '$movie.title', 
            'movie_shows': '$shows'
          }
        }
      }
    }, {
      '$sort': {
        '_id': 1
      }
    }
  ]);
  return shows;
}