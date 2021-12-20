const axios = require('axios');

test("current-movies", async () => {
    const movies=await axios.get(`http://localhost:5000/api/home/shows/movie/98981813`)
    expect(movies.status).toBe(201);
    });