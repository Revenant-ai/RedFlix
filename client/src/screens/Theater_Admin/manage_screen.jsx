import axios from "axios";
import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import List_card from "../../components/List_card";
import ScreenArrangement from "./ScreenArrangement";
import { useNavigate } from "react-router-dom";

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
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      };
      try {
        const {data}=await axios.get("/api/auth/getCurrentUser", config)
        const theat_id=(data._id)
          axios.get(`/api/theat-admin/gettheater/${theat_id}`).then((res) => {
            setScreens(res.data.screens);
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
   {screens.map((screen) => (
        <List_card key={screen} screen={screen.screen_num} />
      ))} 
      <List_card />
      <div>
        <button
          onClick={() => setIsOpen(true)}
          class="my-5 bg-transparent hover:bg-red-600 text-red-700  font-semibold hover:text-black py-2 px-4 border border-red-500 hover:border-transparent rounded"
        >
          Add a Screen
        </button>
      </div>

      <Modal isOpen={modalIsOpen} style={customStyles}>
        <ScreenArrangement />
        <button
          onClick={() => setIsOpen(false)}
          class=" bg-red-700 hover:bg-red-800 py-2 px-4 rounded text-white"
        >
          Close
        </button>
      </Modal>
    </div>
  );
};

export default Manage_screen;
