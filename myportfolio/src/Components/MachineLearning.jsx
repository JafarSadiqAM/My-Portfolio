import React from 'react'
import ml from "../Images/ml-icon.jpg";


const MachineLearning = () => {
  return (
    <>
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              class="object-cover object-center rounded"
              alt="hero"
              src={ml}
            />
          </div>
          <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Car Price prediction
              <br></br> Using Linear Regression.
            </h1>
            <p class="mb-8 leading-relaxed">
              Predicting car prices using Linear Regression is a common machine
              learning project that aims to estimate the price of a car based on
              various features or attributes. Linear Regression is a supervised
              learning algorithm that establishes a linear relationship between
              input variables (in this case, car features) and the target
              variable (car price). Here's a step-by-step explanation of how to
              create a car price prediction project using Linear Regression
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

      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          {/* <img class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600"> */}
          <div class="text-center lg:w-2/3 w-full">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Step by Step process of car price prediction using Linear
              Regression
            </h1>
            <h1>
              <b>Step 1: Import Necessary Libraries</b>
            </h1>
            <p>
              Begin by importing the required libraries, including pandas for
              data handling, scikit-learn for building the Linear Regression
              model, Gradio for creating the web interface, and any other
              libraries you may need.
            </p>
            <br />
            <div class="p-2 lg:w-full md:w-1/2 w-full">
              <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg hover:border-cyan-500 hover:scale-105 transition-all duration-500 cursor-pointer ">
                <div class="flex-grow ">
                  <p class="text-gray-900 title-font font-medium ">
                    import pandas as pd <br />
                    import numpy as np <br />
                    from sklearn.model_selection import train_test_split <br />
                    from sklearn.linear_model import LinearRegression <br />
                    import gradio as gr
                  </p>
                </div>
              </div>
            </div>
            <br />
            <h1>
              <b>Step 2: Load the Dataset</b>
            </h1>
            <p>
              Load your car dataset into a pandas DataFrame. Ensure that the
              dataset contains information about various cars and their prices.
            </p>
            <br />
            <div class="p-2 lg:w-full md:w-1/2 w-full">
              <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg hover:border-cyan-500 hover:scale-105 transition-all duration-500 cursor-pointer">
                <div class="flex-grow ">
                  <p class="text-gray-900 title-font font-medium">
                    # Load the dataset <br />
                    df = pd.read_csv('car_dataset.csv')
                  </p>
                </div>
              </div>
            </div>
            <br />
            <h1>
              <b>Step 3: Explore and Preprocess Data</b>
            </h1>
            <p>
              Explore the dataset to understand its structure and preprocess it
              as needed. Handle missing values, outliers, and encode categorical
              variables if required.
            </p>
            <br />
            <div class="p-2 lg:w-full md:w-1/2 w-full">
              <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg hover:border-cyan-500 hover:scale-105 transition-all duration-500 cursor-pointer">
                <div class="flex-grow ">
                  <p class="text-gray-900 title-font font-medium">
                    # Explore the dataset <br />
                    print(df.head()) print(df.info()) <br /> <br />
                    # Preprocess data (e.g., one-hot encoding) <br />
                    df = pd.get_dummies(df,columns=['make', 'model',
                    'fuel_type'])
                  </p>
                </div>
              </div>
            </div>
            <br />
            <h1>
              <b>Step 4: Select Features and Target Variable</b>
            </h1>
            <p>
              Select the features (independent variables) and the target
              variable (car prices) that you want to use for prediction.
            </p>
            <br />
            <div class="p-2 lg:w-full md:w-1/2 w-full">
              <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg hover:border-cyan-500 hover:scale-105 transition-all duration-500 cursor-pointer">
                <div class="flex-grow ">
                  <p class="text-gray-900 title-font font-medium">
                    # Select features and target variable <br />
                    X = df[['mileage', 'year','horsepower', 'fuel_type_Gas',
                    'fuel_type_Diesel']] <br />y = df['price']
                  </p>
                </div>
              </div>
            </div>
            <br />
            <h1>
              <b>Step 5: Split the Dataset</b>
            </h1>
            <p>
              Split the dataset into a training set and a testing set to train
              and evaluate your model.
            </p>
            <br />
            <div class="p-2 lg:w-max md:w-1/2 w-full">
              <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg hover:border-cyan-500 hover:scale-105 transition-all duration-500 cursor-pointer">
                <div class="flex-grow ">
                  <p class="text-gray-900 title-font font-medium">
                    # Split the dataset into training and testing sets <br />
                    X_train,X_test, y_train, y_test = train_test_split(X, y,
                    test_size=0.2,random_state=42)
                  </p>
                </div>
              </div>
            </div>
            <br />
            <h1>
              <b>Step 6: Create and Train the Model</b>
            </h1>
            <p>
              Create a Linear Regression model and train it using the training
              data.
            </p>
            <br />
            <div class="p-2 lg:w-full   md:w-1/2 w-full">
              <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg hover:border-cyan-500 hover:scale-105 transition-all duration-500 cursor-pointer">
                <div class="flex-grow ">
                  <p class="text-gray-900 title-font font-medium">
                    # Create a Linear Regression model <br />
                    model = LinearRegression() <br /> <br />
                    # Train the model <br />
                    model.fit(X_train, y_train)
                  </p>
                </div>
              </div>
            </div>
            <br />
            <h1>
              <b>Step 7: Define the Prediction Function</b>
            </h1>
            <p>
              Split the dataset into a training set and a testing set to train
              and evaluate your model.Create a function that takes input
              features (e.g., mileage, year, horsepower, fuel type) and uses the
              trained model to predict the car's price.
            </p>
            <br />
            <div class="p-2 lg:w-max md:w-1/2 w-full">
              <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg hover:border-cyan-500 hover:scale-105 transition-all duration-500 cursor-pointer">
                <div class="flex-grow ">
                  <p class="text-gray-900 title-font font-medium">
                    def predict_price(mileage, year, horsepower, fuel_type):{" "}
                    <br />
                    input_data = np.array([[mileage, year, horsepower, fuel_type
                    == 'Gas', fuel_type == 'Diesel']]) <br />
                    prediction = model.predict(input_data)[0] <br />
                    return prediction
                  </p>
                </div>
              </div>
            </div>
            <br />
            <h1>
              <b>Step 8: Create the Gradio Interface</b>
            </h1>
            <p>
              Use Gradio to create an interactive web interface for your car
              price prediction model. Define the input and output components,
              including text boxes for input features and a text element to
              display the predicted price.
            </p>
            <br />
            <div class="p-2 lg:w-max md:w-1/2 w-full">
              <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg hover:border-cyan-500 hover:scale-105 transition-all duration-500 cursor-pointer">
                <div class="flex-grow ">
                  <p class="text-gray-900 title-font font-medium">
                    iface = gr.Interface(fn=predict_price, <br />
                    inputs=["number","number", "number", "radio"], <br />
                    outputs="text", <br />
                    live=True, <br />
                    title="Car Price Prediction", <br />
                    description="Predict the price of a car based on mileage,
                    year, horsepower, and fuel type.")
                  </p>
                </div>
              </div>
            </div>
            <br />
            <h1>
              <b>Step 9: Launch the Gradio Interface</b>
            </h1>
            <p>
              Launch the Gradio interface, allowing you to interactively input
              car features and receive predictions in real-time.
            </p>
            <br />
            <div class="p-2 lg:w-full md:w-1/2 w-full">
              <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg hover:border-cyan-500 hover:scale-105 transition-all duration-500 cursor-pointer">
                <div class="flex-grow ">
                  {/* <h2 class="">DHT11 sensor</h2> */}
                  <p class="text-gray-900 title-font font-medium">
                    iface.launch(share=True)
                  </p>
                </div>
              </div>
            </div>
            <br />
            <h1>
              <b>Step 10: Use the Web Interface</b>
            </h1>
            <p>
              You can now use the interactive web interface to predict car
              prices based on the provided features. Gradio automatically
              handles the user interface and connects it to your Linear
              Regression model, making it easy to use for anyone without coding
              knowledge.
            </p>
            {/* <div class="flex justify-center">
              <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Button
              </button>
              <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                Button
              </button>
            </div> */}
          </div>
        </div>
      </section>

      <br />
      <br />
      <div class="flex justify-center">
        <a href="/">
          <button class="inline-flex text-white bg-cyan-500 border-0 py-2 px-6 focus:outline-none hover:bg-cyan-700 rounded text-lg">
            Go Back
          </button>
        </a>
        <a href="https://github.com/JafarSadiqAM/Car-price-prediction-using-Linear-Regression">
          <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
            Get my project
          </button>
        </a>
      </div>
    </>
  );
}

export default MachineLearning