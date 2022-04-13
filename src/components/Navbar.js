import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Search from "./Search";
// import NewsList from "./NewsList";

const Navbar = () => {
  const [term, setTerm] = useState('everything')

  return (
    <div className="hero">
      <div className="card bg-dark text-white border-0">
        <img
          src="/assets/bg.jpg"
          className="card-img"
          alt="Background"
          height="550px"
        />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container">
            <h5 className="card-title display-3 fw-bolder mb-0">
           NEW ARTICLES
            </h5>
            <p className="card-text lead fs-2">Lutfi Waziirul Fazri</p>
            
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default Navbar;
