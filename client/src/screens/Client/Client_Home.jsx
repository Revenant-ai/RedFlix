import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import List from "../../components/List"
import Header from "../../components/Header"
import ProgressBar from "@badrap/bar-of-progress"


const progress = new ProgressBar({
  size:4,
  color:"#FE595E",
  className:"z-50",
  delay:100,
});


const Client_Home = () => {
  const [upcoming, setupcoming] = useState([]);
  const [nowplaying, setnowplaying] = useState([]);

  const upc = axios.get("/api/home/upc");
  const curr = axios.get("/api/home/curr");
  const client_req=axios.get("/api/auth/login/success")
  const [Client,setClient]=useState("no user")
  const [isLoading, setLoading] = useState(true);
  
  useEffect(async () => {
    axios.all([upc, curr]).then(
      axios.spread((...res) => {
        setupcoming(res[0].data);
        setnowplaying(res[1].data);
      }),
      setLoading(false),
      axios.get("/api/auth/login/success").then(res=>{
        setClient(res.data.user)
        
      })
          
      );
  }, [])

    if(isLoading){
      return(
        <div className="flex justify-center items-center h-screen">
          Loading
        </div>
      )
    }
    return (
      
      <div class="bg-black h-full">
         <Header Client={Client}/> 
        <h1 class="text-red-600 text-5xl my-5 mx-2 font-serif">Currently Playing</h1>
        <List list={nowplaying}/>
        <br/>
        <h1 class="text-red-600 text-5xl my-5 mx-2 font-serif">Upcoming Movies</h1>
        <List list={upcoming}/>
        </div>
      
    );

};

export default Client_Home;
