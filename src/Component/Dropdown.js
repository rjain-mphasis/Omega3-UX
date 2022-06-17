import React, { Component } from 'react';
import '../Sass/main.css'

class Dropdown extends Component {
    state = {}
    render() {
        return (
            <>
                <h2 className='main_div'>Text Dropdown</h2>
                <h1 className='main_div'>Dropdown</h1>
            <div class="dropdown main_div">
                <span>Mouse over me</span>
                <div class="dropdown-content">
                    <p>Hello World!</p>
                </div>
            </div>

                <h2 className='main_div'>Move the mouse over the button to open the dropdown menu.</h2>
                <div className=' dropdown main_div'>
                    <button class="dropbtn">Dropdown</button>
                    <div class="dropdown-content">
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                    </div>
                </div>
               
            </>
            );
    }
}

export default Dropdown;