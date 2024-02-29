import BlogsSection from "./Components/BlogsSection";
import FooterSection from "./Components/FooterSection";
import HeroSection from "./Components/HeroSection";
import LetsConnectSection from "./Components/LetsConnectSection";
import WhatWeOfferSection from "./Components/WhatWeOfferSection";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div>
      <Navbar/>
    <div id="hero">
      <HeroSection/>
    </div>
    <div id="what-we-offer">
      <WhatWeOfferSection/>
    </div>
    <div id="blogs">
      <BlogsSection/>
    </div>
    <div id="lets-connect">
      <LetsConnectSection/>
    </div>
      <FooterSection/>
    </div>
  );
}

export default App;
