import React from 'react'

const Search = ({handleSearch, setKeyword}) => {
  return (
    <div id="search" className="search">
      <div className="container">
        <h2 className="search__slogan">IT Jobs For Chất Developers</h2>
        <form onSubmit={handleSearch}>
          <label>
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" className="svg-inline--fa fa-search fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path></svg>
            <input type="text" name="searchInfo" id="searchInfo" placeholder="Keyword skill (Java, iOS...), Job Title, Company..." onChange={(e) => setKeyword(e.target.value)} />
          </label>
          <button type="submit">Search</button>
        </form>
        <ul className="search__directory">
          <li><a href="/tester">Tester</a></li>
          <li><a href="/java">Java</a></li>
          <li><a href="/php">PHP</a></li>
          <li><a href="/android">Android</a></li>
          <li><a href="/net">.Net</a></li>
          <li><a href="/ios">iOS</a></li>
          <li><a href="/business">Business Analyst</a></li>
          <li><a href="/qaqc">QA QC</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Search
