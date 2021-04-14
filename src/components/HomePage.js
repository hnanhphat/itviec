import React from 'react'
import Search from './Search';
import JobsList from './JobsList';

const HomePage = () => {
  return (
    <div id="home">
      <Search />
      <JobsList />
    </div>
  );
}

export default HomePage
