const { default: axios } = require("axios");

const config = {
    header: {
      "Content-Type": "application/json",
    },
  };
  
exports.getShowsByMovieApi = async (movie_id) => {
  return await axios.get(`/api/home/shows/movie/${movie_id}`);
};

exports.addShowApi = async (body) => {
  return await axios.post(`/api/theat-admin/addshow`, body, config);
};


exports.getShowsTheaterAdminApi = async(theater_id)=>{
  return await axios.get(`/api/theat-admin/shows/${theater_id}`);
}