import React, { Component } from 'react'

export default class Button extends Component {
  render() {
    return (
        <div>
           <button type="button" className="btn btn-primary">Submit</button>
<button type="button" className="btn btn-secondary">Cancel</button>
<button type="button" className="btn btn-success">Login</button>
<button type="button" className="btn btn-danger">Logout</button>
<button type="button" className="btn btn-warning">Warning</button>


<button type="button" className="btn btn-link">Link</button>

<div className="d-grid gap-2">
  <button className="btn btn-primary" type="button">Submit</button>

</div>


        </div>


    )
  }
}
