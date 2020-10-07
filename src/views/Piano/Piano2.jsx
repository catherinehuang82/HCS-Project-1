import React, { useState }  from "react";
// import Media from "../../components/Media/Media";
import Youngarts from "../../assets/youngarts.png";
import Hhipc from "../../assets/hhipc.jpg";
import Sepf from "../../assets/sepf.jpg";
import Rachmaninoff from "../../assets/rachmaninoff.jpg";
import Beethoven from "../../assets/beethoven.jpg";
import Usasu from "../../assets/usasu.jpg";

import { Link } from "react-router-dom";
import "./Piano3.css";

function Media(props) {
  return (
    <Link
      to={{ pathname: props.link }}
      target = "_blank"
      >
    <div
      className="media-item"
      onMouseEnter={() => {
        props.setActiveTitle(props.title);
        props.setActiveDescription(props.description);
      }}
      >
      <div className="performance-info">
        <h4>{props.title}</h4>
      </div>
    </div>
  </Link>
    );
}
export default function PianoScreen() {
    const [activeTitle, setActiveTitle] = useState("");
    const [activeDescription, setActiveDescription] = useState("");

  return (
    <div className="screen-background">
      <div className="performance-background">
        <div className="timeline-background">
          <Media
            title = "Hilton Head International Piano Competition | March 2020"
            link="https://www.youtube.com/watch?v=rzC3IUacnzQ&ab_channel=HiltonHeadInternationalPianoCompetition"
            description="Performed an hour-long program in two rounds at the 2020 Hilton Head International Piano Competition in Hilton Head, South Carolina. Won the The Sascha Gorodnitzki Memorial Prize."
            setActiveDescription={setActiveDescription}
            setActiveTitle={setActiveTitle}
          ></Media>
          <Media
            title = "Rachmaninoff - Rhapsody on a Theme of Paganini, Op. 43 | March 2019"
            link="https://www.youtube.com/watch?v=zhNOkfrQ4eg&t=143s&ab_channel=CatherineHuang"
            description="Performed Sergei Rachmaninoff's Rhapsody on a Theme of Paganini, Op. 43 with the California Youth Symphony (conducted by Maestro Leo Eylar) on March 17th, 2019 at San Mateo Performing Arts Center."
            setActiveDescription={setActiveDescription}
            setActiveTitle={setActiveTitle}
            ></Media>
            <Media
            title = "Bosendorder and Yamaha USASU International Piano Competition | January 2019"
            link="https://www.youtube.com/watch?v=5h9KF2FYvII&t=394s&ab_channel=KatzinConcertHallASUMusic%2CDanceandTheatre"
            description="Performed two rounds of solo repertoire at the Bosendorder and Yamaha USASU International Piano Competition in Tempe, AZ. Won First Prize in the Yamaha Senior Division and the Best Performance of a Work by a Russian Composer Special Prize."
            setActiveDescription={setActiveDescription}
            setActiveTitle={setActiveTitle}
          ></Media>
          <Media
            title = "Brahms - Quartet No. 1 in G Minor, Op. 25 (IV: Rondo Alla Zingarese) | January 2019"
            link="https://www.youtube.com/watch?v=dw86xsFP1ls&ab_channel=YoungArts"
            description="Performed Johannes Brahms's Quartet No. 1 in G Minor, Op. 25 (IV. Rondo Alla Zingarese) at the New World Center in Miami on January 6, 2019 as part of National YoungArts Week."
            setActiveDescription={setActiveDescription}
            setActiveTitle={setActiveTitle}
          ></Media>
          <Media
            title = "Arthur Fraser International Piano Competition Winners Concert | June 2017"
            link="https://www.youtube.com/watch?v=babg6jeUhME&ab_channel=RisingStarSEPF"
            description="Performed at the Winners Concert of the Arthur Fraser International Piano Competition in Columbia, South Carolina as the First Prize and Young Jury Award winner."
            setActiveDescription={setActiveDescription}
            setActiveTitle={setActiveTitle}
          ></Media>
      </div>
        <div className="pianohighlight-background">
          <h1>{activeTitle}</h1>
          <p>{activeDescription}</p>
          <h4>Hover over a performance for details, and click to listen!</h4>
        </div>
      </div>
    </div>
  );
}
