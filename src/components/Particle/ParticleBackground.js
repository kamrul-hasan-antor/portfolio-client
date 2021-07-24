import React from "react";
import Particles from "react-particles-js";
import particleConfig from "./config/particle-config";

export default function ParticleBackground() {
  return (
    <div className="row w-100 align-items-center">
      <Particles params={particleConfig}></Particles>
      <div className="col-12 col-md-5 text-center">
        <img className="main_image img-fluid" src="" alt="" />
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
        <button>
          <a
            href="https://drive.google.com/file/d/1av6igYV2801cMSNAWD24U1UXnwIvoEaT/view?usp=sharing"
            target="blank"
          >
            download resume
          </a>
        </button>
      </div>
    </div>
  );
}
