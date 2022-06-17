import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import { Navmock } from './NavMock'
export default class Navbar extends Component {
  render() {
    return (
      <div className='navmock'>

         <ul>
              {
                  Navmock.map((item,i)=>{
                    return(
                        <li key={i}>
                        <NavLink className='link' to={item.path}>{item.name}</NavLink>
                      </li>
                    )
                  })
              }
              {/* <li>
                  <NavLink to='/Home'>Home</NavLink>
                </li>
              <li>
                  <NavLink to='/about'>About</NavLink>
                </li>
              <li>
                  <NavLink to='/services'>Services</NavLink>
                </li>
                <li>
                  <NavLink to='/contacts'>Contacts</NavLink>
                </li> */}

          </ul>
      </div>
    )
  }
}
