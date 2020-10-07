import React, { useState } from "react";
import "./Education.css";


function EducationItem(props) {
  return (
    <div
      className="list-item"
      onClick={() => {
        props.setActiveTitle(props.title);
        props.setActiveDescription(props.description);
        props.setActiveDetails(props.details);
      }}
      >
      <div className="education-info">
        <h4>{props.title}</h4>
      </div>
    </div>
    );
}
export default function EducationScreen() {
    const [activeTitle, setActiveTitle] = useState("");
    const [activeDescription, setActiveDescription] = useState("");
    const [activeDetails, setActiveDetails] = useState("");
    var placeholder = "Click on an element to learn more!"

  return (
    <div className="screen-background">
      <div className="education-background">
        <div className="list-background" onClick={() => {placeholder = ""}}>
                  <EducationItem
                    title="Harvard College"
                    description="B.A., Applied Mathematics and Computer Science (Intended) | Sep 2020 - Jun 2024 (Expected)"
                    details="Activities: Harvard Computer Society, Women in Computer Science (Mindfulness Project Team), Asian American Dance Troupe, Harvard Financial Analysts Club, Harvard Open Data Project"
                    setActiveDetails={setActiveDetails}
                    setActiveTitle={setActiveTitle}
                    setActiveDescription={setActiveDescription}
                  ></EducationItem>
                  <EducationItem
                    title="Lynbrook High School"
                    description="High School Diploma, Valedictorian | Aug 2016 - Jun 2020"
                    details="Activities: Engage Tutor, Spanish and Math Honor Societies, China Dance and Arts Youth Dance Troupe"
                    setActiveDetails={setActiveDetails}
                    setActiveTitle={setActiveTitle}
                    setActiveDescription={setActiveDescription}
                  ></EducationItem>
                  <EducationItem
                    title="Awards - Piano"
                    description="International award-winning classical pianist who has performed solo recitals and with orchestras across the nation."
                    details="to be updated"
                    setActiveDetails={setActiveDetails}
                    setActiveTitle={setActiveTitle}
                    setActiveDescription={setActiveDescription}
                  ></EducationItem>
                  <EducationItem
                    title="Awards - Academics"
                    description="Top performer on math and coding competitions."
                    details="to be updated"
                    setActiveDetails={setActiveDetails}
                    setActiveTitle={setActiveTitle}
                    setActiveDescription={setActiveDescription}
                  ></EducationItem>
                  <EducationItem
                    title="Awards - Dance"
                    description="Won regional awards in group and trio ballet and Chinese folk dances."
                    details="to be updated"
                    setActiveDetails={setActiveDetails}
                    setActiveTitle={setActiveTitle}
                    setActiveDescription={setActiveDescription}
                  ></EducationItem>

              </div>
        <div className="educationhighlight-background">
          <h1>{activeTitle}</h1>
          <h4>{activeDescription}</h4>
          <p>{activeDetails}</p>
          <p>{placeholder}</p>
        </div>
      </div>
    </div>
  );
}
