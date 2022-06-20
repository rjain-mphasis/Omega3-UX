import React, { Component } from 'react'

export default class Navbar2 extends Component {
  render() {
    return (
        <div>
            <ul className="nav justify-content-center">
  <li className="nav-item">
    <a className="nav-link active" aria-current="page" href="#">Home</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Contacts</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">About</a>
  </li>
  <li className="nav-item">
    <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Logout</a>
  </li>
</ul>
        </div>


    )
  }
}