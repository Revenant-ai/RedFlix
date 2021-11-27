import Header from "../../components/Header";

function ShowsByMovie() {
  const title = "Eternals";
  const genres = [
    { id: 1, name: "Action" },
    { id: 2, name: "Fantasy" },
    { id: 3, name: "Sci-Fi" },
  ];
  const runtime = 90;
  const release = "2009-05-26";
  const formats = ["2D", "3D"];
  return (
    <div className="bg-black min-h-screen">
      <Header />
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
                <button className=" border-2 rounded-md mx-2 px-2 py-1 font-bold hover:text-white hover:bg-black">21 Today</button>
                <button className=" border-2 rounded-md mx-2 px-2 py-1 font-bold hover:text-white hover:bg-black">22 Mon</button>
                <button className=" border-2 rounded-md mx-2 px-2 py-1 font-bold hover:text-white hover:bg-black">21 Tue</button>
        </section>

        {/*show details*/}
        <section className="subpixel-antialiased flex flex-col flex-grow mt-4 w-11/12">
          <div className="text-white self-end mb-2 inline-flex items-center space-x-2">
            <div className="bg-green-600 rounded-full w-3 h-3">&nbsp;</div><p>Available</p> <div className="bg-yellow-600 rounded-full w-3 h-3">&nbsp;</div><p>Fast Filling</p>
          </div>
          {/*cinema 1*/}
          <div className="flex flex-col sm:flex-row px-2 py-4 border-red-600 border-2 rounded-md bg-black text-white mb-2">
            <div className="w-1/4 pl-4 text-lg mb-2 sm:mb-0 font-medium">
              <p>cinema 1</p>
            </div>
            <div className="flex flex-wrap">
                <div className="px-4 py-2 border-2 border-green-600 rounded-md text-base mx-2  mb-2 sm:mb-0  ">10:00</div>
                <div className="px-4 py-2 border-2 border-green-600 rounded-md text-base mx-2  mb-2 sm:mb-0 ">15:00</div>
                <div className="px-4 py-2 border-2 border-green-600 rounded-md text-base mx-2 mb-2 sm:mb-0 ">20:00</div>
                <div className="px-4 py-2 border-2 border-yellow-600 rounded-md text-base mx-2 mb-2 sm:mb-0 ">21:00</div>
                <div className="px-4 py-2 border-2 border-green-600 rounded-md text-base mx-2 mb-2 sm:mb-0 ">22:00</div>
            </div>
          </div>

          {/*cinema 2*/}
          <div className="flex flex-col sm:flex-row px-2 py-4 border-red-600 border-2 rounded-md bg-black text-white mb-2">
            <div className="w-1/4 pl-4 text-lg font-medium mb-2 sm:mb-0 ">
              <p>cinema 1</p>
            </div>
            <div className="flex flex-wrap">
                <div className="px-4 py-2 border-2 border-green-600 rounded-md text-base mx-2 mb-2 sm:mb-0 ">10:00</div>
                <div className="px-4 py-2 border-2 border-yellow-600 rounded-md text-base mx-2 mb-2 sm:mb-0 ">15:00</div>
                <div className="px-4 py-2 border-2 border-green-600 rounded-md text-base mx-2 mb-2 sm:mb-0 ">20:00</div>
                <div className="px-4 py-2 border-2 border-green-600 rounded-md text-base mx-2 mb-2 sm:mb-0 ">21:00</div>
                <div className="px-4 py-2 border-2 border-green-600 rounded-md text-base mx-2 mb-2 sm:mb-0 ">22:00</div>
            </div>
          </div>

        </section>
      </div>
    </div>
  );
}

export default ShowsByMovie;
