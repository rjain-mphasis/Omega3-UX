import React, { Component } from 'react'

export default class Progress extends Component {
  render() {
    return (
        <div>
            <div className="progress">
  <div className="progress-bar" role="progressbar" style={{width: "25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
</div>
        </div>


    )
  }
}