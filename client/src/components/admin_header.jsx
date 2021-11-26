import React from 'react'
import logo from "../components/images/logo.png";

const Admin_header = () => {
    return (
        <div className="relative bg-black flex justify-center items-center border-2 border-red-600">
            <img src={logo}/>
        </div>
    )
}

export default Admin_header
