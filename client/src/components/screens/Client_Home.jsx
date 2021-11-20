import React, { useEffect, useState } from "react";
import axios from "axios";
import Movie_card from "./Movie_card";
import {ArrowBackIosOutlined, ArrowForwardIosOutlined} from '@material-ui/icons';

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
  <div class="w-4 scrollbar-none ">
      <div class="relative">
       <ArrowBackIosOutlined class="w-10 absolute"/>
        <div class="flex flex-nowrap lg:ml-40 md:ml-20 ml-10 relative">
      {upcoming.map((movie) => (
        <div key={movie.id}>
          <div class="inline-block  px-3">
            <Movie_card movie={movie} />
          </div>
        </div>
      ))}
    </div>
    <ArrowForwardIosOutlined class="absolute w-10"/>
    </div>
    </div>
  );
};

export default Client_Home;
