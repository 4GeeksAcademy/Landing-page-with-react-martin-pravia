import React from "react";

const FirstContainer = ({ title, description, button }) => {
  return (
    <div className="w-100 bg-secondary py-5">
      <div className="container">
        <div className="card bg-secondary border-0">
          <div className="card-body">
            <h5 className="card-title display-2">{title}</h5>
            <p className="card-text">{description}</p>
            <a href="#" className="btn btn-primary">
              {button}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstContainer;
