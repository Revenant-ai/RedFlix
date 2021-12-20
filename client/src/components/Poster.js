import { Link } from "react-router-dom";
import "../Stylesheets/home.css"

function Poster({ movie_id, title, runtime, genres, status, backdrop, release }) {
  const formats = ["2D", "3D", "4D"];
  const button_state =
    status === "released"
      ? "bg-red-600 hover:bg-black text-black hover:text-red-600"
      : "bg-black text-red-600 disable:opacity-50 cursor-default";
  const button_text = status === "released" ? "Book Tickets" : "Coming soon";
  return (
    <div>
    <div className="" style={{backgroundImage:`url(${backdrop})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      height: "80vh",
    }}
    >
      
      <div className="black_sheet">
      <div className="flex flex-col p-40">
    {/*detials*/}
    <h1 className="subpixel-antialiased text-white text-3xl md:text-5xl font-bold mb-2">
      {title}
    </h1>
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
          className="subpixel-antialiased text-red-600 text-md md:text-xl font-semibold px-2 py-1 mr-1 bg-black rounded-md"
        >
          {item.name}
        </div>
      ))}
    </section>
    <Link to={`/shows/${movie_id}`}><button
      className={`w-80 subpixel-antialiased border border-red-600 text-lg font-semibold md:text-2xl px-3 py-1 rounded-md my-2 transition tranform ease-in-out ${button_state}`}
    >
      {button_text}
    </button></Link>
  </div>
      </div>
      <div className="Banner_fade"/>
      </div>

     
    </div>
  );
}

export default Poster;
