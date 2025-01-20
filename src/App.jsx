import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Portfolio from "./Components/Portfolio";
import Experiance from "./Components/Experiance";
import Contacts from "./Components/Contacts";
import Footer from "./Components/Footer";
import {Toaster} from "react-hot-toast";
export default function App() {
  return (
    <>
      <div>
        <Navbar/>
        <Home/>
        <About/>
        <Portfolio/>
        <Experiance/>
        <Contacts/>
        <Footer/>
      </div>
      <Toaster />
    </>
  )
}