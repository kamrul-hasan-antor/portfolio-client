import React from "react";
import About from "../About/About";
import Blogs from "../Blogs/Blogs";
import Contacts from "../Contacts/Contacts";
import Header from "../Header/Header";
import Projects from "../Projects/Projects";
const MainPage = () => {
  return (
    <>
      <Header></Header>
      <About></About>
      <Projects></Projects>
      <Blogs></Blogs>
      <Contacts></Contacts>
    </>
  );
};

export default MainPage;
