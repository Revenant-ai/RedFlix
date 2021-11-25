const { default: axios } = require("axios");
const show_DAO = require("../DataAcess/show_dao");
const screen_DAO = require("../DataAcess/screen_dao");

exports.Add_show = async (req, res) => {
    const { movie, theater_id, date,time, screen,price,seats} = req.body;
    const {row,col}=dao.fun()
    A:{
        
    }


    const show = await show_DAO.addShow(movie, theater_id, date,time, screen,price,seats)
    res.send(show)
}

exports.get_shows = async (req, res) => {
    const{theater_id}=req.body;
    const shows = await show_DAO.getShows_by_theater_id(theater_id);
    res.send(shows)
}

exports.get_show_movie= async (req, res) => {
    const {movie}=req.body;
    const shows = await show_DAO.getShows_by_movie_id(movie);
    res.send(shows)
}

exports.Add_screen= async (req, res) => {
    const {theater_id,Screen_num,grid}=req.body;
    //const screen = await screen_DAO.addScreen(theater_id,Screen_num);
    //res.send(screen)
    let temp=65;
    for(let i=0;i<grid.length;i++){    
        let row=String.fromCharCode(temp++)
        let col=1;
        let count=1;
        for(let j=0;j<grid[i].length;j++){
            if(grid[i][j].isSeat==true)
            {
                grid[i][j].id=row+count
                count++
            }
        }   
    }
    const screen=await screen_DAO.addScreen(theater_id,Screen_num,grid)
    res.send(screen)
}

exports.get_screens= async (req, res) => {
    const {theater_id,screen_num}=req.body;
    const screens = await show_DAO.getScreens(theater_id,screen_num);
    res.send("done")
}


