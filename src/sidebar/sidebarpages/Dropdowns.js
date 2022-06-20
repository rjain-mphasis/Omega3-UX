import React, { Component } from 'react'

export default class Dropdowns extends Component {
  render() {
    return (

<div className='col-12 row-4 d-flex justify-content-center text-center'>
<div className="dropdown" >
  <button className="btn btn-secondary dropdown-toggle"  type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown"  aria-expanded="false">
    Dropdown button
  </button>
  <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
    <li><a className="dropdown-item active" href="#">Subject 1</a></li>
    <li><a className="dropdown-item" href="#">Subject 2</a></li>
    <li><a className="dropdown-item" href="#">Others</a></li>
    <li><hr className="dropdown-divider"/></li>
    <li><a className="dropdown-item" href="#">Separated link</a></li>
  </ul>
</div>
</div>
    )
  }
}
