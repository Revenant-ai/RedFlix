import { useEffect, useState } from "react/cjs/react.development";
import { useParams } from "react-router-dom";
import axios from "axios";
import Crewbox from "../../components/Crewbox";
import Header from "../../components/Header";
import Poster from "../../components/Poster";

function MovieDetails() {

    const {movie_id,setmovie} = useParams(17577);
  const [movie_details,setMovieDetails] = useState({});
  const [isLoading, setLoading] = useState(true);
  
   useEffect(() => {
    axios.get(`/api/home/movie/${movie_id}`)
    .then(res => {
      setMovieDetails(res.data);
      console.log(res.data);
      console.log(movie_details)
      setLoading(false);
    })
  },[]);

  if (isLoading) {
    return <div className="App">Loading...</div>;
  }


  return (
    <div>
      <Header />
     {  <Poster title={movie_details.title} runtime={movie_details.runtime} genres={movie_details.genres} status={movie_details.status} backdrop={movie_details.backdrop} release={movie_details.year}/> }
      <div className="border rounded-xl border-red-600 shadow-lg mx-3 md:mx-14 my-8 p-5">
        <h1 className="subpixel-antialiased text-4xl font-semibold ">
          About the movie
        </h1>
        <p className="mt-3 font-medium">
          {movie_details.description}
        </p>
      </div>
       <div className="mx-3 md:mx-14 my-5 p-5 border-t-2">
        <p className="subpixel-antialiased text-4xl font-semibold">Cast</p>
        <Crewbox crew={movie_details.crew} />
      </div>
      <div className="mx-3 md:mx-14 my-5 p-5 border-t-2">
        <p className="subpixel-antialiased text-4xl font-semibold">Crew</p>
        <Crewbox crew={movie_details.cast} />
      </div> 
    </div>
  );
}

export default MovieDetails;
