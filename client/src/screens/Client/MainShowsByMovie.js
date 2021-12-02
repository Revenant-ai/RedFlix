import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Header from "../../components/Header";
import TheaterShows from "../../components/TheaterShows"
import ShowsByMovie from "./ShowsByMovie";



function MainShowsByMovie() {
    const {movie_id} = useParams(); 
  const [component,setComponent] = useState();
  const changeMainDiv = (comp)=>{
    setComponent(comp)
  }
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
      setComponent(<ShowsByMovie movie_id={movie_id} changeMainDiv={changeMainDiv}/>)
  },[]);

    return (
        <div>
            {component}
        </div>
    )
}

export default MainShowsByMovie
