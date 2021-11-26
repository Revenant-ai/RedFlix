
function Poster({title, runtime, genres, status, backdrop, release}) {
  const formats=["2D","3D","4D"];
  const button_state=(status==="released")?"":"disable:opacity-50"
  const button_text=(status==="released")?"Book Tickets":"Coming soon"
  return (
    <div className="flex flex-col md:flex-row justify-evenly bg-black rounded-xl shadow-lg m-2 p-2 w-90">
        <div className="p-10 md:w-2/5">
          {/*detials*/}
            <h1 className="subpixel-antialiased text-white text-3xl md:text-5xl font-bold mb-2">{title}</h1>
            <h4 className="text-white text-md md:text-xl font-semibold mb-2">{runtime}</h4>
            <h4 className="text-white text-md md:text-xl font-semibold mb-2">{release}</h4>
            <section className="flex flex-wrap mb-2">
            {
              formats.map((item)=>(
                <div key={item} className=" border subpixel-antialiased border-red-600 text-red-600 text-md md:text-xl font-semibold px-2 py-1 mr-1 rounded-md">
                  {item}
                </div>
              ))
            }
            </section>
            <section className="flex flex-wrap mb-2">
            {
              genres.map((item)=>(
                <div key={item.id} className="subpixel-antialiased text-black text-md md:text-xl font-semibold px-2 py-1 mr-1 bg-white rounded-md">
                  {item.name}
                </div>
              ))
            }
            </section>
            <button className={`subpixel-antialiased hover:bg-red-600 active:scale-90 border-red-600 text-red-600 hover:text-black border text-lg font-semibold md:text-2xl px-3 py-1 rounded-md my-2 transition tranform ease-in-out ${button_state}`}>{button_text}</button>
        </div>
        {/*backdrop*/}
        <div className="md:w-3/5 h-auto bg-cover bg-center " style={{backgroundImage:`url(${backdrop})`, boxShadow:'0 0 10px 10px black inset'}}>
        </div>
    </div>

  )
}



export default Poster
