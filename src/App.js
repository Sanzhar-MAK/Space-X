import React from 'react';

import Header from './components/Header/Header.js';
import Main from './components/Main/Main.js';
import Features from './components/Features/Features.js';
import Footer from './components/Footer/Footer.js';
//import Calendar from './components/Calendar/Calendar.js';
//import Details from './components/Details/Details.js';



import './style.css';


class App extends React.Component {

  state = {
    rocket : 'Falcon1',
  };

  


  render(){
    return (
      <>
        <Header/>
        <Main/>
        <Features/>
        <Footer/>
      </>
    );
  }
}

export default App;
