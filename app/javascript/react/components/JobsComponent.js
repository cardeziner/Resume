import React from 'react'

const JobsComponent = (props) =>{
  return(
    <div className="">
      <h1 className="bold center spacing white"> WORK HISTORY</h1>
      <div className="row spacing gap">
        <div className="col-3">
          <div className="borders bold">
          <h1 className="bold orange">Gourley Co</h1>
          <p> independent consultant</p>

          <h4 className="soft orange-text">Waltham, MA</h4>
          <h5 className="soft orange-text">04/2019 - 11/2020</h5>
          </div>
        </div>
        <div className="col-9 borders outline bold gap">
          <ul className="left margin-top">
            <p className="soft">Worked as an independent consultant offering website management services for Gourley Co, an HVAC product distribution company.</p>
            <p className="soft">Added new content and adjusted old content to update companies website(s).</p>
            <p className="soft">Built, formatted, and created content for 2 other websites focused primarily on individual products sold by Gourley Co using 3rd party development services (web.com, godaddy.com).</p>
            <p className="soft">Managed online marketing through GoogleAds, Facebook Ads, and SEO through Google SEO services, GoDaddy, and Facebook for 2 websites.</p>
            <p className="soft">Ran general maintenance on both websites to make sure all content was accurate and up-to-date.
</p>
          </ul>
        </div>
      </div>
      <div className="row spacing gap">
        <div className="col-3">
          <div className="borders bold">
          <h1 className="bold">Job Name</h1>
          <h4 className="soft">City, State</h4>
          <h5 className="soft">Date - Date</h5>
          </div>
        </div>
        <div className="col-9 borders outline bold gap">
          <ul className="left margin-top">
            <p className="soft">duty</p>
            <p className="soft">duty</p>
            <p className="soft">duty</p>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default JobsComponent
