import {
  faBriefcase,
  faComment,
  faComments,
  faEnvelopeOpen,
  faHome,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
const Sidebar = () => {
  return (
    <div className="text-center">
      <ul className="all_lists">
        <li>
          <Link>
            Home
            <FontAwesomeIcon
              className="nav_icon"
              icon={faHome}
            ></FontAwesomeIcon>
          </Link>
        </li>
        <li>
          <Link>
            about
            <FontAwesomeIcon
              className="nav_icon"
              icon={faUserTie}
            ></FontAwesomeIcon>
          </Link>
        </li>
        <li>
          <Link>
            works
            <FontAwesomeIcon
              className="nav_icon"
              icon={faBriefcase}
            ></FontAwesomeIcon>
          </Link>
        </li>
        <li>
          <Link className="link">
            contact
            <FontAwesomeIcon
              className="nav_icon"
              icon={faEnvelopeOpen}
            ></FontAwesomeIcon>
          </Link>
        </li>
        <li>
          <Link className="link">
            blogs
            <FontAwesomeIcon
              className="nav_icon"
              icon={faComments}
            ></FontAwesomeIcon>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
