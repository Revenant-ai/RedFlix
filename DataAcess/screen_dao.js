var Theater=require('../models/theater');

exports.addScreen=async(theater_id,Screen_num,grid)=>{
    const screens={
        screen_num:Screen_num,
        grid:grid
    }
    await Theater.findOneAndUpdate({theater_id:theater_id},{$push:{screens:screens}})
}
