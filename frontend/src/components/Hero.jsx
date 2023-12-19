import React from "react";
import Desk from "../assets/images/illustration-working.svg";

const Hero = () => {
  return (
    <div className=" flex  pt-12 w-5/6 mx-auto">
      {/* left */}
      <div
        className="pt-8 
        leading-5
       w-7/12
       
       "
      >
        {/* Text-1 */}
        <div className="">
          <p
            className="text-8xl font-extrabold
          
          "
          >
            {" "}
            More than just <br />
            Shorter links
          </p>
        </div>
        {/* Text-2 */}
        <div className="">
          <p
            className="text-neutral-grayish-violet
           text-xl"
          >
            Shorten your links and Get detailed insights on how your <br />
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
     
        w-full object-contain   "
        />
      </div>
    </div>
  );
};

export default Hero;
