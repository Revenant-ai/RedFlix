import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Header from "../../components/Header";
import TheaterShows from "../../components/TheaterShows"
import ProgressBar from "@badrap/bar-of-progress"
import { getShowsByMovieApi } from "../../services/ShowService";

const progress = new ProgressBar({
  size:4,
  color:"#FE595E",
  className:"z-50",
  delay:100,
});
function ShowsByMovie({movie_id,changeMainDiv}) {

  //const {movie_id} = useParams();
  const today=new Date();
  const tommorrow=new Date(today);
  tommorrow.setDate(tommorrow.getDate()+1);
  const dayaftertom=new Date(today);
  dayaftertom.setDate(dayaftertom.getDate()+2)


  //States
  const [dateSelected,setDateSelected]=useState(today);
  const [theater_shows,setTheaterShows]=useState({})  
  const [isLoading, setLoading] = useState(true);


  useEffect(() => {
    getShowsByMovieApi(movie_id)
    .then(res => {
      setTheaterShows(res.data)
      progress.finish();
      setLoading(false);
    })
  },[]);

  if(isLoading){
    progress.start();
    return <div></div>
  }
  const title = theater_shows.movie.title;
  const genres = theater_shows.movie.genres;
  const runtime = theater_shows.movie.runtime;
  const release = theater_shows.movie.year;
  const formats = ["2D", "3D"];
  return (
    <div className="bg-black min-h-screen">
      <div className="bg-black pl-6 py-2">
          {/*title*/}
        <h1 className="subpixel-antialiased text-white text-3xl md:text-5xl font-bold mb-2">
          {title}
        </h1>

        {/*other details*/}
        <div className="sm:flex sm:space-x-4 sm:items-center">
          <h4 className="text-white text-md md:text-xl font-semibold mb-2">
            {parseInt(runtime / 60) + " Hrs " + (runtime % 60) + " Mins"}
          </h4>
          <h4 className="text-white text-md md:text-xl font-semibold mb-2">
            {new Date(release).toDateString().slice(4)}
          </h4>
          <section className="flex flex-wrap mb-2">
            {formats.map((item) => (
              <div
                key={item}
                className=" border subpixel-antialiased border-red-600 text-red-600 text-md md:text-xl font-semibold px-2 py-1 mr-1 rounded-md"
              >
                {item}
              </div>
            ))}
          </section>
          <section className="flex flex-wrap mb-2">
            {genres.map((item) => (
              <div
                key={item.id}
                className="subpixel-antialiased text-black text-md md:text-xl font-semibold px-2 py-1 mr-1 bg-white rounded-md"
              >
                {item.name}
              </div>
            ))}
          </section>
        </div>
      </div>

        {/*shows*/}
      <div className="flex flex-col  w-full items-center mt-4 ">

          {/*dates*/}
          
        <section className="subpixel-antialiased w-full bg-red-600 p-2 border-b-2 border-t-2 border-black">
                <button onClick={()=>{setDateSelected(today)}} className={`border-2 ${(dateSelected.getDate()===today.getDate()?"bg-black text-white":"")} rounded-md mx-2 px-2 py-1 font-bold hover:text-white hover:bg-black`}>{today.getDate()} Today</button>
                <button onClick={()=>{setDateSelected(tommorrow)}} className={`border-2 ${(dateSelected.getDate()===tommorrow.getDate()?"bg-black text-white":"")} rounded-md mx-2 px-2 py-1 font-bold hover:text-white hover:bg-black`}>{tommorrow.getDate()} {tommorrow.toString().split(' ')[0]}</button>
                <button onClick={()=>{setDateSelected(dayaftertom)}} className={`border-2 ${(dateSelected.getDate()===dayaftertom.getDate()?"bg-black text-white":"")} rounded-md mx-2 px-2 py-1 font-bold hover:text-white hover:bg-black`}>{dayaftertom.getDate()} {dayaftertom.toString().split(' ')[0]}</button>
        </section>

        {/*show details*/}
        <section className="subpixel-antialiased flex flex-col flex-grow mt-4 w-11/12">
          <div className="text-white self-end mb-2 inline-flex items-center space-x-2">
            <div className="bg-green-600 rounded-full w-3 h-3">&nbsp;</div><p>Available</p> <div className="bg-yellow-600 rounded-full w-3 h-3">&nbsp;</div><p>Fast Filling</p>
          </div>

          {/*cinemas*/}
           { 
           theater_shows.theaters.map(item=>(
                <TheaterShows key={item._id} shows={item.shows} theater_name={item.theater_name} movie_name={title} changeMainDiv={changeMainDiv} dateSelected={dateSelected}/>
              ))
            }
          

        </section>
      </div>
    </div>
  );
}

export default ShowsByMovie;
