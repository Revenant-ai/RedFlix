const { default: axios } = require("axios");
const show_DAO = require("../DataAcess/show_dao");

exports.Add_show = async (req, res) => {
    const { movie, theater_id, date,time, screen,price,seats} = req.body;
    const show = await show_DAO.addShow(movie, theater_id, date,time, screen,price,seats)
    res.send(show)
}

exports.get_shows = async (req, res) => {
    const{theater_id}=req.body;
    const shows = await show_DAO.getShows_by_theater_id(theater_id);
    res.send(shows)
}

exports.get_show_movie= async (req, res) => {
    const {movie}=req.body;
    const shows = await show_DAO.getShows_by_movie_id(movie);
    res.send(shows)
}


