import React from "react";
import Navbar from "../../Components/Common/Navbar/Navbar";
import Sidebar from "../../Components/Common/Sidebar/Sidebar";
import Hero from "../../Components/Common/Hero/Hero";
import Products from "../../Components/LandingPage/Products/Products";
import Collection from "../../Components/LandingPage/Collections/Collection";
import About from "../../Components/LandingPage/About/About";
import GetApp from "../../Components/LandingPage/GetApp/GetApp";
import Team_item from "../../Components/LandingPage/Team/Team_item";
import Testimonial from "../../Components/LandingPage/Testimonial/Testimonial";


const Home = ({ setShowLogin, setSidebar, sidebar }) => {
  return (
    <div>
      <Navbar
        setShowLogin={setShowLogin}
        setSidebar={setSidebar}
        sidebar={sidebar}
      />
      <Sidebar sidebar={sidebar} setSidebar={setSidebar} />
      <Hero />
      <Products />
      <Collection />
      <About />
       <Team_item />
       <Testimonial/>
      <GetApp />
    </div>
  );
};

export default Home;
