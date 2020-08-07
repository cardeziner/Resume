import React from 'react'

const JobsComponent = (props) =>{
  return(
    <div className="row spacing">
      <div className="col-3 borders outline bold">
        <h1>Job Name</h1>
        <h4>City, State</h4>
        <h5>Date - Date</h5>
      </div>
      <div className="col-9 borders outline bold pad">
        <h1>duties</h1>
        <ul className="left">
          <li>duty</li>
        </ul>
      </div>
    </div>
  )
}

export default JobsComponent
