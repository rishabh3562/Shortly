import React, { useState } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import bg1 from "../assets/images/bg-boost-desktop.svg";
import bg2 from "../assets/images/bg-boost-mobile.svg";
import bg3 from "../assets/images/bg-shorten-desktop.svg";
import bg4 from "../assets/images/bg-shorten-mobile.svg";
// import bg5 from "../assets/images/bg-boost-mobile.svg"
// import bg3 from "../assets/images/bg-boost-mobile.svg"
// import bg4
const Home = () => {
  const [link, setLink] = useState("");

  const HandleSubmit = (e) => {
    e.preventDefault();
    // Do something with the inputText (e.g., submit it, process it, etc.)
    console.log("Submitted text:", link);
  };
  const HandleLink = (e) => {
    setLink(e.target.value);
  };
  return (
    <>
      {/* <div>Hero</div> */}
      <div className="  ">
        <div className="bg-white pb-6">

        <Header className="absolute bottom-0" />
        <Hero />
        </div>

        {/* FORM section */}

        <form
          onSubmit={HandleSubmit}
          className=" relative bottom-10 py-8 px-8
          rounded-lg bg-hero-pattern
           bg-primary-dark-violet
           w-3/4 mx-auto
           "
        >
          <div
            className="
            flex w-full 
            mx-auto 
             gap-8"
          >
            <input
              type="text"
              name=""
              id=""
              value={link}
              onChange={HandleLink}
              placeholder="Paste the link here"
              className="border border-gray-400 p-2 rounded-md w-full "
            />

            <button
              type="submit"
              className=" min-w-fit  bg-teal-300
            
             px-4 py-2 rounded-md"
            >
              <span className="font-extrabold text-white">Shorten It!</span>
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Home;
