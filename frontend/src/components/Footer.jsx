import React from 'react';
import { footerData } from '../Constants/footerData';
import Shortly from './Shortly';
import { IoLogoGithub, IoLogoInstagram, IoLogoLinkedin, IoLogoTwitter } from "react-icons/io";
import { CgWebsite } from "react-icons/cg";

const ListItem = ({ text, link, type }) => {
  const className = type === 1 ? 'text-white font-extrabold' : 'text-neutral-grayish-violet';

  return (
    <div className="font-bold py-0.5">
      <p className={className}>
        <a href={link ? link : '/'}>{text}</a>
      </p>
    </div>
  );
};

const SocialItem = ({ icon, link }) => {
  return (
    <div className="text-white text-xl
    hover:scale-105 transition-transform
    
    ">
      <a href={link} target="_blank" rel="noopener noreferrer">
        {icon}
      </a>
    </div>
  );
};

const LinkList = ({ data }) => {
  return (
    <div className="">
      <div className="">
        {data.title.map((item, index) => (
          <ListItem key={index} text={item.name} type={1} link={item.link} />
        ))}
      </div>
      <div className="mt-4">
        {data.items.map((item, index) => (
          <ListItem key={index} text={item.name} link={item.link} />
        ))}
      </div>
    </div>
  );
};

const Footer = () => {
  const { Topitems } = footerData;

  return (
    <div className="
    bg-neutral-very-dark-violet 
    min-w-full min-h-fit 
  
  
    ">

      {/* wrapper 2 */}

      <div className=" 
        flex
        justify-between
        p-16
      w-5/6 mx-auto">

     
      <div className="">
        {/* Assuming Shortly component renders a logo */}
        <Shortly mode={0} />
      </div>
      <div className="flex gap-28">
        {Topitems.map((data, index) => (
          <LinkList key={index} data={data} />
        ))}
        {/* Social media icons */}
        <div className="flex gap-6">
        <SocialItem icon={<IoLogoGithub />} link={"/github"} />
        {/* <SocialItem icon={<IoLogoInstagram />} link={"/instagram"} /> */}
        <SocialItem icon={<IoLogoLinkedin />} link={"/linkedin"} />
        <SocialItem icon={<IoLogoTwitter />} link={"/twitter"} />
        <SocialItem icon={<CgWebsite />} link={"/website"} />
        </div>
      </div> 
      </div>
    </div>
  );
};

export default Footer;
