import React from "react";
import LoadItems from "../LoadItems/LoadItems";
import banner from "../../banner.jpg";
const Home = () => {
  return (
    <div className="min-vh-100 container">
      <div className="d-flex justify-content-center align-items-center my-4">
        <div>
          <h1 className="display-2">Get all <span className="text-warning">healthy and fresh</span> fruits at <span className="text-success">Fresh</span><span className="text-danger">Stock</span></h1>
        </div>
        <div>
          <img className="img-fluid" src={banner} alt="" />
        </div>
      </div>
      <LoadItems></LoadItems>
      <div>extra section 1</div>
      <div>extra section 2</div>
    </div>
  );
};

export default Home;
