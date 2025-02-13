import Burger from "./components/Burger";
import Head from "./Head"
import Home from "./Home";
import Footer from "./Footer";
import Impact from "./Impact";
import PartnersCarousel from "./PartnersCarousel";
import AboutUs from "./Aboutus";
import DonationBanner from "./DonationBanner";
import WhatWeDo from "./WhatWeDo";
import YouTubeProjects from "./YouTubeProjects";
function App() {
 

  return (
    <>
      <Head/>
      <Burger/>
      <Home/>
      <DonationBanner/>
      <AboutUs/>
      <WhatWeDo/>
      <YouTubeProjects/>
      <Impact/>
      <PartnersCarousel/>
      <Footer/>
    </>
  )
}

export default App
