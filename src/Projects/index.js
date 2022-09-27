import "../App.css";
import TrumpImage from "../assets/Trump.png";
import CP2077 from "../assets/CP2077.png";
import OceanScene from "../assets/OceanProject.png";
import ProfilePic from "../assets/person.png";
import ReturnIcon from "../assets/ReturnIcon.png";
import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import useAudio from "../Hooks/useAudio";
import cyberMusic from "../assets/EpicCyberpunk.mp3";
import PauseIcon from "../assets/pause-button.png";
import PlayIcon from "../assets/play-button.png";
import { useGetProfileUsingParam } from "../Hooks/getProfile";

import { AnimatePresence, motion, useAnimation } from "framer-motion";
import SelectBtn from "./SelectionBtn.js";
import AudioBtn from "./AudioBtn.js";
import MovingProfile from "./MovingProfile.js";

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
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 1,
      },
    },
    exit: { opacity: 0, transition: { duration: 1 } },
  };
  const child = {
    hidden: { x: 300 },
    show: { x: 0 },
    exit: { x: -300 },
  };

  const text = {
    hidden: { y: 150 },
    show: {
      y: 0,
      transition: {
        stiffness: 400,
      },
    },
    exit: { y: -200 },
  };

  return (
    <motion.div
      className="Project-View"
      key={props.projectName}
      variants={container}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <motion.h1
        style={{
          color: "white",
          textAlign: "left",
          marginBottom: "3.5rem",
          marginTop: "4rem",
          textDecorationLine: "underline",
        }}
        variants={child}
      >
        {props.projectName}
      </motion.h1>
      <motion.img
        className="Project-Image"
        src={props.imageSrc}
        alt=""
        variants={child}
      />
      <motion.p variants={text} className="Project-Description">
        {props.projectDescription}
      </motion.p>
    </motion.div>
  );
};

const Projects = () => {
  const [project, setCurrentProject] = useState(ProjectsData[0]);

  let foundProfile = useGetProfileUsingParam();
  useEffect(() => {
    console.log(foundProfile);
  }, []);

  return (
    <div className="Whole-Page">
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
                marginLeft: "15px",
              }}
            >
              Projects
            </h1>
          </div>

          <div className="Project-Buttons">
            {ProjectsData.map(function (obj, idx) {
              return (
                <SelectBtn
                  projectName={obj.projectName}
                  key={idx}
                  onClick={() => setCurrentProject(obj)}
                />
              );
            })}
          </div>
          <div
            style={{
              width: "75%",
              backgroundColor: "rgb(30,129,176, 0.2)",
              borderRadius: "15px",
            }}
          >
            <AnimatePresence>
              <ProjectView
                projectName={project.projectName}
                imageSrc={project.img}
                projectDescription={project.projectDescription}
              />
            </AnimatePresence>
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
          <MovingProfile ProfilePic={ProfilePic} />
          <AudioBtn />
        </div>
      </div>
      <div className="Nav-Bar">
        <NavButton text="Home" />
        <NavButton text="Projects" />
        <NavButton text="About" />
      </div>
    </div>
  );
};

const NavButton = (props) => {
  return (
    <motion.button
      whileHover={{ scale: 1.1, color: "white" }}
      className="Nav-Button"
    >
      {props.text}
    </motion.button>
  );
};

export default Projects;
