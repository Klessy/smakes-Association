import React from 'react';


import { Hero, Services, About } from "../../components/index" 


import  "./home.css";

const Home = () => {
  return (
    <div>
      <Hero />
      <Services />
      <About />
    </div>
  )
}

export default Home