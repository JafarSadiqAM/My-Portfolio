import { useState } from "react";
import "./Navbar.css";  
import { Link, NavLink } from "react-router-dom";

// import { Link ,useLocation} from "react-router-dom";
// import {Link} from "react-scroll"
import logo from "../Images//logo.PNG"
// import { NavHashLink as Link } from "react-router-hash-link";
const NavBar = () => {
  const [activeTab, setActiveTab] = useState(1); // set initial active tab

  // const handleTabClick = (tabIndex) => {
  //   setActiveTab(tabIndex);
  // };

  // const location = useLocation();

  // function isActiveTab(tabPath) {
  //   return location.pathname === tabPath;
  // }
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav>
      <img
            class="w-12 h-12 text-white  rounded-full hover:bg-cyan-500"
            src={logo}
            alt=""
          />
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <a
            class="  mr-3  hover:bg-cyan-700 hover:text-white  rounded  scroll-smooth"
            activeClass="active"
            href="/#"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Home
          </a>
        </li>
        <li>
          <a
            class="mr-3  hover:bg-cyan-700 hover:text-white  rounded scroll-smooth "
            activeClass="active"
            href="/#about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            About Me
          </a>
        </li>
        <li>
          <a
            class="mr-4  hover:bg-cyan-700 hover:text-white  rounded scroll-smooth "
            activeClass="active"
            href="/#project"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Project
          </a>
        </li>
        <li>
          <a
            class="mr-3 hover:bg-cyan-700 hover:text-white rounded scroll-smooth"
            activeClass="active"
            href="/#contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Contact Me
          </a>
        </li>
      </ul>
    </nav>

    // <header class="text-gray-600 body-font fixed w-full">
    //   <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    //     <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 absolute left-2 top-4">
    //       <img
    //         class="w-12 h-12 text-white p-1 bg-indigo-500 rounded-full hover:bg-cyan-500"
    //         src={logo}
    //         alt=""
    //       />
    //       <span class="relative left-2">Jafar Sadiq A M</span>
    //     </a>
    //     <nav class="md:ml-auto md:flex flex-wrap items-center text-base justify-center bg-gray-100 rounded pl-2 pr-2 pt-2 pb-2 sm:pl-6 ml-96 sm:inline-grid absolute right-2 top-4">
    //       <a
    //         class="  mr-3  hover:bg-cyan-700 hover:text-white  rounded  scroll-smooth"
    //         activeClass="active"
    //         href="/#"
    //         spy={true}
    //         smooth={true}
    //         offset={-70}
    //         duration={500}
    //       >
    //         Home
    //       </a>
    //       <a
    //         class="mr-3  hover:bg-cyan-700 hover:text-white  rounded scroll-smooth "
    //         activeClass="active"
    //         href="/#about"
    //         spy={true}
    //         smooth={true}
    //         offset={-70}
    //         duration={500}
    //       >
    //         About Me
    //       </a>
    //       <a
    //         class="mr-4  hover:bg-cyan-700 hover:text-white  rounded scroll-smooth "
    //         activeClass="active"
    //         href="/#project"
    //         spy={true}
    //         smooth={true}
    //         offset={-70}
    //         duration={500}
    //       >
    //         Project
    //       </a>
    //       <a
    //         class="mr-3 hover:bg-cyan-700 hover:text-white rounded scroll-smooth"
    //         activeClass="active"
    //         href="/#contact"
    //         spy={true}
    //         smooth={true}
    //         offset={-70}
    //         duration={500}
    //       >
    //         Contact Me
    //       </a>
    //     </nav>

    //   </div>
    // </header>
  );
};

export default NavBar;
