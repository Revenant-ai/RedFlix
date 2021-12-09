import React, { useEffect, useState } from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
const Featured = ({ Banner }) => {
  const [backdrop, setbackdrop] = useState("");
  return (
    <div className="">
      <CarouselProvider
        naturalSlideHeight={10}
        naturalSlideWidth={50}
        isPlaying={true}
        totalSlides={Banner.length}
        visibleSlides={1}
        isIntrinsicHeight={true}   
      >
        <Slider
          className="w-full object-contain"
        >
          {Banner.map((movie, index) => {
            return (
              <Slide index={index} className="">
                <div className=" w-full flex flex-col items-center m-30">
                  <img
                    src={Banner[index].backdrop}
                    alt={movie.title}
                    className="max-w-full"
                  />
                  <div></div>
                </div>
              </Slide>
            );
          })}
        </Slider>
      </CarouselProvider>
    </div>
  );
};
export default Featured;
