import React from "react";
import Desk from "../assets/images/illustration-working.svg";

const Hero = () => {
  return (
    <div className=" flex  pt-12 w-5/6 mx-auto flex-col-reverse
    
    sm:flex-row
    ">
      {/* left */}
      <div
        className="pt-8 
        
        leading-5
       w-7/12
       flex flex-col  items-center justify-center

       sm:items-start
       sm:justify-start
       "
      >
        {/* Text-1 */}
        <div className="">
          <p
            className="
            text-4xl
            text-center
            sm:text-left
            sm:text-5xl
            md:text-6xl font-extrabold
          lg:text-7xl
          "
          >
            {" "}
            More than just 
            Shorter links
          </p>
        </div>
        {/* Text-2 */}
        <div className="mt-6 sm:w-2/3 sm:mr-auto">
          <p
            className="text-neutral-grayish-violet
           text-sm
           sm:text-base
            md:text-xl
           lg:text-2xl
           text-center
                      sm:text-left
           "
          >
            Shorten your links and Get detailed insights on how your 
            links are performing
          </p>
        </div>
      </div>

      {/* right image vagera */}
      <div className=" w-5/12">
        <img
          src={Desk}
          alt=""
          className="
     
        w-full object-fill   "
        />
      </div>
    </div>
  );
};

export default Hero;
