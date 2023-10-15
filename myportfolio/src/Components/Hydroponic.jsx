import React from "react";
import model1 from "../Images//model1.jpg";
import Arduino from "../Images//Arduino uno.png";
import dht11 from "../Images//dht11.jpg";
import NodeMCU from "../Images//NodeMCU.jpg";
import ultrasonic from "../Images//ultrasonic.jpg";
import timer from "../Images//timer.jpg";
import buzzer from "../Images//buzzer.jpg";
import plant from "../Images//plant.jpg";
import plant2 from "../Images//plant2.jpeg";
import iot from "../Images//iot.jpeg";
import Footer from "..//Components//footer";

const Hydroponic = () => {
  return (
    <>
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:max-w-lg lg:w-28 md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              class="object-cover object-center rounded"
              alt="hero"
              src={plant2}
            />
          </div>
          <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Hydroponic Farming
              <br></br> System Using IOT
            </h1>
            <p class="mb-8 leading-relaxed">
              An innovative farming method that makes the best use of both space
              and resources is vertical hydroponic farming. Plants are grown
              vertically in stacked layers as opposed to traditionally
              horizontal layouts, which is perfect for urban situations with
              limited space. When employing hydroponics, the plants receive
              precise amounts of nutrients and water, which leads to quicker
              development and greater yields than with conventional soil-based
              farming.
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

      <section class="text-gray-600 body-font  ">
        <div class="container px-5 py-24 mx-auto">
          <div class="text-center mb-20">
            <h1 class="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">
              Materials used to make model.
            </h1>
          </div>
          <div class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2 ">
            <div class="p-2 sm:w-1/2 w-full">
              <div class="bg-gray-100 rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                  class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span class="title-font font-medium">
                  3 inch PVC water pipe
                </span>
              </div>
            </div>
            <div class="p-2 sm:w-1/2 w-full">
              <div class="bg-gray-100 rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                  class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span class="title-font font-medium">5 KG pickle box</span>
              </div>
            </div>
            <div class="p-2 sm:w-1/2 w-full">
              <div class="bg-gray-100 rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                  class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span class="title-font font-medium">Water pump motor</span>
              </div>
            </div>
            <div class="p-2 sm:w-1/2 w-full">
              <div class="bg-gray-100 rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                  class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span class="title-font font-medium">Hydroponic Cups</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="text-gray-600 body-font ">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-20">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              IOT Components used in Project.
            </h1>
          </div>
          <div class="flex flex-wrap -m-2">
            <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg hover:border-cyan-500 hover:scale-105 transition-all duration-500 cursor-pointer">
                <img
                  alt="team"
                  class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src={Arduino}
                />
                <div class="flex-grow">
                  <h2 class="text-gray-900 title-font font-medium">
                    Arduino uno
                  </h2>
                  <p class="text-gray-500">
                    Arduino Uno serves as the brain of the system. It collects
                    data from various sensors, processes it, and controls the
                    components accordingly.
                  </p>
                </div>
              </div>
            </div>
            <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg hover:border-cyan-500 hover:scale-105 transition-all duration-500 cursor-pointer">
                <img
                  alt="team"
                  class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src={dht11}
                />
                <div class="flex-grow">
                  <h2 class="text-gray-900 title-font font-medium">
                    DHT11 sensor
                  </h2>
                  <p class="text-gray-500">
                    The DHT11 sensor measures temperature and humidity levels
                    inside the hydroponic system. This data helps maintain
                    optimal conditions for plant growth.
                  </p>
                </div>
              </div>
            </div>
            <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg hover:border-cyan-500 hover:scale-105 transition-all duration-500 cursor-pointer">
                <img
                  alt="team"
                  class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src={NodeMCU}
                />
                <div class="flex-grow">
                  <h2 class="text-gray-900 title-font font-medium">Node MCU</h2>
                  <p class="text-gray-500">
                    NodeMCU is used for wireless communication and data
                    transmission. It connects the hydroponic system to the
                    internet, enabling remote monitoring and control.
                  </p>
                </div>
              </div>
            </div>
            <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg hover:border-cyan-500 hover:scale-105 transition-all duration-500 cursor-pointer">
                <img
                  alt="team"
                  class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src={ultrasonic}
                />
                <div class="flex-grow">
                  <h2 class="text-gray-900 title-font font-medium">
                    Ultrasonic Sensor
                  </h2>
                  <p class="text-gray-500">
                    Ultrasonic sensors are placed at different levels within the
                    vertical farming structure. They measure the water levels in
                    each layer, ensuring that plants receive an adequate supply
                    of the nutrient solution.
                  </p>
                </div>
              </div>
            </div>
            <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg hover:border-cyan-500 hover:scale-105 transition-all duration-500 cursor-pointer">
                <img
                  alt="team"
                  class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4 "
                  src={buzzer}
                />
                <div class="flex-grow">
                  <h2 class="text-gray-900 title-font font-medium">Buzzer</h2>
                  <p class="text-gray-500">
                    A buzzer can be used to provide audible alerts or
                    notifications when specific conditions, such as low water
                    levels or extreme temperatures, require immediate attention.
                  </p>
                </div>
              </div>
            </div>
            <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg hover:border-cyan-500 hover:scale-105 transition-all duration-500 cursor-pointer">
                <img
                  alt="team"
                  class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src={timer}
                />
                <div class="flex-grow">
                  <h2 class="text-gray-900 title-font font-medium">Timer</h2>
                  <p class="text-gray-500">
                    Integrate the timer into your hydroponic system. Place the
                    water pump in the water reservoir or nutrient solution
                    container. Attach the pump's output tubing to the hydroponic
                    distribution system or tubing that leads to your growing
                    containers. Ensure the tubing reaches all the plants.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <h1 class="sm:text-3xl text-2xl  text-center font-medium title-font mb-4 text-gray-900">
            Steps used to build the project.
          </h1> <br /> <br /> <br />
          <div class="flex flex-wrap -m-4">
            <div class="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div class="h-full text-center ">
                <img
                  alt="testimonial"
                  class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100 hover:border-cyan-500 hover:scale-105 transition-all duration-500 cursor-pointer"
                  src={plant}
                />
                <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">
                  STEP 1
                </h2>
                <p class="text-gray-500">Plant cultivation</p>
                <br />
                <p class="leading-relaxed text-left">
                  <h2>
                    1. Coco peat typically comes in compressed blocks or bags.
                    To prepare it for use, soak it in water until it expands and
                    becomes fluffy. You may need to add some water and let it
                    sit for a few hours.{" "}
                  </h2>
                  <br />
                  <h2>
                    2. Choose an appropriate container or hydroponic system for
                    your plants. Common choices include nutrient film technique
                    (NFT), deep water culture (DWC), and drip systems. Make sure
                    it is properly sanitized before use.{" "}
                  </h2>
                  <br />
                  <h2>
                    3. Fill your hydroponic system with coco peat. It provides
                    excellent aeration and water retention properties, making it
                    a suitable growing medium for many plants. Fill your
                    hydroponic system with coco peat. It provides excellent
                    aeration and water retention properties, making it a
                    suitable growing medium for many plants.
                  </h2>
                  <br />
                  <h2>
                    4. Plant your seeds or seedlings in the coco peat. You can
                    make small holes or pockets in the coco peat to accommodate
                    your plants. Ensure that the plants are adequately spaced.
                  </h2>
                  <br />
                  <h2>
                    5. Water and feed your plants regularly with the nutrient
                    solution. Hydroponic systems often use a recirculating
                    system, where the nutrient solution is pumped through the
                    growing medium and back to the reservoir.{" "}
                  </h2>
                  <br />
                  <h2>
                    6. Regularly monitor the pH and electrical conductivity (EC)
                    of the nutrient solution. Coco peat tends to have a neutral
                    pH, but adjustments may be needed depending on your specific
                    plants' requirements.{" "}
                  </h2>
                  <br />
                  <h2>
                    7. Provide adequate lighting and maintain the appropriate
                    temperature for the plants you are growing. Hydroponic
                    systems often require artificial lighting, such as grow
                    lights, to ensure plants receive sufficient light.{" "}
                  </h2>
                  <br />
                  <h2>
                    8. Regularly maintain and clean your hydroponic system to
                    prevent clogs and algae growth in the nutrient solution.
                  </h2>
                </p>
                <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
              </div>
            </div>
            <div class="lg:w-1/3 lg:mb-0 mb-8 p-4">
              <div class="h-full text-center">
                <img
                  alt="testimonial"
                  class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100 hover:border-cyan-500 hover:scale-105 transition-all duration-500 cursor-pointer"
                  src={model1}
                />
                <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">
                  STEP 2
                </h2>
                <p class="text-gray-500">Making model</p>
                <br />
                <p class="leading-relaxed text-left">
                  <h2>
                    1. Cut the 3-inch PVC pipe into sections of your desired
                    height, depending on the available space and the number of
                    plants you want to grow vertically. Make sure to cut evenly
                    and straight.
                  </h2>
                  <br />
                  <h2>
                    2. Cut the 3-inch PVC pipe into sections of your desired
                    height, depending on the available space and the number of
                    plants you want to grow vertically. Make sure to cut evenly
                    and straight.Using a drill and the appropriate-sized drill
                    bit, make holes evenly spaced along the length of the PVC
                    pipe to accommodate the hydroponic cups. These holes should
                    be large enough to securely hold the cups in place.Connect
                    the PVC pipe sections using PVC connectors and PVC cement to
                    create a vertical structure. Ensure it is stable and
                    securely fastened.
                  </h2>
                  <br />
                  <h2>
                    3. Place the 5 kg pickle box at the base of the PVC pipe
                    structure to serve as the water container. Make sure it is
                    level and stable.
                  </h2>
                  <br />
                  <h2>
                    4. Mount the 3-foot water pump motor inside the water
                    container. Secure it in place to ensure it won't move while
                    in operation.Attach tubing from the water pump motor to the
                    top of the PVC pipe structure. This will allow the
                    nutrient-rich water to be pumped to the top and flow down
                    through the hydroponic cups.
                  </h2>
                  <br />
                  <h2>
                    5. Place the hydroponic cups into the holes you created in
                    the PVC pipe. Each cup should securely hold a plant or
                    growing medium. Ensure they are evenly spaced and stable.
                  </h2>
                  <br />
                  <h2>
                    6. Connect the water pump motor to a power source and turn
                    it on. This will start the circulation of the nutrient
                    solution through the hydroponic system.
                  </h2>
                  <br />
                  <h2>
                    7. Regularly monitor the water levels in the pickle box and
                    the overall health of your plants. Ensure that the nutrient
                    solution is well-balanced and that the water pump is
                    functioning correctly.
                  </h2>
                </p>
                <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
              </div>
            </div>
            <div class="lg:w-1/3 lg:mb-0 p-4">
              <div class="h-full text-center">
                <img
                  alt="testimonial"
                  class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100 hover:border-cyan-500 hover:scale-105 transition-all duration-500 cursor-pointer"
                  src={iot}
                />
                <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">
                  STEP 3
                </h2>
                <p class="text-gray-500">Connecting to IOT</p>
                <br />
                <p class="leading-relaxed text-left">
                  <h2>
                    1. You can begin by connecting the ultrasonic sensor and
                    buzzer to your Arduino Uno. The ultrasonic sensor consists
                    of three pins: VCC (for power), GND (for ground), TRIG (for
                    triggering the sensor), and ECHO (for receiving the
                    reflected signal). Connect the VCC and GND pins of the
                    ultrasonic sensor to the 5V and GND pins on the Arduino Uno,
                    respectively. Attach the TRIG pin to a digital pin on the
                    Arduino (e.g., Pin 7) and connect the ECHO pin to another
                    digital pin (e.g., Pin 8). The buzzer can be connected to a
                    digital pin (e.g., Pin 9) and one of the GND pins on the
                    Arduino. Next, program the Arduino Uno to read distance data
                    from the ultrasonic sensor. By sending a pulse from the TRIG
                    pin and measuring the time it takes for the ECHO signal to
                    return, you can calculate the distance. Set a threshold for
                    distance, and when the calculated distance crosses this
                    threshold, trigger the buzzer to sound an alert.
                  </h2>
                  <br />
                  <h2>
                    2. The DHT11 sensor has three pins: VCC, GND, and DATA.
                    Connect the VCC pin to the 3.3V output on the NodeMCU, the
                    GND pin to one of the NodeMCU's GND pins, and the DATA pin
                    to a digital pin on the NodeMCU (e.g., D1). To enable
                    communication with Blynk, you'll need to program the NodeMCU
                    using the Arduino IDE with the ESP8266 board support
                    package. Incorporate the Blynk library and provide your
                    Wi-Fi credentials along with the Blynk authentication token.
                    The NodeMCU will read temperature data from the DHT11 sensor
                    and send it to the Blynk server for remote monitoring. In
                    the Blynk mobile app, create a Blynk project and obtain the
                    authentication token. Set up a display widget in the Blynk
                    app to visualize the water temperature data received from
                    the NodeMCU. By integrating your NodeMCU with Blynk, you can
                    conveniently monitor the water temperature on your mobile
                    device and receive alerts or notifications as needed.
                  </h2>
                </p>
                <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div class="flex justify-center">
          <a href="/">
            <button class="inline-flex text-white bg-cyan-500 border-0 py-2 px-6 focus:outline-none hover:bg-cyan-700 rounded text-lg">
              Go Back
            </button>
          </a>
          <a href="https://github.com/JafarSadiqAM/Hydroponic-farming-system-Using-IOT">
            <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
              Get my project
            </button>
          </a>
        </div>
      </section>
    </>
  );
};

export default Hydroponic;
