// import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';

// import Loadingpage from './Components/Loadingpage';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Project from './Components/Project';
import ContactUs from './Components/ContactUs';
import Footer from "..//src//Components//footer";
import Hydroponic from './Components/Hydroponic';
import MachineLearning from "./Components/MachineLearning";
import ReactProject from "./Components/ReactProject";

function App() {
  return (
    <>
      {/* <Loadingpage></Loadingpage> */}
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/project" element={<Project />}></Route>
          <Route exact path="/contact-us" element={<ContactUs />}></Route>
          <Route exact path="/hydroponic" element={<Hydroponic />}></Route>
          <Route exact path="/machinelearning" element={<MachineLearning />}></Route>
          <Route exact path="/reactproject" element={<ReactProject />}></Route>
        </Routes>
        {/* <footer></footer> */}
      </Router>
      <Footer></Footer>
    </>
  );
}

export default App;
