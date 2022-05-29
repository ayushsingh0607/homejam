import React from 'react';
import './App.css';
import { Header, Body, Hero } from './components';
import images from './components/image';


function App() {
  return (
    <div className="App">
      <div className="Add" style={{ backgroundImage: `url(${images.Img}`}}>
        <Header />
        <Hero />
        
      </div>
      
      <Body />
      
      

      
    </div>
  );
}

export default App;
