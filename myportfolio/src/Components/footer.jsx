import React from 'react'
import logo from "../Images//logo2.PNG";

const footer = () => {
  return (
    <>
      <footer class="text-gray-600 body-font">
        <div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <img
              class="w-12 h-12 text-white  rounded-full hover:bg-cyan-500"
              src={logo}
              alt=""
            />
            <span class="ml-3 text-xl">Jafar Sadiq A M</span>
          </a>
          <p class="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © 2023 Jafar Sadiq A M
          </p>
          <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
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
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
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
      </footer>
    </>
  );
}

export default footer