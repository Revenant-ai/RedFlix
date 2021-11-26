import React from "react";
import Admin_sidebar from "../../components/admin_sidebar"
import Admin_header from '../../components/admin_header'

const manage_screen = () => {
  return (
    <div class="h-screen bg-black">
      <Admin_header />
      <Admin_sidebar />
    </div>
  )
}

export default manage_screen;
