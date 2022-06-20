import React, { Component } from 'react'

export default class Toasts extends Component {
  render() {
    return (
        <div>
            <div className="toast" role="alert" aria-live="assertive" aria-atomic="true">
  <div className="toast-header">
    <img src="https://i.picsum.photos/id/318/201/301.jpg?hmac=Rw9tTut42o9V_4XbbKUSxxQRH2pdLnxsjk-49hY7w9s" className="rounded me-2" alt="..."/>
    <strong className="me-auto">Bootstrap</strong>
    <small>11 mins ago</small>
    <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
  </div>
  <div className="toast-body">
    Hello, world! This is a toast message.
  </div>
</div>
        </div>


    )
  }
}
