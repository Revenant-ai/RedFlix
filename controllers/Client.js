const show_DAO = require("../DataAcess/show_dao");

exports.getShowByID=async (req, res) => {
    const {show_id}=req.params;
    const show = await show_DAO.getShow_by_id(show_id);
    res.send(show)
}