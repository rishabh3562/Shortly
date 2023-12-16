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
      <div className="w-5/6 mx-auto">
        <Header className="absolute bottom-0" />
        <Hero />

        {/* FORM section */}

        <form onSubmit={HandleSubmit} className="flex">
          <input
            type="text"
            name=""
            id=""
            value={link}
            onChange={HandleLink}
            placeholder="Paste the link here"
            className="border border-gray-400 p-2 rounded-l-md flex-1"
          />

          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-r-md"
          >
            submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Home;
