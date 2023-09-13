import React from "react";
import Accordion from "./Accordion";
import "./css/Faq.css";

const Faq = () => {
  return (
    <div className="faq">
      <h1>Frequently Asked Questions</h1>
      <Accordion
        ques="What is Netflix?"
        ans="Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices."
      />
      <Accordion
        ques="How much does Netflix cost?"
        ans="Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no contracts."
      />
      <Accordion
        ques="Where can i watch?"
        ans="Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles."
      />
      <Accordion
        ques="How do i cancel?"
        ans="Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime."
      />
      <Accordion
        ques="Is Netflix good for kids?"
        ans="The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.

Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see."
      />
    </div>
  );
};

export default Faq;
