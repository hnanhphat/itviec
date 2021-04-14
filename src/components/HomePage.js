import {React, useState, useEffect} from 'react';
import { useHistory, useLocation } from "react-router-dom";
import Search from './Search';
import JobsList from './JobsList';
import Loading from './Loading';

const SERVER_URL = process.env.REACT_APP_BACKEND_SERVER_URL;
const QUERYSTR_PREFIX = "q";

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
}

const HomePage = () => {
  const history = useHistory();
  const query = useQuery();

  const [jobList, setJobList] = useState([]);
  const [keyword, setKeyword] = useState(query.get(QUERYSTR_PREFIX));
  const [originalJobs, setOriginalJobs] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = (e) => {
    let filteredJobs = originalJobs;
    if (e) {
      e.preventDefault();
      history.push(`/?${QUERYSTR_PREFIX}=${encodeURIComponent(keyword)}`);
    }
    if (keyword) {
      filteredJobs = originalJobs.filter(job =>
        job.title.toLowerCase().includes(keyword.toLowerCase())
      );
    }
    setJobList(filteredJobs);
  }

  useEffect(() => {
    const fetchData = async () => {
      let url = `${SERVER_URL}/jobs`;
      const res = await fetch(url);
      const data = await res.json();
      setOriginalJobs(data);
      setLoading(true);
    };
    fetchData();
  }, []);

  useEffect(() => {
    handleSearch();
  }, [originalJobs]);

  return (
    <div id="home">
      <Search handleSearch={handleSearch} setKeyword={setKeyword} />
      {loading ? <JobsList jobList={jobList} loading={loading} /> : <Loading />}
    </div>
  );
}

export default HomePage
