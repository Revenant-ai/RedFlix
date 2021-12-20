const upc=require("../controllers/movies.js");

test('test upcoming movies', () => {
    expect(upc.Get_Upcoming_Movies()).toBeDefined();
})
