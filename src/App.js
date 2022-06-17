import logo from './logo.svg';
import './Sass/main.css';
import React, { Component } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Links from './Links/Links';

import Alert from './Component/Alert';
import Button from './Component/Button';
import Sidebar from './Component/sideBar';
import Body from './Component/Body';

class App extends Component {
  render() {
    return (
      <div className="App">
        <>
          <Links />
          <Routes>
            {/* <Route path="/" element={<Alert />} />
        <Route path="/about" element={<Button />} /> */}



            {/* {
          pageDetails.map(({name, path})=>{
            
            return (
              <>
              <Route path={path} element={name} />
              </>
            )
          })
        } */}
          </Routes>
          <div className='App_component'>
            <Sidebar />
            <Body />
          </div>
        </>








        {/* <nav className='navBar'>
          <img src="../images/mphasisLogo.png" alt="not found" />
          <ul>
            <li>
              <Link className='links' to='/'>Home</Link>
            </li>
            <li>
              <Link className='links' to='about'>About</Link>
            </li>
            <li>
              <Link className='links' to='services'>Services</Link>
            </li>
          </ul>
        </nav> */}


      </div>
    )
  };
}

export default App;
