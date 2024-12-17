import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Menu from './components/Menu/menu';
import CakeTypes from './components/CakeTypes/CakeTypes';
import Banner from './components/Banner/Banner';
import FamousCakes from './components/FamousCakes/FamousCakes';
import Footer from './components/Footer/Footer';


const App = () => {
  return (
    <div className="overflow-x-hidden bg-white2">
      <div className='relative overflow-hidden'>
      <Navbar />
      <Menu />
      </div>
      <CakeTypes />
      <Banner />
      <FamousCakes />
      <Footer />
    </div>
  );
};

export default App;
