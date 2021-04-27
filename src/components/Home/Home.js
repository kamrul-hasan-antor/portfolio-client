import React from "react";
import image from "../../images/logo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./Home.css";
import Sidebar from "../Sidebar/Sidebar";
const Home = () => {
  return (
    <main className="one">
      <div className="col d-flex align-items-center">
        <div className="col-md-4">
          <img className="logo" src={image} alt="" />
        </div>
        <div className="col-md-6 ">
          <div className="text text-white">
            <h1 className="large-title">
              <span className="theme_color">i'm kamrul hasan.</span> <br />
              web developer
            </h1>
            <p className="text-justify">
              I'm a Bangladeshi web designer & front‑end developer focused on
              crafting clean & user‑friendly experiences, I am passionate about
              building excellent web applications that improves the lives of
              those around me.
            </p>
            <button className="button">
              more about me
              <FontAwesomeIcon
                className="icon"
                icon={faArrowRight}
              ></FontAwesomeIcon>
            </button>
          </div>
        </div>
        <div className="col-md-2">
          <Sidebar></Sidebar>
        </div>
      </div>
    </main>
  );
};
export default Home;
