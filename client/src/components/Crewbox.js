import default_photo from "./images/default-profile.jpg"
function Crewbox({crew}) {  
    return (
        <div className="flex m-4 space-x-3  shadow-lg border border-red-600 rounded-md scrollbar-thin scrollbar-track-red-300 scrollbar-thumb-red-500 overflow-x-scroll p-3">
            {
                crew.map((item)=>{
                    const profile=item.profile_path===null?default_photo:'https://image.tmdb.org/t/p/w500'+item.profile_path;
                    return (
                        <div className="flex bg-black  h-40 items-center rounded-xl border border-red-600">
                            <div className="h-full w-32" >
                                <img src={profile} alt="profile" className="object-cover h-full rounded-xl"/>
                            </div>
                            <div className="text-center p-1">
                                <p className="text-white">{item.original_name}</p>
                                <p className="text-white">{(item.character===undefined?`(${item.department})`:`as ${item.character}`)}</p>
                            </div>
                        </div>
                    );
                })
            }
        </div>
    )
}



  
export default Crewbox
