import axios from "axios";
import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import List_card from "../../components/List_card";
import ScreenArrangement from "./ScreenArrangement";
import { useNavigate } from "react-router-dom";
import { getCurrentUserApi } from "../../services/AuthService";
import { getTheaterApi } from "../../services/TheaterService";

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

const Manage_screen = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [screens, setScreens] = useState([]);

  useEffect(() => {
    const Auth_confirm = async () => {
      try {
        const {data}=await getCurrentUserApi()
        const theat_id=(data._id)
        console.log(theat_id)
          getTheaterApi(theat_id).then((res) => {
            setScreens(res.data.screens===undefined?[]:res.data.screens);
            console.log(res.data)
          })
      } catch (error) {
        console.log(error);
      }
    }

    Auth_confirm();
  }, []);

  return (
    <div class="w-full flex flex-col items-center">
      <h1>
        <span class="text-red-600 text-3xl">Manage Screen</span>
      </h1>
   {screens.map((screen) => (
        <List_card key={screen} screen={screen.screen_num} />
      ))} 
      <div>
        <button
          onClick={() => setIsOpen(true)}
          class="my-5 bg-transparent hover:bg-red-600 text-red-700  font-semibold hover:text-black py-2 px-4 border border-red-500 hover:border-transparent rounded"
        >
          Add a Screen
        </button>
      </div>

      <Modal isOpen={modalIsOpen} style={customStyles} >
        <ScreenArrangement />
        <button
          onClick={() => setIsOpen(false)}
          class=" bg-red-700 hover:bg-red-800 py-2 px-4 rounded text-white"
        >
          Close
        </button >
      </Modal>
    </div>
  );
};

export default Manage_screen;
