import React, { useState } from "react";
import "./Media.css";
import { Link } from "react-router-dom";

function Media(props) {

  return (
        <Link
            to={{ pathname: props.link }}
            className="media-background"
            target = "_blank"
            >
            <div className="media-image">
              <img className="media-image" src={props.source} />
            </div>
        <div className = "media-info">
                onMouseEnter={() => {
                  props.setActiveDescription(props.description);
                }}
                <h4>{props.description}</h4>
                <h1>{props.title}</h1>
        </div>
        </Link>
    );
}
