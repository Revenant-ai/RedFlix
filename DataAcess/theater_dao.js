const Theater = require('../models/theater')

exports.addtheater = async (theater_name,theater_city,theater_id,theater_address) => {
    const theater=await Theater.create({
        theater_name,
        theater_address,
        theater_city,
        theater_id,
})
return theater
}

exports.gettheater = async (thet) => {
    const theater=await Theater.findOne({
       
            theater_id:thet
        })
    return theater
}


