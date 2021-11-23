var Theater=require('../models/theater');

exports.addScreen=async(theater_id,Screen_num,Row,Col)=>{
    const screens={
        screen_num:Screen_num,
        row:Row,
        col:Col
    }
    await Theater.findOneAndUpdate({theater_id:theater_id},{$push:{screens:screens}})
}
