import React from 'react'
import haircoloring from "..//Images//haircoloring.jpg";
import homepage from "..//Images//homepage.PNG";
import aboutpage from "..//Images//aboutpage.PNG";
import servicepage from "..//Images//serivicepage.PNG";
import contactpage from "..//Images//contactpage.PNG";

const ReactProject = () => {
  return (
    <>
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <img
            class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
            alt="hero"
            src={haircoloring}
          />
          <div class="text-center lg:w-2/3 w-full">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              GreenTrends Hair Revolution salon Using React js
            </h1>
            <p class="mb-8 leading-relaxed">
              An innovative farming method that makes the best use of both space
              and resources is vertical hydroponic farming. Plants are grown
              vertically in stacked layers as opposed to traditionally
              horizontal layouts, which is perfect for urban situations with
              limited space. When employing hydroponics, the plants receive
              precise amounts of nutrients and water, which leads to quicker
              development and greater yields than with conventional soil-based
              farming.GreenTrends Hair Revolution Salon is all about
              transforming ordinary hair into extraordinary styles. With a
              commitment to excellence in haircare and a dedication to staying
              ahead of the latest trends, this salon offers a wide range of
              services that cater to various hair types and preferences. Our
              goal with this website is to capture the essence of GreenTrends
              Hair Revolution Salon's brand and provide a user-friendly platform
              where clients can explore services, view stunning hair
              transformations, and get in touch with the salon effortlessly.
            </p>
            <div class="flex justify-center">
              <a href="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 448 512"
                  className="rounded-full w-5 h-5  mx-2 hover:scale-125 transition-all duration-500 cursor-pointer hover:bg-cyan-600 text-white"
                >
                  <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* <section class="text-gray-600  body-font scroll-smooth" id="/">
        <div class="container mx-auto flex px-20 py-2 md:flex-row flex-col items-center   relative top-16 ">
          <div class="lg: lg:w-64  lg:mx-2 pt-0 md:w-1/2 w-4/5 mb-10 md:mb-0">
            <img class=" " alt="hero" src={haircoloring} />
          </div>
          <div class="lg:flex-grow md:w-1/2 lg:pl-0 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center relative left-12">
            <h1 class="title-font sm: absolute right-12 text-4xl text-3xl mb-4 font-medium text-gray-900 ">
              GreenTrends Hair Revolution
              <br></br>salon Using React js
            </h1>
            <p class="mb-8 leading-relaxed sm:relative top-20">
              An innovative farming method that makes the best use of both space
              and resources is vertical hydroponic farming. Plants are grown
              vertically in stacked layers as opposed to traditionally
              horizontal layouts, which is perfect for urban situations with
              limited space. When employing hydroponics, the plants receive
              precise amounts of nutrients and water, which leads to quicker
              development and greater yields than with conventional soil-based
              farming.GreenTrends Hair Revolution Salon is all about
              transforming ordinary hair into extraordinary styles. With a
              commitment to excellence in haircare and a dedication to staying
              ahead of the latest trends, this salon offers a wide range of
              services that cater to various hair types and preferences. Our
              goal with this website is to capture the essence of GreenTrends
              Hair Revolution Salon's brand and provide a user-friendly platform
              where clients can explore services, view stunning hair
              transformations, and get in touch with the salon effortlessly.
            </p>
            <a href="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 448 512"
                className="rounded-full w-5 h-5  mx-2 hover:scale-125 transition-all duration-500 cursor-pointer hover:bg-cyan-600 text-white"
              >
                <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
              </svg>
            </a>
          </div>
        </div>
      </section> */}
      <br />
      <br />

      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -m-4">
            <div class="p-4 md:w-1/3">
              <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden hover:border-cyan-500 hover:scale-105 transition-all duration-500 cursor-pointer">
                <img
                  class="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={homepage}
                  alt="blog"
                />
                <div class="p-6">
                  {/* <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2> */}
                  <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                    Home Page
                  </h1>
                  <p class="leading-relaxed mb-3">
                    The Home page has a Gallery with pictures of the salon,
                    website information, and a button that leads to the contact
                    page.
                  </p>
                </div>
              </div>
            </div>
            <div class="p-4 md:w-1/3">
              <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden hover:border-cyan-500 hover:scale-105 transition-all duration-500 cursor-pointer">
                <img
                  class="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={aboutpage}
                  alt="blog"
                />
                <div class="p-6">
                  {/* <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    CATEGORY
                  </h2> */}
                  <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                    About Page
                  </h1>
                  <p class="leading-relaxed mb-3">
                    The website's about page includes details about the company,
                    our team, and the number of subscribers, as well as an
                    embedded film that describes how the salon is developing.
                  </p>
                </div>
              </div>
            </div>
            <div class="p-4 md:w-1/3">
              <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden hover:border-cyan-500 hover:scale-105 transition-all duration-500 cursor-pointer">
                <img
                  class="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={servicepage}
                  alt="blog"
                />
                <div class="p-6">
                  {/* <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    CATEGORY
                  </h2> */}
                  <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                    Service
                  </h1>
                  <p class="leading-relaxed mb-3">
                    The service page lists a number of salon treatments along
                    with their costs and makeup application instructions.
                  </p>
                </div>
              </div>
            </div>
            <div class="p-4 md:w-1/3">
              <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden hover:border-cyan-500 hover:scale-105 transition-all duration-500 cursor-pointer">
                <img
                  class="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={contactpage}
                  alt="blog"
                />
                <div class="p-6">
                  {/* <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    CATEGORY
                  </h2> */}
                  <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                    Contact Page
                  </h1>
                  <p class="leading-relaxed mb-3">
                    There is a map and contact form on the contact page so that
                    customers can get in touch.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br />
      <div class="flex justify-center">
        <a href="/">
          <button class="inline-flex text-white bg-cyan-500 border-0 py-2 px-6 focus:outline-none hover:bg-cyan-700 rounded text-lg">
            Go Back
          </button>
        </a>
        <a href="https://github.com/JafarSadiqAM/greentrends-Hair-revolution-salon-using-react-js">
          <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
            Get my project
          </button>
        </a>
      </div>
    </>
  );
}

export default ReactProject