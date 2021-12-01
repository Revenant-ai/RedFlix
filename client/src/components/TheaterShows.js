function TheaterShows({shows,theater_name}) {
    return (
        <div className="flex flex-col sm:flex-row px-2 py-4 border-red-600 border-2 rounded-md bg-black text-white mb-2">
            <div className="w-1/4 pl-4 text-lg mb-2 sm:mb-0 font-medium">
              <p>{theater_name}</p>
            </div>
            <div className="flex flex-wrap">
                {
                    shows.map(item=>(
                        <div key={item._id} className="px-4 py-2 border-2 border-green-600 rounded-md text-base mx-2  mb-2 sm:mb-0  ">{item.time}</div>
                    ))
                }
            </div>
          </div>
    )
}

export default TheaterShows
