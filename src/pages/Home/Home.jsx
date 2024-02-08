import React from 'react'
import "../../styles/HomeStyle.css";
import HomeSection1 from './HomeSection1'
import HomeSection2 from './HomeSection2';
import HomeSection3 from './HomeSection3';
import HomeSection4 from './HomeSection4';
import HomeSection5 from './HomeSection5';
import HomeSection6 from './HomeSection6';
import HomeSection7 from './HomeSection7';
import Header from '../../components/Layouts/Header';
import Footer from '../../components/Layouts/Footer';



const Home = () => {
  return (
    <>
    <Header/>
    {/* Home section Hero banner */}
    <HomeSection1 />

    {/* Home section About */}
    <HomeSection2 />

    {/* Home section Menu */}
    <HomeSection3 />

    {/* Home section Promotion */}
    <HomeSection4 />

    {/* Home Section Shop */}
    <HomeSection5 />

    {/* Home section Rating */}
    <HomeSection6 />

    {/* Home Section Contact */}
    <HomeSection7 />


    <Footer />
    </>

  )
}

export default Home
