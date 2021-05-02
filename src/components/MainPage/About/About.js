import React from "react";
import "./About.css";
import image4 from "../../../images/image3.jpeg";
const About = () => {
  return (
    <div id="about" className="about_main pt-5">
      {/* <div className="container"> */}
      <div className="row">
        <div className="col-md-6 order-md-1 order-2">
          <h1 className="about_heading text-center">about me</h1>
        </div>
        <div className="col-md-6 ml-auto order-md-2 order-1">
          <img className="about_img img-fluid " src={image4} alt="" />
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default About;
