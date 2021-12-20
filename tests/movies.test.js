const upc=require("../controllers/movies.js");
const axios=require("axios");

test('test upcoming movies', () => {
    expect(upc.Get_Upcoming_Movies()).toBeDefined();
})

test("upcoming-movies", async () => {
    const movies=await axios.get(`http://localhost:5000/api/home/upc`)
    expect(movies.status).toBe(201);
    });

    test("current-movies", async () => {
        const movies=await axios.get(`http://localhost:5000/api/home/curr`)
        expect(movies.status).toBe(201);
        });

