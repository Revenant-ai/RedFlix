const show_DAO = require("../DataAcess/show_dao");

exports.getShowByID=async (req, res) => {
    const {show_id}=req.params;
    const show = await show_DAO.getShow_by_id(show_id);
    res.send(show)
}

exports.hold_seats=async (req, res) => {
    const {show_id,seats}=req.body;
    const show = await show_DAO.holdSeats(show_id,seats);
    res.send(show)
}