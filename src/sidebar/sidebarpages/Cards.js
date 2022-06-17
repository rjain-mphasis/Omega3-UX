import React, { Component } from 'react'

export default class Cards extends Component {
  render() {
    return (
      <div>
        <h1>Basic Example</h1>
        <div className='container'>
              <div className='size'>
                  <div className='num'>286 X 180</div>
              </div>
              <div className='cardtittle'>
                  <h3>Card Tittle</h3>
                  <p>lorem3o Some quick example text to build on the card title and make up the bulk of the card's content. </p>
                  <button>Go somewhere</button>
              </div>
        </div>
      </div>
    )
  }
}
