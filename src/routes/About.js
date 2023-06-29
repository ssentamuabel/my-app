import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroImage2 from '../components/HeroImage2';

const About = () => {
  return (
    <div>
      <Navbar />
      <HeroImage2 heading = "ABOUT." text="Iam a friendly front-end developer."/>
      <Footer />
    </div>
  )
}

export default About