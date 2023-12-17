import React from "react";

const Shortly = ({mode}) => {
    return (
      <>
        {(mode===0)?(
           <>
           <div 
        className="flex align-middle
         justify-center ">
          <p
            className="flex 
            align-middle 
            justify-center
             font-extrabold text-4xl
  text-white

  
          "
          >
        <a href="/">
            
               Shortly
            </a> 
          </p>
          
        </div>
           </> 
        ):(<>
        <div 
        className="flex align-middle
         justify-center ">
          <p
            className="flex align-middle justify-center font-extrabold text-2xl
  
          "
          >
            Shortly
          </p>
          
        </div>
        </>)}
      </>
    );
  };

  export default Shortly;