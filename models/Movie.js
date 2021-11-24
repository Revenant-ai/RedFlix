const mongoose=require('mongoose')

const MovieSchema = new mongoose.Schema({
    title: { type: String, required: true },
    year: { type: String, required: true },
    backdrop:{ type: String, required: true },
    id: { type: Number, required: true },
    description: { type: String, required: true },
    genres: { type: Array, required: true },
    status: { type: String, required: true },
    vote_average: { type: Number, required: true },
    vote_count:{ type: Number, required: true },
    poster: { type: String, required: true },
    runtime: { type: Number, required: true },
    cast: {type:Array,required:true},
    crew: {type:Array,required:true},
})

const movie= mongoose.model('movie', MovieSchema)
module.exports = movie;
