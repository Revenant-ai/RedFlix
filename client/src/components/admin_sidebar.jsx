import React from 'react'
import Manage_screen from '../screens/Theater_Admin/manage_screen'
import Manage_shows from '../screens/Theater_Admin/manage_shows'

const Admin_sidebar = ({changeDisplay}) => {
    
    return (
        <div class="flex flex-col left-0 w-14 hover:w-64 md:w-64 bg-black dark:bg-gray-900 h-100 text-white transition-all duration-300 border-none sidebar">
        <div class="border-2 border-red-600 overflow-y-auto overflow-x-hidden flex flex-col justify-between flex-grow">
          <ul class="flex flex-col py-4 space-y-1">
            <li class="px-5 hidden md:block">
              <div class="flex flex-row items-center h-8">
                <div class="text-sm font-light tracking-wide text-gray-400 uppercase">Main</div>
              </div>
            </li>
            <li>
              <div class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-red-600 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-white dark:hover:border-gray-800 pr-6">
                <span class="inline-flex justify-center items-center ml-4">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
                </span>
                <span class="ml-2 text-sm tracking-wide truncate">Dashboard</span>
              </div>
            </li>
            <li onClick={()=>{changeDisplay(<Manage_shows/>)}} className="cursor-pointer active:bg-red-600">
              <div class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-red-600  dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-white dark:hover:border-gray-800 pr-6" >
                <span class="inline-flex justify-center items-center ml-4" >
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"></path></svg>
                </span>
                  <span class="ml-2 text-sm tracking-wide truncate">Manage Shows</span>
              </div>
            </li>
            <li onClick={()=>{changeDisplay(<Manage_screen/>)}} className="cursor-pointer active:bg-red-600">
              <div class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-red-600 dark:hover:bg-gray-600 text-white hover:text-white-800 border-l-4 border-transparent hover:border-white  dark:hover:border-gray-800 pr-6" >
                <span class="inline-flex justify-center items-center ml-4">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"></path></svg>
                </span>
                <span class="ml-2 text-sm tracking-wide truncate">Manage Screen</span>
              </div>
            </li>
            
          </ul>
          <p class="mb-14 px-5 py-3 hidden md:block text-center text-xs">Copyright @2021</p>
        </div>
      </div>
    )
}

export default Admin_sidebar
