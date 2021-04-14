import {React, useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
import Moment from "react-moment";

const SERVER_URL = process.env.REACT_APP_BACKEND_SERVER_URL;

const JobDetail = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      let url = `${SERVER_URL}/jobs/${id}`;
      const res = await fetch(url);
      const data = await res.json();
      setJob(data);
    };
    fetchData();
  }, [id]);

  return (
    <div id="job-detail" className="job-detail">
      <div className="container">
        <div className="avatar">
          <img src={`../${job && job.img}`} alt=""/>
        </div>
        <div className="jd">
          <p className="tit">{job && job.title}</p>
          <p className="price">${job && job.salary}</p>
          <ul className="list">
            {job && job.benefits.map(item => <li key={item}>{item}</li>)}
          </ul>
          <div className="lg">
            {job && job.tags.map(item => <span key={item}>{item}</span>)}
          </div>
        </div>
        <div className="direction">
          <p className="status">{job && job.isHotjob ? 'Hot' : ''}</p>
          <p className="place">{job && job.city}<br />District {job && job.district}</p>
          <p className="time"><Moment fromNow>{job && job.time}</Moment></p>
        </div>
        <p className="des">{job && job.description}</p>
        <button>Apply Now</button>
      </div>
    </div>
  );
}

export default JobDetail
