import { useEffect, useState } from "react/cjs/react.development";
import { useParams } from "react-router-dom";
import axios from "axios";
import Crewbox from "../../components/Crewbox";
import Header from "../../components/Header";
import Poster from "../../components/Poster";
import ProgressBar from "@badrap/bar-of-progress"

const progress = new ProgressBar({
  size:4,
  color:"#FE595E",
  className:"z-50",
  delay:100,
});
function MovieDetails() {

  const {movie_id} = useParams();
  const [movie_details,setMovieDetails] = useState({});
  const [isLoading, setLoading] = useState(true);
  const [Client,setClient]=useState("no user")
  
   useEffect(() => {
    axios.get(`/api/home/movie/${movie_id}`)
    .then(res => {
      setMovieDetails(res.data);
      setLoading(false);
      progress.finish()
      axios.get("/api/auth/login/success").then(res=>{
        setClient(res.data.user)
        
      }) 
    })
  },[]);

  if (isLoading) {
    progress.start();
    return <div></div>
  }

  return (
    <div className="bg-black">
      <Header Client={Client}/>
     <div>
     {  <Poster title={movie_details.title} runtime={movie_details.runtime} genres={movie_details.genres} status={movie_details.status} backdrop={movie_details.backdrop} release={movie_details.year}/> }
      <div className="border rounded-xl border-red-600 shadow-lg mx-3 md:mx-14 my-8 p-5">
        <h1 className="subpixel-antialiased text-4xl font-semibold text-red-600">
          About the movie
        </h1>
        <p className="mt-3 font-medium text-white">
          {movie_details.description}
        </p>
      </div>
       <div className="mx-3 md:mx-14 my-5 p-5 border-t-2">
        <p className="subpixel-antialiased text-4xl font-semibold text-red-600">Cast</p>
        <Crewbox crew={movie_details.crew} />
      </div>
      <div className="mx-3 md:mx-14 my-5 p-5 border-t-2">
        <p className="subpixel-antialiased text-4xl font-semibold text-red-600">Crew</p>
        <Crewbox crew={movie_details.cast} />
      </div> 
     </div>
    </div>
  );
}

export default MovieDetails;
