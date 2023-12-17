import React from "react";
import Shortly from "./Shortly";
const NavLinkItems = ({ title, link }) => {
  return (
    <>
      <li className="">
        <a
          className="text-sm text-neutral-grayish-violet
      hover:text-neutral-very-dark-violet  
      font-semibold hover:text-base transition-all
       hover:font-bold"
          href={link ? link : "/"}
        >
          {title}
        </a>
      </li>
    </>
  );
};



const Header = () => {
  return (
    <>
      <header className="bg-white w-5/6 mx-auto">
        <div className="
        mx-auto flex h-16 items-center gap-8 ">
          {/* Shortly */}

          <div
            className="flex items-center w-full justify-between" >
            {/* left shortly logo + navlinks */}
            <div className="flex md:justify-start gap-6"  >
              <Shortly />
              <nav
                aria-label="Global"
                className="hidden md:block my-auto " >
                <ul
                  className="flex items-center gap-6 text-sm  ">
                  <NavLinkItems title={"Features"} link={"/"} />
                  <NavLinkItems title={"Pricing"} link={"/"} />
                  <NavLinkItems title={"Resources"} link={"/"} />
                  {/* <NavLinkItems title={"Pricing"} link={'/'}/> */}
                </ul>
              </nav>
            </div>

            {/* Right login and signups */}
            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4">
                <a
                  className="block text-neutral-grayish-violet  px-5 py-2.5 text-sm font-semibold  transition hover:text-gray-500"
                  href="/"
                >
                  Login
                </a>

                <a
                  className="hidden rounded-full bg-teal-300 px-5 py-2.5 text-sm font-semibold text-gray-100 transition hover:text-teal-600/75 sm:block"
                  href="/"
                >
                  Register
                </a>
              </div>

              <button className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden">
                <span className="sr-only">Toggle menu</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
