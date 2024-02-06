import React from 'react'
import Layout from '../../components/Layouts/Layout'
import Section1 from './Section1'
import "../../styles/HomeStyle.css";
import Section2 from './Section2';
import Section3 from './Section3';

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
    </>

  )
}

export default Home
