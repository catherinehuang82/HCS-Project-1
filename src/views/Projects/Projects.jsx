import React from "react";
import Project from "../../components/Project/Project";
import Cantabile from "../../assets/musicnote2.png";
import Mickey from "../../assets/mickey4.png";

export default function ProjectsScreen() {
  return (
    <div className="screen-background">
      <Project
        title = "Cantabile"
        link="https://github.com/musicalcat/Cantabile"
        description="Cantabile! is a music notation software that plays the musical notes that the user places. Users can develop an interest in music through our software, which helps them learn how to read and compose music on a staff and gives them a space to see their creativity come to life without needing a musical instrument. Aside from showing how to read notes on a staff, our software can also serve as helpful ear training practice for music students."
        source={Cantabile}
      ></Project>
      <Project
        title = "World of Color"
        link="https://github.com/musicalcat/World-Of-Color"
        source={Mickey}
        description="Inspired by the closing of amusement parks and cancellation of social events amidst the COVID-19 pandemic, 'World of Color' is an interactive virtual simulation of the beloved night-time Disney show. Users create virtual water fountains with colors and shapes of their own choosing, and there is also a feature of suspending the fountains in air."
      ></Project>
    </div>
  );
}
