import React, { useEffect, useState } from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import "../Stylesheets/home.css"

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
                <div class=" w-full flex flex-col items-center m-30" >
                  <img
                    src={Banner[index].backdrop}
                    alt={movie.title}
                    class="max-w-full opacity-50"
                    
                  />
                  <div className="left-0 absolute bottom-0 my-20 mx-20">
                    <h1 className="subpixel-antialiased text-white text-3xl md:text-5xl font-bold mb-2">
                      {Banner[index].title}
                    </h1>
                      <p className="text-white my-5">
                        {Banner[index].description}
                      </p>
                    <button class="bg-red-700 relative rounded h-10 w-40 text-2xl text-white">
                      Book Tickets
                    </button>
                  </div>
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
