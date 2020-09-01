import React from 'react'

const JobsComponent = (props) =>{
  return(
    <div className="bg">
      <h1 className="bold center white col-4 mx-auto blue-title"> WORK HISTORY</h1>
      <div className="row spacing gap">
        <div className="col-3">
          <div className="borders bold">
          <h1 className="bold orange">Gourley Company</h1>
          <p>independent consultant</p>

          <h4 className="soft orange-text">Waltham, MA</h4>
          <h5 className="soft orange-text">04/2019 - 11/2020</h5>
          </div>
        </div>
        <div className="col-8 borders outline bold gap opac">
          <ul className="left margin-top">
            <p className="soft">Worked as an Independent Consultant offering website management services for Gourley Co, an HVAC product distribution company.</p>
            <p className="soft">Added new content and adjusted old content to update company's website(s).</p>
            <p className="soft">Built, formatted, and created content for 2 other websites focused primarily on individual products sold by Gourley Co., using 3rd party development services (web.com, godaddy.com).</p>
            <p className="soft">Managed online marketing through GoogleAds, Facebook Ads, and SEO through Google SEO services, GoDaddy, and Facebook for 2 websites.</p>
            <p className="soft">Ran general maintenance on both websites to make sure all content was accurate and up-to-date.</p>
          </ul>
        </div>
      </div>
      <div className="row spacing gap">
        <div className="col-3">
          <div className="borders bold">
          <h1 className="bold orange margin">Mill Creek Res Trust</h1>
          <p>leasing consultant / social media team lead</p>

          <h4 className="soft orange-text">Needham, MA</h4>
          <h5 className="soft orange-text">06/2018 - 03/2019</h5>
          </div>
        </div>
        <div className="col-8 borders outline bold gap opac">
          <ul className="left margin-top">
            <p className="soft">Lead Leasing Consultant for a lease-up community in Needham, MA.</p>
            <p className="soft">Reached 75% occupancy within the first 6 months of opening.</p>
            <p className="soft">Assisted in opening community with a 4 person team and worked directly with maintenance on all work-orders and building issues.</p>
            <p className="soft">Managed social media presence on Facebook and Instagram and directly communicatied with Manager each morning to determine what needed to be done in the community for each day, and assisted with marketing campaigns inside the community and through online presence.</p>
            <p className="soft">Responsible for opening community each morning, making sure all common areas were in pristine condition, and reported any indiscretions to maintenance for resolution.</p>
            <p className="soft">Averaged a signing of 5-6 leases a month, and was personally responsible for occupying 30% of total building occupancy by the end of the lease-up period.</p>
          </ul>
        </div>
      </div>
      <div className="row spacing gap">
        <div className="col-3">
          <div className="borders bold">
          <h1 className="bold orange margin">Cardinal Mgt Group</h1>
          <p>leasing consultant</p>

          <h4 className="soft orange-text">Denver, CO</h4>
          <h5 className="soft orange-text">08/2017 - 06/2019</h5>
          </div>
        </div>
        <div className="col-8 borders outline bold gap opac">
          <ul className="left margin-top">
            <p className="soft">Managed, generated, and acquired leases for a variety of demographics at a recently renovated property in Denver, CO.</p>
            <p className="soft">Leased 21 apartments in December 2017 during leasing competition.</p>
            <p className="soft">Answered phones and scheduled appointments with prospective residents.</p>
            <p className="soft">Built rapport with prospective residents during tours and complied with all fair housing regulations.</p>
            <p className="soft">Submitted work orders to maintenance team and communicated all instances of disrepair inside units and in common areas.</p>
            <p className="soft">Community spanned over 500 units in 9 different buildings.</p>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default JobsComponent
