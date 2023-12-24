import React from 'react';
import { footerData } from '../Constants/footerData';
import Shortly from './Shortly';
import { IoLogoGithub, IoLogoLinkedin, IoLogoTwitter } from 'react-icons/io';
import { CgWebsite } from 'react-icons/cg';

const ListItem = ({ text, link, type }) => {
  const className = type === 1 ? 'text-white font-extrabold mb-5 xl:mb-4' : 'text-neutral-grayish-violet mb-3 xl:mb-2';

  return (
    <div className="font-bold">
      <p className={className}>
        <a href={link ? link : '/'}>{text}</a>
      </p>
    </div>
  );
};

const SocialItem = ({ icon, link, grid }) => {
  const baseStyle = 'text-white text-xl hover:scale-105 flex justify-center item-center lg:justify-start xl:items-start transition-transform ';
  return (
    <div className={grid ? `${grid} ${baseStyle}` : `${baseStyle}`}>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className='flex justify-center xl:justify-start items-center xl:items-start'
      >
        {icon}
      </a>
    </div>
  );
};

const LinkList = ({ data }) => {
  return (
    <div className="min-w-fit lg:col-span-1 xl:col-span-1">
      {data.title.map((item, index) => (
        <ListItem key={index} text={item.name} type={1} link={item.link} />
      ))}
      {data.items.map((item, index) => (
        <ListItem key={index} text={item.name} link={item.link} />
      ))}
    </div>
  );
};

const Footer = () => {
  const { Topitems } = footerData;

  return (
    <div className="bg-neutral-very-dark-violet min-w-full min-h-fit">
      {/* Grid wrapper */}
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:p-8 md:p-16 p-8 w-5/6 mx-auto">
        <div className="flex mr-0 sm:mr-8 lg:pl-20 justify-center items-center sm:justify-start sm:items-start">
          {/* Assuming Shortly component renders a logo */}
          <Shortly mode={0} />
        </div>
        <div className="grid xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 xs:grid-rows-2 gap-4 xs:gap-2 sm:gap-4 md:gap-8 text-center lg:text-left">
          {Topitems.map((data, index) => (
            <LinkList key={index} data={data} />
          ))}
          {/* Social media icons */}
          <div className="grid md:col-span-1 lg:col-span-3 xl:col-span-1 grid-cols-4 xs:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 grid-rows-1 xs:grid-rows-2 lg:grid-rows-2 xs:gap-4 md:gap-6 lg:gap-8 xl:gap-16 min-w-fit">
            <SocialItem icon={<IoLogoGithub />} link="/github" grid="col-span-1" />
            <SocialItem icon={<IoLogoLinkedin />} link="/linkedin" />
            <SocialItem icon={<IoLogoTwitter />} link="/twitter" />
            <SocialItem icon={<CgWebsite />} link="/website" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
