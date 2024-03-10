import React from 'react';
import './App.css';
import Profile from './components/Profile';
import Banner from './components/Banner';
import HobbyLinks from './components/HobbyLinks'; 
function App(){
  return(
    <>
      <Banner />
      <Profile />
      <HobbyLinks /> 
    </>
  );
}

export default App;
