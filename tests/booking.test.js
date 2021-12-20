const axios = require("axios");
const booking=require("../controllers/booking");

const data={
    _id: "61b5c8e93a0aa965cb618ca2",
    booking_id: "dummy",
    email: "",
    transaction_id: "",
    amount: "900",
    show_id: "61b5b116d85ced3e942a8768",
    ticket_qty: 3,
    date: "",
    time: "",
    booking_status: "waiting",
    seats: ["6-3", "6-4", "6-5"],
    __v: 0
}


test("get booking test", async () => {
    const booking=await axios.get(`http://localhost:5000/api/home/getbooking/dummy`)
    expect(booking.data.booking).toEqual(data);

    });

    test("post booking",()=>{
        expect(booking.Create_booking).toBeDefined();
    })