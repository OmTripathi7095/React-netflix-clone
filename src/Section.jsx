import React from "react";
import "./css/section.css";

const Section = ({ title, para, img, isLeft, isVideo }) => {
  const CheckVideo = () => {
    return isVideo ? (
      <video src={img} loop autoPlay muted />
    ) : (
      <img src={img} />
    );
  };
  return (
    <section>
      {isLeft ? (
        <>
          <CheckVideo />
          <div className="title">
            <h1>{title}</h1>
            <h3>{para}</h3>
          </div>
        </>
      ) : (
        <>
          <div className="title">
            <h1>{title}</h1>
            <h3>{para}</h3>
          </div>
          <CheckVideo />
        </>
      )}
    </section>
  );
};

export default Section;
