import React, { useState } from "react";
import "./Experience.css";


function TimeLineItem(props) {
  return (
    <div
      className="timeline-item"
      onClick={() => {
        props.setActiveTitle(props.title);
        props.setActiveDescription(props.description);
      }}
      >
      <div className="experience-info">
        <h4>{props.title}</h4>
      </div>
    </div>
    );
}
export default function ExperienceScreen() {
    const [activeTitle, setActiveTitle] = useState("");
    const [activeDescription, setActiveDescription] = useState("");

  return (
    <div className="screen-background">
      <div className="experience-background">
        <div className="timeline-background">
                  <TimeLineItem
                    title="Student at Google CS Summer Institute (July 2020)"
                    description="Four-week intensive introduction to computer science and software engineering for high-achieving high school seniors with a passion for technology. Learned JavaScript directly from Google engineers. Presented and demonstrated final project to Google employees and community leaders."
                    setActiveTitle={setActiveTitle}
                    setActiveDescription={setActiveDescription}
                  ></TimeLineItem>
                  <TimeLineItem
                    title="Jane Street Women in STEM Program Participant (July 2020)"
                    description="Selected as 1 of 97 participants to explore quantitative trading and the practical applications of mathematics, computer science, and probably concepts in finance."
                    setActiveTitle={setActiveTitle}
                    setActiveDescription={setActiveDescription}
                  ></TimeLineItem>
                  <TimeLineItem
                    title="Founder and Director of the H.O.P.E. Project (April 2020 - Present)"
                    description="Founded H.O.P.E. (Harmonies of Pianists Everywhere), a 501(c)3 non-profit devoted to showcasing the unifying and transcendent power of classical music by fostering a sense of community and encouraging empowerment amongst our global network of 250+ young, talented pianists across the world. Led a 20-member Board; oversaw production of 4 webinars, 25+ collaborative virtual performances, educational interviews, and social events."
                    setActiveTitle={setActiveTitle}
                    setActiveDescription={setActiveDescription}
                  ></TimeLineItem>
                  <TimeLineItem
                    title="Vice President, Lynbrook High School Music for Community (2016 - 2020)"
                    description="Organized logistics and ticket sales for 2 annual benefit concerts, collectively raised $1000+ towards building schools in Ecuador. Arranged senior home performances, performed 20+ times annually. Taught music theory workshops to 30+ elementary school students weekly."
                    setActiveTitle={setActiveTitle}
                    setActiveDescription={setActiveDescription}
                  ></TimeLineItem>
                  <TimeLineItem
                    title="California Wildfires Benefit Concert Organizer (November 2018)"
                    description="Independently organized a benefit concert featuring performances by young musicians from the South Bay that raised over $4000 for North Valley Music Foundation towards funding musical instruments for music students affected by the November 2018 Camp Fire (in Chico, CA). Oversaw all logistics: secured a venue, collected donations, oversaw ticket sales and RSVPs, designed flyers, publicized the concert, gathered performers, and created programs."
                    setActiveTitle={setActiveTitle}
                    setActiveDescription={setActiveDescription}
                  ></TimeLineItem>
              </div>
        <div className="highlight-background">
          <h1>{activeTitle}</h1>
          <p>{activeDescription}</p>
          <h4>Click on an experience to learn more!</h4>
        </div>
      </div>
    </div>
  );
}
