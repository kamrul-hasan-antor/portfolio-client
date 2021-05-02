import React from "react";
import "./Projects.css";
import salon from "../../../images/salon.JPG";
import rider from "../../../images/burgRider.JPG";
import mobile from "../../../images/mobileShop.JPG";
import soccer from "../../../images/soccerClub.JPG";
const Projects = () => {
  return (
    <div id="projects" className="main">
      <h1 className="text-center pt-5">projects</h1>
      <div className="container">
        <div className="row">
          <div className="col-md-6 p-0 mt-4 main_container">
            <div className="projects_container">
              <img className="img-fluid pr-0 pl-0" src={salon} alt="" />
              <div className="project_details">
                <h3>capello salon</h3>
                <p>
                  It is a website for salon service (full-stack project). A user
                  must log in to purchase the services and pay by credit card.
                  Users can send reviews. An admin can manage product
                  information.
                </p>
                {/* <div className="button_container d-flex ">
                  <button className="btn btn-info mr-4">github</button>
                  <button className="btn btn-info">link</button>
                </div> */}
              </div>
            </div>
          </div>
          <div className="col-md-6 p-0 mt-4 main_container">
            <div className="projects_container">
              <img className="img-fluid pr-0 pl-0" src={rider} alt="" />
              <div className="project_details">
                <h3>capello salon</h3>
                <p>
                  It's a responsive salon service website. I used google sign in
                  authentication. Users can purchase, give reviews. Admin can
                  manage products.
                </p>
                <div className="button_container d-flex">
                  <button className="btn btn-info mr-4">github</button>
                  <button className="btn btn-info">github</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 p-0 mt-4 main_container">
            <div className="projects_container">
              <img className="img-fluid pr-0 pl-0" src={soccer} alt="" />
              <div className="project_details">
                <h3>capello salon</h3>
                <p>
                  It's a responsive salon service website. I used google sign in
                  authentication. Users can purchase, give reviews. Admin can
                  manage products.
                </p>
                <div className="button_container d-flex ">
                  <button className="btn btn-info mr-4">github</button>
                  <button className="btn btn-info">github</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
