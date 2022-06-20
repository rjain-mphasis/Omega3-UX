import React, { Component } from 'react'

export default class Closebutton extends Component {
  render() {
    return (
        <div>
            <button type="button" className="btn-close btn-close-white" aria-label="Close"></button>
<button type="button" className="btn-close btn-close-white" disabled aria-label="Close"></button>
        </div>


    )
  }
}
