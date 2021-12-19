const { default: axios } = require("axios")


exports.paymentApi = async (body) => {
    return await axios.post("/api/home/payment",body)
}

exports.paymentSuccessApi = async (body) => {
    return axios.post("/api/home/payment/success",body)
}