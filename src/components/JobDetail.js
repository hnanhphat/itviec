import { React, useEffect } from "react";
import { useParams } from "react-router-dom";
import Moment from "react-moment";
import { useDispatch, useSelector } from "react-redux";
import { jobActions } from "../redux/action/job.action";

const JobDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const job = useSelector((state) => state);
  console.log(job);

  useEffect(() => {
    dispatch(jobActions.getSingleJob(id));
  }, [dispatch, id]);

  return (
    <div id="job-detail" className="job-detail">
      <div className="container">
        <div className="avatar">
          <img
            src={`../${job.singleJob && job.singleJob.img}`}
            alt={job.singleJob && job.singleJob.title}
          />
        </div>
        <div className="jd">
          <p className="tit">{job.singleJob && job.singleJob.title}</p>
          <p className="price">${job.singleJob && job.singleJob.salary}</p>
          <ul className="list">
            {job.singleJob &&
              job.singleJob.benefits.map((item) => <li key={item}>{item}</li>)}
          </ul>
          <div className="lg">
            {job.singleJob &&
              job.singleJob.tags.map((item) => <span key={item}>{item}</span>)}
          </div>
        </div>
        <div className="direction">
          <p className="status">
            {job.singleJob && job.singleJob.isHotjob ? "Hot" : ""}
          </p>
          <p className="place">
            {job.singleJob && job.singleJob.city}
            <br />
            District {job.singleJob && job.singleJob.district}
          </p>
          <p className="time">
            <Moment fromNow>{job.singleJob && job.singleJob.time}</Moment>
          </p>
        </div>
        <p className="des">{job.singleJob && job.singleJob.description}</p>
        <button>Apply Now</button>
      </div>
    </div>
  );
};

export default JobDetail;
