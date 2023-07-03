// import './App.css';
import Navbar from "./Navbar/navbar";
import { Route, Routes } from "react-router-dom";
import About from "./Pages/about";
import Program from "./Pages/program";
import Training from "./Pages/training";
import Pricing from "./Pages/pricing";
import HeroSection from "./HeroSection/heroSection";
import Registration from "./HeroSection/registration";
import Footer from "./Pages/footer";
// import Footer from "./Pages/footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <About/>
      <Program/>
      <Pricing/>
      <Training/>
      {/* <Footer/> */}
      {/* <Routes> */}
        {/* <Route path="/" element={<HeroSection/>}/> */}
        {/* <Route path="/" element={<About />} />
        <Route path="/program" element={<Program />} />
        <Route path="/training" element={<Training />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/registration" element={<Registration/>}/>
      </Routes> */}
      {/* <Footer/> */}


    </div>
  );
}

export default App;
