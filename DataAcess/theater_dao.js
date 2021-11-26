const Theater = require('../models/theater')

exports.addtheater = async (theater_name,theater_city,theater_id,theater_address) => {
    const theater=await Theater.create({
        theater_name,
        theater_address,
        theater_city,
        theater_id,
        screens:null
})
return theater
}


