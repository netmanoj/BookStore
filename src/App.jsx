import React from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import FeaturedBooks from './components/FeaturedBooks';
import Footer from './components/Footer';
import ShopByCategories from './components/ShopByCatagories';
import Banners from './components/Banners';


const App = () => {
  return (
    <div className="app">
      <Header />
      <SearchBar />
      <ShopByCategories/>
      <Banners/>
      <FeaturedBooks />
      <Footer />

    </div>
  );
};

export default App;
