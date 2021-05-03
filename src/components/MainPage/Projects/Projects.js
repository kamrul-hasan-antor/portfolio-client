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
          <div className="col-md-6">
            <div className="projects_container">
              <div className="box">
                <img src={salon} alt="" />
                <div className="content">
                  <h3>capello salon</h3>
                  <p>
                    It's a salon service (full-stack) website. A user must log
                    in to purchase the services and pay by credit card. Users
                    can send reviews. An admin can manage product information
                    and users' purchase history.
                  </p>
                  <div className="buttons d-flex">
                    <button>
                      <a href="https://cappiello-salon.web.app/" target="blank">
                        live link
                      </a>
                    </button>
                    <button>
                      <a
                        href="https://github.com/kamrul-hasan-antor/capello-salon-client"
                        target="blank"
                      >
                        github
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="projects_container">
              <div className="box">
                <img src={rider} alt="" />
                <div className="content">
                  <h3>burg riders</h3>
                  <p>
                    Burg Rider is a fully responsive website, which provides
                    vehicle rental services. On this website, users must log in
                    to purchase the services.
                  </p>
                  <div className="buttons d-flex">
                    <button>
                      <a href="https://burg-riders.web.app" target="blank">
                        live link
                      </a>
                    </button>
                    <button>
                      <a
                        href="https://github.com/kamrul-hasan-antor/burg-rider"
                        target="blank"
                      >
                        github
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="projects_container">
              <div className="box">
                <img src={mobile} alt="" />
                <div className="content">
                  <h3>mobile shop</h3>
                  <p>
                    It is a mobile shop website. A logged-in user can buy
                    products and see previous purchase history. An admin can add
                    products, manage products, and can see all buyer's purchase
                    histories.
                  </p>
                  <div className="buttons d-flex">
                    <button>
                      <a
                        href="https://mobileshop-2c04c.web.app/"
                        target="blank"
                      >
                        live link
                      </a>
                    </button>
                    <button>
                      <a
                        href="https://github.com/kamrul-hasan-antor/mobile-shop-client"
                        target="blank"
                      >
                        github
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="projects_container">
              <div className="box">
                <img src={soccer} alt="" />
                <div className="content">
                  <h3>soccer club tracker</h3>
                  <p>
                    The soccer club tracker is a website about various football
                    clubs. Here user can see football team detail information.
                  </p>
                  <div className="buttons d-flex">
                    <button>
                      <a
                        href="https://nifty-hoover-bd0329.netlify.app/"
                        target="blank"
                      >
                        live link
                      </a>
                    </button>
                    <button>
                      <a
                        href="https://github.com/kamrul-hasan-antor/soccer-club-tracker-"
                        target="blank"
                      >
                        github
                      </a>
                    </button>
                  </div>
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
