import React,{useState} from 'react'

const LinkInfoTab = () => {
    const [isCopied,setIsCopied]=useState(false)
    const toggleIsCopied=()=>{
        setIsCopied(!isCopied)
    }
  return (<>
  
  {/* Main div */}

<div className="flex justify-between
 w-3/4 mx-auto
 bg-white
 py-3 px-4 rounded-md 
 my-4
">
     {/* left content */}
    <div className="">
        <p className="text-base font-semibold">
            https://left.com
        </p>
    </div>
      {/* right content */}
    <div className="flex gap-4">
        {/* in right 
  content give 2 dive one for text and one for button */}
  
        <div className="">
            <p className='
            font-semibold
            text-teal-400
            '>
                Https://shortly
            </p>
        </div>
        <div className="">

    
    {isCopied?(<>
        <button 
            onClick={toggleIsCopied}
            
            className='bg-primary-dark-violet py-1 px-4 rounded-sm
            
        text-white
        transition-all
            '
            >
        Copied!
    </button>
    </>):(<>
        <button 
            onClick={toggleIsCopied}
            className='
            bg-teal-300 py-1 px-7 rounded-sm
            flex ali
        text-white
        transition-all
            '
            >
        copy
    </button>
    
    </>)}
    
   
    
        </div>
    </div>
</div>

 

  
  </>
  )
}

export default LinkInfoTab