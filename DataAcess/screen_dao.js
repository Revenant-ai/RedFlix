var Theater=require('../models/theater');

exports.addScreen=async(theater_id,Screen_num,grid)=>{
    const screens={
        screen_num:Screen_num,
        grid:grid
    }
    await Theater.findOneAndUpdate({theater_id:theater_id},{$push:{screens:screens}})
}

exports.getscreen=async(theater_id,screen_num)=>{
    const screen=await Theater.findOne({theater_id:theater_id,screen_num:screen_num})
    return screen
}

exports.getSeats = async (theater_id,screen_num) => {
    const theater=await Theater.findOne({
        theater_id:theater_id, 
    })
    let i=0
    console.log(theater.screens.length)
    for(;i<theater.screens.length;i++){
        console.log(typeof(screen_num))
        if(theater.screens[i].screen_num === screen_num){
            
           for(let j=0;j<theater.screens[i].grid.length;j++){
            for(let k=0;k<theater.screens[i].grid[j].length;k++){
                if(theater.screens[i].grid[j][k].isSeat == true){
                    theater.screens[i].grid[j][k].isAvailable=true 
                }
            }
           }
           break
        } 
    }
    return theater.screens[i].grid
}

