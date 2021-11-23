import React, { useRef, useState } from "react";

import Movie_card from "./Movie_card";
import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@material-ui/icons";

const List = ({list}) => {
  
  const [isMoved, setIsMoved] = useState(false);
  const [slideNumber, setSlideNumber] = useState(0);
    const [listLength, setListLength] = useState(0);

  const listRef = useRef();
  const cardRef = useRef();

  const handleClick = (direction) => {
    setIsMoved(true);
    let distance = listRef.current.getBoundingClientRect().x;
    let end_distance = listRef.current.getBoundingClientRect().right
    let card_length=cardRef.current.getBoundingClientRect().width;
    setListLength(listRef.current.getBoundingClientRect().width)
    console.log(distance);
    console.log(end_distance);
    
    let limit=-(card_length*list.length-end_distance);
    console.log(limit)
    if (direction === "left" && distance < 0) {
        const i=(card_length+distance) >= 0 ? 0 : card_length+distance;
      listRef.current.style.transform = `translateX(${i}px)`;
    }
    if (direction === "right" && distance >= limit) {
        const i=
      listRef.current.style.transform = `translateX(${-card_length + distance}px)`;
    }
  };



  return (
    <div class="justify-items-center relative overflow-hidden">
      <div
        onClick={() => handleClick("left")}
        style={{ display: !isMoved && "none" }}
        class="rounded-full h-24 w-24 flex items-center justify-center bg-black absolute z-20 w-20 left-0 m-auto top-0 bottom-0 bg-opacity-80"
      >
        <ArrowBackIosOutlined class=" color-white h-full bg-opacity-30 fill-current text-red-600 w-10" />
      </div>
      <div
        class="flex flex-nowrap transition duration-500 ease-in-out translate-x-0"
        ref={listRef}
      >
        {list.map((movie) => (
          <div ref ={cardRef} class="z-10" key={movie.id}>
            <div class="inline-block  px-3">
              <Movie_card movie={movie} />
            </div>
          </div>
        ))}
      </div>
      <div
        class="rounded-full h-24 w-24 flex items-center justify-center bg-black absolute z-20 w-20 right-0 m-auto top-0 bottom-0 bg-opacity-80"
        onClick={() => handleClick("right")}
      >
        <ArrowForwardIosOutlined class=" color-white h-full fill-current text-red-600 w-10" />
      </div>
    </div>
  );
};

export default List;
