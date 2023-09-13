import { useState } from "react";
const Accordion = ({ ques, ans }) => {
  const [acc, setAcc] = useState(false);
  const handleAccordion = () => {
    setAcc(!acc);
  };
  const mountedStyle = { animation: "inAnimation 250ms ease-in" };
  const unmountedStyle = {
    animation: "outAnimation 270ms ease-out",
    animationFillMode: "forwards",
  };
  return (
    <>
      <div className="accordion" onClick={handleAccordion}>
        <span>{ques}</span>
        <button>{acc ? "-" : "+"}</button>
      </div>
      {acc && (
        <div className="ans" style={acc ? mountedStyle : unmountedStyle}>
          <p>{ans}</p>
        </div>
      )}
    </>
  );
};

export default Accordion;
