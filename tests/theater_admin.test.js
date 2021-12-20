
const axios = require("axios");

const data = {
  _id: "61c098c62063071edf0a37e8" ,
  theater_name: "dummy",
  theater_address: "dummy",
  theater_city: "Ahmedabad",
  theater_id: "61c098c62063071edf0a37e6",
  __v: 0,
};

test("get theater details by id", async () => {
    const theater=await axios.get(`http://localhost:5000/api/theat-admin/gettheater/${data.theater_id}`)
    expect(theater.data).toEqual(data);
});