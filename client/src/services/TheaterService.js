const { default: axios } = require("axios")

const config = {
    header: {
      "Content-Type": "application/json",
    },
  };

exports.getTheaterApi = async (theater_id) => {
    return await axios.get(`/api/theat-admin/gettheater/${theater_id}`)
}

exports.addScreenApi = async (body) => {
    return await axios.post(
        "/api/theat-admin/addscreen",
        body,
        config
      );
}