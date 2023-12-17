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
             font-extrabold text-3xl
  text-white

  
          "
          >
            Shortly
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