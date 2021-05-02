import React from "react";
import image from "../../../images/image2.jpg";
import "./Header.css";

const Home = () => {
  return (
    <div className="one align-items-center">
      <div className="row w-100 align-items-center">
        <div className="col-12 col-md-5 text-center">
          <img className="main_image img-fluid" src={image} alt="" />
        </div>
        <div className="col-12 col-md-7 main_text">
          <h1>
            <span>i'm kamrul hasan.</span> <br /> web developer <br />
          </h1>
          <p>
            I'm a Bangladesh based front‑end developer focused on crafting clean
            and user‑friendly experiences, I am passionate about building
            excellent website that improves the lives of those around me.
          </p>
          <button>download resume</button>
        </div>
      </div>
    </div>
  );
};
export default Home;
