import React from "react";

const Navbar = ({
  buttonCompany,
  buttonTrips,
  buttonPacks,
  buttonUs,
  buttonContact,
}) => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark">
      <div className="col-md-10 bg-seconday-subtle container-fluid">
        <a className="navbar-brand text-light" href="#">
          {buttonCompany}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav">
            <a
              className="nav-link active text-light"
              aria-current="page"
              href="#"
            >
              {buttonTrips}
            </a>
            <a className="nav-link text-light" href="#">
              {buttonPacks}
            </a>
            <a className="nav-link text-light" href="#">
              {buttonUs}
            </a>
            <a className="nav-link text-light" aria-disabled="true">
              {buttonContact}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
