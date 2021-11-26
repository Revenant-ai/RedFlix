import React from "react";
import Admin_sidebar from "../../components/admin_sidebar";
import Admin_header from "../../components/admin_header";
import ScreenArrangement from "./ScreenArrangement";

const manage_shows = () => {
  return (


    <div class="h-screen bg-black flex flex-col">
      <div class="my-10">
        <lable class="text-red-600 m-5">Select Movie:</lable>

        <select name="cars" id="cars">
      <option value="volvo">Volvo</option>
      <option value="saab">Saab</option>
  </select>
  </div>

      <div class="my-10">
        <lable class="text-red-600  m-5">Screen Num:</lable>
        <input
          type="text"
          class=" border shadow-sm px-3 py-2 rounded-md appearance-none placeholder-gray-500 dark:bg-dark-2 dark:border-transparent"
          placeholder="Enter Screen num"
        />
      </div>

      <div class="my-10">
        <lable class="text-red-600  m-5">Select Date:</lable>
  <input type="date" name="Date"/>

      </div>

      <div class="my-10">
        <lable class="text-red-600  m-5">Select Time:</lable>
        <input type="time" id="appt" name="appt"/>
      </div>
    </div>
  );
};

export default manage_shows;
