import React, { Component } from 'react'
import {SideMock} from './SideMock'
import { NavLink } from 'react-router-dom'
export default class sidebar extends Component {
  render() {
    return (
      <div className='sidebar'>
         <h2>UX-UI</h2>
          <ul>
              {
                  SideMock.map((item,i)=>{
                    return(
                        <li key={i}>
                        <NavLink className='link' to={item.path}>{item.name}</NavLink>
                      </li>
                    )
                  })
              }
              
          </ul>

          
      </div>
    )
  }
}
