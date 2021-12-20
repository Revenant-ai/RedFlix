const { default: axios } = require("axios")


const config = {
  header: {
    "Content-Type": "application/json",
  },
};

exports.getBookingApi = async (booking_id) => {
    return await axios.get(`/api/home/getbooking/${booking_id}`, config)
}

exports.createBookingApi = async (body) => {
  return await axios.post("/api/home/book", body, config);
}