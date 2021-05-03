import React from "react";
import "./About.css";
import image4 from "../../../images/image6.jpg";
const About = () => {
  return (
    <div id="about" className="about_main pt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6 order-md-1 order-2 about_details">
            <h1 className="text-center">about me</h1>
            <p>
              I enjoy taking complex problems and turning them into simple ones.
              I also love the logic and structure of coding and always strive to
              write efficient code whether it be HTML, CSS, or Javascript. I'm a
              self-motivated and passionate web developer with a deep interest
              in JavaScript. Expert in developing Single-Page applications
              (SPA)using ReactJS. Have a good knowledge of ES6, Bootstrap and
              also comfortable with NodeJS, Material-UI, ExpressJS, and MongoDB.
            </p>
            <button className="btn btn-primary">Know More</button>
          </div>
          <div className="col-md-6 ml-auto order-md-2 order-1 about_img">
            <img className="img-fluid mx-auto d-block" src={image4} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
