import React from "react";

const Header = ({ handleSearch }) => {




  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid">
        <span className="fw-bold fs-5 text-white mx-auto ps-5 ms-5 brand-heading">NOTES TRACKER</span>


        <form className="d-flex" onSubmit={handleSearch}>

          <input
            className="form-control-lg me-2 pe-5 ps-4"
            type="search"
            name="searchText"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success me-3 px-4" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  );



};

export default Header;