import React from 'react'
import Layout from '../../components/Layouts/Layout'
import "../../styles/HomeStyle.css";
import Section1 from './Section1'
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';

const Home = () => {
  return (
    <>
    <Layout />
    {/* Home section Hero banner */}
    <Section1 />
    {/* Home section About */}
    <Section2 />
    {/* Home section Menu */}
    <Section3 />
    {/* Home section Promotion */}
    <Section4 />
    </>

  )
}

export default Home
