import React from "react";
import Nav from "./nav";
import Form from "./Form";
import "./css/home.css";

const Home = () => {
  return (
    <div className="home">
      <img src="src/assets/img-1.jpg" className="bg-img" />
      <Nav></Nav>
      <div className="main">
        <h1>
          The biggest Indian hits. The best Indian stories.
          <br /> All streaming here.
        </h1>
        <h3>Watch anywhere. Cancel anytime.</h3>
        <Form />
      </div>
    </div>
  );
};

export default Home;
