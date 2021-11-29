import React from 'react';
import ReactDom from 'react-dom';
import './index.css'  ;
import App from './App';
import NavBar from './Navbar';
import Footer from './Footer';
function Main()
{
  return (
  <>
  <NavBar/>
    <App/> 
    <Footer/> 
  </> 
  );
}


ReactDom.render(<Main/>,document.getElementById('root'));