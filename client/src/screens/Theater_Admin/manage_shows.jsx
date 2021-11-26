import React, { useState } from "react";
import Admin_sidebar from "../../components/admin_sidebar";
import Admin_header from "../../components/admin_header";
import ScreenArrangement from "./ScreenArrangement";
import Modal from "react-modal";

const Manage_shows = ({}) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button onClick={()=>setIsOpen(true)} class="bg-transparent hover:bg-red-600 text-red-700  font-semibold hover:text-black py-2 px-4 border border-red-500 hover:border-transparent rounded">
        Add a show
      </button>
      <Modal isOpen={modalIsOpen}>
        <h2>Modal Title</h2>
        <p>Body of modal</p>
        <div>
          <button onClick={()=>setIsOpen(false)} class="bg-red-700 hover:bg-red-800 py-2 px-4 rounded text-white">Close</button>
        </div>
      </Modal>
    </div>
  );
};

export default Manage_shows;
