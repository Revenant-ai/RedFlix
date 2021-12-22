import { useEffect, useState } from "react";
import { getCurrentUserApi } from "../../services/AuthService";
import { getShowsTheaterAdminApi } from "../../services/ShowService";

function ShowsPage() {
  //const [Theater_id, set_Theater_id] = useState();
  const [theater_shows, setTheaterShows] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(async () => {
    try {
      const theatid = await getCurrentUserApi();
      const shows = await getShowsTheaterAdminApi(theatid.data._id);
      setTheaterShows(shows.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }, []);

  if (isLoading) {
    return <div className="text-white place-self-center">Loading...</div>;
  }
  return (
    <div className="text-white">
      {theater_shows.map((shows) => (
        <div className="m-5 border-t border-red-600 w-full">
          <p className="mt-2 text-2xl">{new Date(shows.date).toDateString()}</p>
          {shows.shows.map((show) => (
            <div className="flex items-center border border-red-600 m-5 rounded-md py-2 px-4">
              <p className=" text-xl w-1/4">{show.movie}</p>
              <div className="flex">
                  {
                      show.movie_shows.map((item)=>(
                          <div className="m-5 border border-red-600 rounded-md px-3 py-1"> {item.time} </div>
                      ))
                  }
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default ShowsPage;
