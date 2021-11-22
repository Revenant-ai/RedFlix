import React, { useEffect, useState } from "react";
import axios from "axios";
import Movie_card from "./Movie_card";
import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@material-ui/icons";

const Client_Home = () => {
  const [upcoming, setupcoming] = useState([]);

  useEffect(() => {
    axios
      .get("/api/home/")
      .then((res) => {
        setupcoming(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return (
    <div>
      
      <div class="justify-items-center relative">
      <div class="rounded-full h-24 w-24 flex items-center justify-center bg-black absolute z-20 w-20 left-0 m-auto top-0 bottom-0 bg-opacity-80">
        <ArrowBackIosOutlined class=" color-white h-full bg-opacity-30 fill-current text-red-600"/>
        </div>
        <div class="scrollbar-hide overflow-scroll flex flex-nowrap">
        
        {upcoming.map((movie) => (
          <div  class="z-10"key={movie.id}>
            <div class="inline-block  px-3">
              <Movie_card movie={movie} />
            </div>
          </div>
        ))}
        
      </div>
      <div class="rounded-full h-24 w-24 flex items-center justify-center bg-black absolute z-20 w-20 right-0 m-auto top-0 bottom-0 bg-opacity-80">
        <ArrowForwardIosOutlined class=" color-white h-full fill-current text-red-600"/>
        </div>
      </div>
      
    </div>
  );
};

export default Client_Home;
