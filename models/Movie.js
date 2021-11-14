const mongoose=require('mongoose')

const MovieSchema = new mongoose.Schema({
    title: { type: String, required: true },
    year: { type: Number, required: true },
    backdrop:{ type: String, required: true },
    id: { type: Number, required: true },
    description: { type: String, required: true },
    genres: { type: Array, required: true },
    poster: { type: String, required: true },
    duraton: { type: Number, required: true },
    status: { type: String, required: true },
    vote_average: { type: Number, required: true },
    cote_count:{ type: Number, required: true }
})

const movie= mongoose.model('movie', MovieSchema)
module.exports = movie;
