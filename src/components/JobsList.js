import React from 'react';
import { Link } from "react-router-dom";
import Moment from "react-moment";

const JobsList = ({jobList}) => {
  return (
    <div id="jobs" className="jobs">
      <div className="container">
        <h2 className="jobs__tit">{jobList.length} IT jobs in Vietnam for you</h2>
        <ul className="jobs__list">
          {
            jobList.map((job) => (
              <li key={job.id}>
                <Link to={`/jobs/${job.id}`}>
                  <div className="avatar">
                    <img src={`.${job.img}`} alt=""/>
                  </div>
                  <div className="jd">
                    <p className="tit">{job.title}</p>
                    <p className="price">${job.salary}</p>
                    <ul className="list">
                      {job.benefits.map(item => <li key={item}>{item}</li>)}
                    </ul>
                    <div className="lg">
                      {job.tags.map(item => <span key={item}>{item}</span>)}
                    </div>
                  </div>
                  <div className="direction">
                    <p className="status">{job.isHotjob ? 'Hot' : ''}</p>
                    <p className="place">{job.city}<br />District {job.district}</p>
                    <p className="time"><Moment fromNow>{job.time}</Moment></p>
                  </div>
                </Link>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default JobsList
