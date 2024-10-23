import React, { useState } from 'react';

function Search({onReceived}) {

  const [searchText, setSearchText] = useState("");
  
  let handleInput = (e) => {
    setSearchText(e.target.value)
  }

  let handleSubmit = (e) => {
    e.preventDefault(); // page ko refresh nahi hone dega 
    onReceived(searchText)
  }

    return (
        <>
        <form className="form-inline my-2 my-lg-0" onSubmit={handleSubmit}>
          <input onChange={handleInput} name='searchText' className="form-control mr-sm-2" type="text" placeholder="Search" />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
        </>
    );
};

export default Search;