import { React, useEffect } from "react";
import Search from "./Search";
import JobsList from "./JobsList";
import Loading from "./Loading";

import { jobActions } from "../redux/action/job.action";
import { useDispatch, useSelector } from "react-redux";

const HomePage = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state);
  const handleSearch = (e) => {};

  useEffect(() => {
    dispatch(jobActions.getJobs());
  }, [dispatch]);

  return (
    <div id="home">
      <Search handleSearch={handleSearch} />
      {data.loading ? (
        <Loading />
      ) : (
        <JobsList jobList={data.jobs} loading={data.loading} />
      )}
    </div>
  );
};

export default HomePage;
