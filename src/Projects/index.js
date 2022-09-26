import "../App.css";
import TrumpImage from "../assets/Trump.png";
import CP2077 from "../assets/CP2077.png";
import OceanScene from "../assets/OceanProject.png";
import ProfilePic from "../assets/person.png";
import ReturnIcon from "../assets/ReturnIcon.png";
import React, { useState } from "react";
import Background from "../assets/ProjectBackground.png";
import { Button } from "react-bootstrap";
import useAudio from "../Hooks/useAudio";
import cyberMusic from "../assets/EpicCyberpunk.mp3";

import PauseIcon from "../assets/pause-button.png";
import PlayIcon from "../assets/play-button.png";

let ProjectsData = [
  {
    projectName: "Hackathon",
    projectDescription: "This is a project I made",
    img: TrumpImage,
  },
  {
    projectName: "Project 2",
    projectDescription: "This is another project",
    img: CP2077,
  },
  {
    projectName: "Floatation tank project",
    projectDescription: "This is a scene I made for floatation tank",
    img: OceanScene,
  },
];

const ProjectView = (props) => {
  return (
    <div className="Project-View">
      <h1
        style={{
          color: "white",
          textAlign: "left",
          fontWeight: "lighter",
          marginBottom: "3.5rem",
          marginTop: "4rem",
        }}
      >
        {props.projectName}
      </h1>
      <img className="Project-Image" src={props.imageSrc} alt="" />
      <p className="Project-Description">{props.projectDescription}</p>
    </div>
  );
};

const Projects = () => {
  const [project, setCurrentProject] = useState(ProjectsData[0]);
  const [fade, setFade] = useState(false);
  const [playing, setPlay] = useAudio(cyberMusic);
  const OnClickProjectBtn = (data) => {
    setFade(false);
    setTimeout(() => {
      setCurrentProject(data);
    }, 405);
    setTimeout(() => {
      setFade(true);
    }, 460);
  };

  return (
    <div className="Project-Page">
      <div className="Project-Left">
        <div
          style={{
            position: "absolute",
            marginLeft: "2rem",
            marginTop: "2rem",
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <img src={ReturnIcon} style={{ width: "50px", height: "50px" }} />
          <h1
            style={{
              color: "white",
              position: "relative",
              fontWeight: "lighter",
              marginLeft: "15px",
            }}
          >
            Projects
          </h1>
        </div>

        <div className="Project-Buttons">
          {ProjectsData.map(function (obj, idx) {
            return (
              <Button
                bsPrefix="bg-Project-Button"
                key={idx}
                onClick={() => OnClickProjectBtn(obj)}
              >
                {obj.projectName}
              </Button>
            );
          })}
        </div>
        <div
          className={fade ? "fadeIn" : "fadeOut"}
          style={{ width: "75%", backgroundColor: "rgb(30,129,176, 0.2)" }}
        >
          <ProjectView
            projectName={project.projectName}
            imageSrc={project.img}
            projectDescription={project.projectDescription}
          />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "25%",
        }}
      >
        <img className="Profile-Pic" src={ProfilePic} />
        <Button
          style={{
            width: "85px",
            height: "85px",
            margin: "50px",
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
            backgroundColor: "transparent",
            border: "none",
          }}
          onClick={() => setPlay(!playing)}
        >
          <img
            src={playing ? PauseIcon : PlayIcon}
            style={{
              width: "85px",
              height: "85px",
            }}
          />
        </Button>
      </div>
    </div>
  );
};

export default Projects;
