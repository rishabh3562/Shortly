import React from 'react'
import Shortly from './Shortly'
import { footerData } from '../Constants/footerData'

const Topitem=({text,link})=>{
  return(<>
  
  </>)
}
const ListItem=({text,link,type})=>{
  return(
    <> {(type===1)?(
      <>
      <div className="font-bold">
    <p className="text-white 
    
    font-extrabold
    ">
   <a href={link?link:"/"}>{text}</a>   
    </p>
  </div>
      </>
      ):(
        
        <>
 <div className="font-bold py-0.5 hover:scale-105 transition-transform">
    <p className="text-neutral-grayish-violet
    

    ">
   <a href={link?link:"/"}>{text}</a>   
    </p>
  </div>
        </>
    )}
    
    </>
  )
}
const SocialItem=()=>{

}

const LinkList=({data})=>{
  return(<>
   <div className="">

    <div className="">

  <ListItem text={"Features"} type={1} link={"/"}/>
    </div>
<div className=" mt-4">
<ListItem text={"Features"} link={"/"}/>
<ListItem text={"Features"} link={"/"}/>
<ListItem text={"Features"} link={"/"}/>

</div>
  </div>
  
  </>)
}
const Footer = () => {
  return (
  <>
  {/* bg */}

  <div className="
  bg-neutral-very-dark-violet
  min-w-full
  min-h-fit

  p-4

  
  ">


  {/* logo */}
  <div className="">
    <Shortly mode={0}/>
  </div>

  {/* right ka content */}
  <div className=" flex gap-4">
  {/* fetures */}
 
<LinkList data={footerData[0]}/>
{/* <LinkList/>
<LinkList/> */}


  
  {/* links */}
  <div className="flex">
  <ListItem text={"LINKS"} type={1} link={"/"}/>
  <ListItem text={"LINKS"} type={1} link={"/"}/>
  <ListItem text={"LINKS"} type={1} link={"/"}/>
  <ListItem text={"LINKS"} type={1} link={"/"}/>


    {/* <div className=""></div>
    <div className=""></div>
    <div className=""></div>
    <div className=""></div> */}
  </div>
  </div>
  </div>
  </>
  )
}

export default Footer