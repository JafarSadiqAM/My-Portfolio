// import React from "react";
import React, { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser"; 
import axios from 'axios';
// import { SimpleTypewriter } from "react-simple-typewriter";
// import About from "../Components/AboutUs"
import my_photo from "../Images/my_photo.png";
import react_icon from "../Images/React-icon.png";
import ml from "../Images/ml-icon.jpg";
import hpf from "../Images/hpf.PNG";




const PDF_FILE_URL = "http://localhost:3000/Jafar Sadiq A M.pdf";
const Home = () => {

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_lx267no",
        "template_my2q3wf",
        form.current,
        "xSt8Y8CRZ5oAIC6gE"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
      e.target.reset()
  };



  const DownloadPdf=(url)=>{
    const fileName=url.split('/').pop();
    const aTag=document.createElement('a');
    aTag.href=url;
    aTag.setAttribute("download", fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();

  }
    






  const phrases = ["Jafar Sadiq A M", "Web Designer", "Developer"];
  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (charIndex < phrases[phraseIndex].length) {
        setText((prevText) => prevText + phrases[phraseIndex][charIndex]);
        setCharIndex((prevCharIndex) => prevCharIndex + 1);
      } else {
        // Delay before clearing the text and moving to the next phrase
        setTimeout(() => {
          setCharIndex(0);
          setText("");
          setPhraseIndex(
            (prevPhraseIndex) => (prevPhraseIndex + 1) % phrases.length
          );
        }, 1500); // Adjust the delay as needed
      }
    }, 100); // Typing speed (adjust as needed)

    return () => clearInterval(typingInterval);
  }, [charIndex, phraseIndex]);

  return (
    <>
      <section class="text-gray-600  body-font scroll-smooth" id="/">
        <div class="container mx-auto flex px-20 py-2 md:flex-row flex-col items-center left-5">
          <div class="lg:max-w-lg lg:w-30 lg:mx-2 pt-0 md:w-1/2 w-4/5 mb-10 md:mb-0">
            <img class=" " alt="hero" src={my_photo} />
          </div>
          <div class="lg:flex-grow md:w-1/2 lg:pl-0 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              I'M
              <div className="typewriter">
                <h1 style={{ fontWeight: "bold", color: "darkcyan" }}>
                  {text}
                  <span className="cursor">|</span>
                </h1>
              </div>
            </h1>
            <p class="mb-8 w-full ">
              Welcoming you to my online portfolio! I'm Jafar Sadiq A. M., a
              dedicated web Developer who delights in building beautiful and
              easy-to-use websites. I'm an expert at transforming concepts into
              gorgeously styled, adaptable, and useful web experiences.
            </p>
            <div class="flex justify-center">
              <button
                onClick={() => {
                  DownloadPdf(PDF_FILE_URL);
                }}
                class="inline-flex text-white bg-red-600 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              >
                Resume
                <a class="ml-3 text-white " href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 512 512"
                    class="w-5 h-5 mx-2 relative top-1.8 right-3.5 "
                  >
                    <path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
                  </svg>
                </a>
              </button>
              {/* <h3 className="cursor-pointer" id="/contact">
                contact
              </h3> */}
            </div>
            <br />
            <div class="flex justify-center">
              <span class="inline-flex sm:ml-auto sm:mt-0 mt-6 justify-center sm:justify-start">
                <a
                  class="text-gray-700"
                  href="https://www.facebook.com/profile.php?id=61552564853064"
                >
                  <svg
                    fill="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width=""
                    class="w-5 h-5  mx-2 hover:scale-125 transition-all duration-500 cursor-pointer hover:bg-blue-600 hover:text-white"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>
                </a>
                <a
                  class="ml-3 text-gray-700"
                  href="https://twitter.com/sadiq_m50698"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    class="w-5 h-5  mx-2 hover:scale-125 transition-all duration-500 cursor-pointer"
                    viewBox="0 0 448 512"
                  >
                    <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm297.1 84L257.3 234.6 379.4 396H283.8L209 298.1 123.3 396H75.8l111-126.9L69.7 116h98l67.7 89.5L313.6 116h47.5zM323.3 367.6L153.4 142.9H125.1L296.9 367.6h26.3z" />
                  </svg>
                </a>
                <a
                  class="ml-3 text-gray-700 "
                  href="https://www.instagram.com/i.m.jafu/?next=%2F"
                >
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-5 h-5 mx-2 hover:scale-125 transition-all duration-500 cursor-pointer hover:text-pink-700"
                    viewBox="0 0 24 24"
                  >
                    <rect
                      width="20"
                      height="20"
                      x="2"
                      y="2"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                  </svg>
                </a>
                <a
                  class="ml-3 text-gray-700"
                  href="https://www.linkedin.com/in/jafar-sadiq-a-m-a98bb0215/"
                >
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="0"
                    class="w-5 h-5 mx-2 hover:scale-125 transition-all duration-500 cursor-pointer hover:bg-blue-600 hover:text-white"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="none"
                      d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                    ></path>
                    <circle cx="4" cy="4" r="2" stroke="none"></circle>
                  </svg>
                </a>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* <About></About> */}

      <section class="text-gray-600 body-font" id="about">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap w-full mb-20 flex-col items-center text-center">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              About Me
            </h1>
            <p class="lg:w-1/2 w-full leading-relaxed text-gray-500">
              Chasing Dreams and Making Memories
            </p>
          </div>
          <div class="lg:flex flex-wrap -m-4 ">
            <div class="xl:w-1/3 md:w-1/2 p-4">
              <div class="border border-gray-200 p-6 rounded-lg hover:border-cyan-500 border hover:scale-105 transition-all duration-500 cursor-pointer hover:bg-white ">
                <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 640 512"
                  >
                    <path d="M337.8 5.4C327-1.8 313-1.8 302.2 5.4L166.3 96H48C21.5 96 0 117.5 0 144V464c0 26.5 21.5 48 48 48H592c26.5 0 48-21.5 48-48V144c0-26.5-21.5-48-48-48H473.7L337.8 5.4zM256 416c0-35.3 28.7-64 64-64s64 28.7 64 64v96H256V416zM96 192h32c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H96c-8.8 0-16-7.2-16-16V208c0-8.8 7.2-16 16-16zm400 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H512c-8.8 0-16-7.2-16-16V208zM96 320h32c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H96c-8.8 0-16-7.2-16-16V336c0-8.8 7.2-16 16-16zm400 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H512c-8.8 0-16-7.2-16-16V336zM232 176a88 88 0 1 1 176 0 88 88 0 1 1 -176 0zm88-48c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H336V144c0-8.8-7.2-16-16-16z" />
                  </svg>
                </div>
                <h2 class="text-lg text-gray-900 font-medium title-font mb-2 ">
                  EDUCATION
                </h2>
                <p class="leading-relaxed text-base">
                  <b>Bachelor of Computer Application </b>
                  <h3>
                    Bangalore University /
                    <a
                      href="https://www.sfgc.ac.in/"
                      className="text-blue-600 underline"
                    >
                      <b>SFGC</b>
                    </a>
                    , <br />
                    Yelahanka Bangalore-64.
                  </h3>
                  <b>Master of Computer Application </b>
                  <h3>
                    VTU/
                    <a
                      href="https://drait.edu.in/"
                      className="text-blue-600 underline"
                    >
                      <b>Dr.AIT</b>
                    </a>
                    , Outer ring road Mallathahalli, <br />
                    Bangalore.
                  </h3>
                </p>
              </div>
            </div>
            <div class="xl:w-1/3 md:w-1/2 p-4">
              <div class="border border-gray-200 p-6 rounded-lg hover:border-cyan-500 border hover:scale-105 transition-all duration-500 cursor-pointer hover:bg-white ">
                <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 512 512"
                  >
                    <path d="M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64V400c0 44.2 35.8 80 80 80H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H80c-8.8 0-16-7.2-16-16V64zm406.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L320 210.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L240 221.3l57.4 57.4c12.5 12.5 32.8 12.5 45.3 0l128-128z" />
                  </svg>
                </div>
                <h2 class="text-lg text-gray-900 font-medium title-font mb-2">
                  SKILLS
                </h2>
                <p class="leading-relaxed text-base">
                  <h3>
                    <a>
                      <span class="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="3"
                          class="w-3 h-3"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20 6L9 17l-5-5"></path>
                        </svg>
                      </span>
                      Learning React JS ,node JS
                    </a>
                  </h3>
                  <h3>
                    <a>
                      <span class="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="3"
                          class="w-3 h-3"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20 6L9 17l-5-5"></path>
                        </svg>
                      </span>
                      Learning Machine Learning
                    </a>
                  </h3>
                  <h3>
                    <a>
                      <span class="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="3"
                          class="w-3 h-3"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20 6L9 17l-5-5"></path>
                        </svg>
                      </span>
                      Learning python ,java programming languages
                    </a>
                  </h3>
                  <h3>
                    <a>
                      <span class="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="3"
                          class="w-3 h-3"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20 6L9 17l-5-5"></path>
                        </svg>
                      </span>
                      Knowledge of Photoshop and Illustrator
                    </a>
                  </h3>
                  <h3>
                    <a>
                      <span class="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="3"
                          class="w-3 h-3"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20 6L9 17l-5-5"></path>
                        </svg>
                      </span>
                      User friendly,courteous and service oriented
                    </a>
                  </h3>{" "}
                  <br />
                </p>
              </div>
            </div>
            <div class="xl:w-1/3 md:w-1/2 p-4">
              <div class="border border-gray-200 p-6 rounded-lg hover:border-cyan-500 border hover:scale-105 transition-all duration-500 cursor-pointer hover:bg-white ">
                <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 512 512"
                  >
                    <path d="M184 48H328c4.4 0 8 3.6 8 8V96H176V56c0-4.4 3.6-8 8-8zm-56 8V96H64C28.7 96 0 124.7 0 160v96H192 320 512V160c0-35.3-28.7-64-64-64H384V56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56zM512 288H320v32c0 17.7-14.3 32-32 32H224c-17.7 0-32-14.3-32-32V288H0V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V288z" />
                  </svg>
                </div>
                <h2 class="text-lg text-gray-900 font-medium title-font mb-2">
                  WORK EXPERIENCE
                </h2>
                <p class="leading-relaxed text-base">
                  <h2>
                    <b>
                      <a
                        href="https://dwordcore.com/"
                        className="text-blue-600 underline"
                      >
                        D Core Word
                      </a>{" "}
                      , papreddy palya , Bangalore
                    </b>
                  </h2>
                  <h3>Worked as intern as a web Developer </h3> <br />
                </p>
              </div>
            </div>
            <div class="xl:w-1/3 md:w-1/2 p-4">
              <div class="border border-gray-200 p-6 rounded-lg hover:border-cyan-500 border hover:scale-105 transition-all duration-500 cursor-pointer hover:bg-white ">
                <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 512 512"
                  >
                    <path d="M0 192c0-35.3 28.7-64 64-64c.5 0 1.1 0 1.6 0C73 91.5 105.3 64 144 64c15 0 29 4.1 40.9 11.2C198.2 49.6 225.1 32 256 32s57.8 17.6 71.1 43.2C339 68.1 353 64 368 64c38.7 0 71 27.5 78.4 64c.5 0 1.1 0 1.6 0c35.3 0 64 28.7 64 64c0 11.7-3.1 22.6-8.6 32H8.6C3.1 214.6 0 203.7 0 192zm0 91.4C0 268.3 12.3 256 27.4 256H484.6c15.1 0 27.4 12.3 27.4 27.4c0 70.5-44.4 130.7-106.7 154.1L403.5 452c-2 16-15.6 28-31.8 28H140.2c-16.1 0-29.8-12-31.8-28l-1.8-14.4C44.4 414.1 0 353.9 0 283.4z" />
                  </svg>
                </div>
                <h2 class="text-lg text-gray-900 font-medium title-font mb-2">
                  INTEREST
                </h2>
                <p class="leading-relaxed text-base">
                  <h3>
                    <a>
                      <span class="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="3"
                          class="w-3 h-3"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20 6L9 17l-5-5"></path>
                        </svg>
                      </span>
                      Writting stories
                    </a>
                  </h3>
                  <h3>
                    <a>
                      <span class="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="3"
                          class="w-3 h-3"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20 6L9 17l-5-5"></path>
                        </svg>
                      </span>
                      Cooking
                    </a>
                  </h3>
                  <h3>
                    <a>
                      <span class="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="3"
                          class="w-3 h-3"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20 6L9 17l-5-5"></path>
                        </svg>
                      </span>
                      Travelling
                    </a>
                  </h3>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECT SECTION */}

      <section class="text-gray-600 body-font" id="project">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-20">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Project
            </h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
              Projects that Define Me: My Creative Journey.
            </p>
          </div>
          <div class="flex flex-wrap -m-2">
            <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
              <a href="/reactproject">
                <div class="h-full flex items-center bg-cyan-500 border-gray-200 border p-4 rounded-lg hover:border-cyan-700 hover:scale-105 transition-all duration-500 cursor-pointer">
                  <img
                    alt="team"
                    class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                    src={react_icon}
                  />
                  <div class="flex-grow">
                    <h2 class="text-gray-900 title-font font-medium">
                      React JS Project
                    </h2>
                    <p class="text-gray-500">Hair Revolution salon</p>
                  </div>
                </div>
              </a>
            </div>
            <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
              <a href="/machinelearning">
                <div class="h-full flex items-center bg-cyan-500 border-gray-200 border p-4 rounded-lg hover:border-cyan-700 hover:scale-105 transition-all duration-500 cursor-pointer">
                  <img
                    alt="team"
                    class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                    src={ml}
                  />
                  <div class="flex-grow">
                    <h2 class="text-gray-900 title-font font-medium">
                      Machine Learning Project
                    </h2>
                    <p class="text-gray-500">
                      Car price prediction using Linear Regression
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <div class="p-2 lg:w-1/3 md:w-1/2 w-full ">
              <a href="/hydroponic">
                <div class="h-full flex items-center bg-cyan-500 border-gray-200 border p-4 rounded-lg hover:border-cyan-700 hover:scale-105 transition-all duration-500 cursor-pointer">
                  <img
                    alt="team"
                    class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                    src={hpf}
                  />
                  <div class="flex-grow">
                    <h2 class="text-gray-900 title-font font-medium">
                      Internet Of Things Project
                    </h2>
                    <p class="text-gray-500">Hydroponic Farming system</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* contact me */}

      <section class="text-gray-600 body-font relative" id="contact">
        <div className="text-center">
          <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
            Contact Me
          </h1>
          <p class="lg:w-1/2 w-full leading-relaxed text-gray-500">
            Your Thoughts Matter - Contact Me.
          </p>
        </div>
        <div class="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
          <div class="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe
              width="100%"
              height="100%"
              class="absolute inset-0"
              frameborder="0"
              title="map"
              marginheight="0"
              marginwidth="0"
              scrolling="no"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15543.90022037961!2d77.5975784!3d13.1007668!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae19af3201f28f%3A0x4b6a1db177982696!2sS.M%20cooks!5e0!3m2!1sen!2sin!4v1679426328705!5m2!1sen!2sin"
            ></iframe>
            <div class="bg-white relative flex flex-wrap py-6 rounded shadow-md">
              <div class="lg:w-1/2 px-6">
                <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  ADDRESS
                </h2>
                <p class="mt-1">
                  old town, No.1041, hosa beedi, Hosabeedhi, Gandhi Nagar,
                  Yelahanka, Bengaluru, Karnataka 560064
                </p>
              </div>
              <div class="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  EMAIL
                </h2>
                <a class="text-indigo-500 leading-relaxed">
                  jafarsadiq.in7860@gmail.com
                </a>
                <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                  PHONE
                </h2>
                <p class="leading-relaxed">+91 9164525916</p>
              </div>
            </div>
          </div>
          <div class="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            {/* <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">
              Feedback
            </h2>
            <p class="leading-relaxed mb-5 text-gray-600">
              Post-ironic portland shabby chic echo park, banjo fashion axe
            </p> */}
            <form ref={form} onSubmit={sendEmail}>
              <div class="relative mb-4">
                <label for="name" class="leading-7 text-sm text-gray-600">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="user_name"
                  class="w-full bg-white rounded border border-gray-300 focus:border-cyan-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div class="relative mb-4">
                <label for="email" class="leading-7 text-sm text-gray-600">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="user_email"
                  class="w-full bg-white rounded border border-gray-300 focus:border-cyan-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div class="relative mb-4">
                <label for="text" class="leading-7 text-sm text-gray-600">
                  Subject
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  class="w-full bg-white rounded border border-gray-300 focus:border-cyan-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div class="relative mb-4">
                <label for="message" class="leading-7 text-sm text-gray-600">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  class="w-full bg-white rounded border border-gray-300 focus:border-cyan-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
              <div class="relative mb-4 text-center">
                <button class="text-white bg-cyan-500 border-0 py-2 px-6 focus:outline-none hover:bg-cyan-700 rounded text-lg">
                  Send Message
                </button>
              </div>
            </form>
            {/* <p class="text-xs text-gray-500 mt-3">
              Chicharrones blog helvetica normcore iceland tousled brook viral
              artisan.
            </p> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
