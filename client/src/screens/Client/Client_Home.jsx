import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import List from "../../components/List"
import Header from "../../components/Header"
import ProgressBar from "@badrap/bar-of-progress"
import Featured from "../../components/Featured";
import "../../Stylesheets/home.css";
import { loginSuccessApi } from "../../services/AuthService";
import { getReleasedMoviesApi, getUpcomingMoviesApi } from "../../services/MovieService";


const progress = new ProgressBar({
  size:4,
  color:"#FE595E",
  className:"z-50",
  delay:100,
});


const Client_Home = () => {
  const [upcoming, setupcoming] = useState([]);
  const [nowplaying, setnowplaying] = useState([]);

  const upc = getUpcomingMoviesApi();
  const curr = getReleasedMoviesApi();
  const [Client,setClient]=useState("no user")
  const [isLoading, setLoading] = useState(true);
  
  useEffect(async () => {
    Promise.all([upc, curr]).then(
      (res) => {
        setupcoming(res[0].data);
        setnowplaying(res[1].data);
      
        progress.finish();
      setLoading(false)
      loginSuccessApi().then(res=>{
        setClient(res.data.user)
      })    
    });
  }, [])

    if(isLoading){
      progress.start();
      return<div></div>
    }
    return (
      
      <div class="h-full flex flex-col" className="home-div">
         <Header Client={Client}/> 
         <div className="h-1/4">
            <Featured Banner={nowplaying} className="object-cover"/>    
         </div>
         
        <h1 class="text-red-600 text-5xl my-5 mx-2 font-serif">Currently Playing</h1>
        <List list={nowplaying}/>
        <br/>
        <h1 class="text-red-600 text-5xl my-5 mx-2 font-serif">Upcoming Movies</h1>
        <List list={upcoming}/>
        </div>
      
    );

};

export default Client_Home;
