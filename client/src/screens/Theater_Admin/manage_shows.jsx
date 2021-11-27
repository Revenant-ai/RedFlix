import React, { useEffect, useState } from "react";
import Admin_sidebar from "../../components/admin_sidebar";
import Admin_header from "../../components/admin_header";
import ScreenArrangement from "./ScreenArrangement";
import Modal from "react-modal";
import axios from "axios";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};


const Manage_shows = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [screen_num, set_screen_num] = useState();
  const [date, set_date] = useState();
  const [time, set_time] = useState();
  const [movie_name, set_movie_name] = useState();
  const[price,set_price]=useState();
  const [movieList,set_movieList] = useState([]);
  const[Theater_id,set_Theater_id]=useState();


  

  const SetShow = () => {
    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };
    try {
      const { data } = axios.post(
        `/api/theat-admin/addshow`,
        {
          movie_id: movie_name,
          screen: screen_num,
          theater_id:Theater_id,
          date: date,
          time:time,
          price:price
        },
        config
      ).then((res) => {
        console.log(res);
        alert("Show Added Successfully");
        setIsOpen(false);
      });
    } catch (error) {
      console.log(error);
    }
  }
 

  useEffect(() => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
    };
  

    try{
      axios.get("/api/auth/getCurrentUser",config).then((res)=>{
        set_Theater_id(res.data._id);
    })
    }catch(error){
      console.log(error);
    }
   axios.get("/api/home/all-movie")
   .then(res => {
      console.log(res.data);
      set_movieList(res.data);
    })
  },[]);
 const menuChange= (e)=>{
    set_movie_name(e.target.value);
  }

  return (
    
    <div>
      <button
        onClick={() => setIsOpen(true)}
        class="bg-transparent hover:bg-red-600 text-red-700  font-semibold hover:text-black py-2 px-4 border border-red-500 hover:border-transparent rounded"
      >
        Add a show
      </button>
      <Modal isOpen={modalIsOpen} style={customStyles}>
        <div class="flex justify-center items-center">
          <div>
            <form class="w-full max-w-lg ">
              <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-first-name"
                  >
                    Screen Num
                  </label>
                  <input
                  onChange={(e) => set_screen_num(e.target.value)}
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="grid-first-name"
                    type="text"
                    placeholder="Enter Screen Number"
                  />
                </div>


                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-state"
                  >
                    Select Movie
                  </label>
                  <div class="relative">
                    <select
                      class="block appearance-none w-full bg-gray-200 border border-red-600 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-red-600"
                      id="grid-state"
                      onChange={menuChange}
                      >
                        <option selected="selected">Select Movie</option>
                      {movieList.map(movie => (
                        <option class="text-xs" value={movie.id} key={movie.id}>{movie.title}</option>
                      ))}
                    </select>
                    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg
                        class="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>
                  </div>
                </div>


                
              </div>
              <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3">
                  <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-password"
                  >
                    Date
                  </label>
                  <input
                  onChange={(e) => set_date(e.target.value)}
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    type="date"
                    placeholder="Enter date"
                  />
                  <p class="text-gray-600 text-xs italic"></p>
                </div>
              </div>
              <div class="flex flex-wrap -mx-3 mb-2">
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-first-name"
                  >
                    Price
                  </label>
                  <input
                  onChange={(e) => set_price(e.target.value)}
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="grid-first-name"
                    type="text"
                    placeholder="Enter price of the show"
                  />
                </div>
                <div class="w-full md:w-1/2 px-3">
                  <label
                  onChange={(e) => set_date(e.target.value)}
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-last-name"
                  >
                    Time
                  </label>
                  <input
                  onChange={(e) => set_time(e.target.value)}
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    type="time"
                    placeholder="Doe"
                  />
                </div>
              </div>
            </form>

            <div class="flex flex-wrap -mx-3 mb-2 justify-center items-center space-x-4">
              <div class=" px-3 mb-6 md:mb-0">
                <button
                  onClick={() => setIsOpen(false)}
                  class=" bg-red-700 hover:bg-red-800 py-2 px-4 rounded text-white"
                >
                  Close
                </button>
              </div>
              <div class=" px-3 mb-6 md:mb-0">
                <button onClick={SetShow} class="bg-green-600 hover:bg-green-800 py-2 px-6 rounded text-white">
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Manage_shows;
