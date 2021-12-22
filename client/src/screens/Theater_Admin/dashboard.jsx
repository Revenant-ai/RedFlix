import React, { useEffect, useState } from 'react'
import Admin_sidebar from "../../components/admin_sidebar"
import Admin_header from '../../components/admin_header'
import Manage_screen from './manage_screen'
import { useNavigate } from "react-router-dom";
import ShowsPage from './ShowsPage';

const TheaterAdminDashboard = () => {
    const [mainDiv,setMainDiv]=useState(<ShowsPage/>)
    const [theater_id,setTheaterID]=useState()
    const changeMainDiv = (menuOpt)=>{
        setMainDiv(menuOpt)
    }
    return (
        <div class="flex flex-col min-h-screen bg-black">
           <Admin_header/>
           <div className="flex flex-row flex-grow">
            <Admin_sidebar changeDisplay={changeMainDiv}/>
            {mainDiv}
            </div>
        </div>
    )
}

export default TheaterAdminDashboard
