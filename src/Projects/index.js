import "../App.css";
import TrumpImage from "../assets/Trump.png";
import CP2077 from "../assets/CP2077.png";
import OceanScene from "../assets/OceanProject.png";
import ReturnIcon from "../assets/ReturnIcon.png";
import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import SelectBtn from "./SelectionBtn.js";
import AudioBtn from "./AudioBtn.js";
import MovingProfile from "./MovingProfile.js";

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

const ProjectsScreen = () => {
  const [project, setCurrentProject] = useState(undefined);
  const [profile, setProfile] = useState(undefined);
  const [projects, setProjects] = useState(undefined);
  const { name } = useParams();
  let Profiles = require("../Data/ProfileData.json");

  useEffect(() => {
    var jsonProfile = Profiles["data"].find((o) => o.name == name);
    setProjects(jsonProfile["projects"]);
    setProfile(jsonProfile);
  });

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
            {projects &&
              projects.map(function (obj, idx) {
                return (
                  <SelectBtn
                    key={idx}
                    projectName={obj.projectName}
                    index={idx}
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
              {project != undefined && (
                <ProjectView
                  projectName={project.projectName}
                  imageSrc={require("../assets/" + project.projectImage)}
                  projectDescription={project.projectDescription}
                />
              )}
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
          {profile && <MovingProfile imageUrl={profile.imageUrl} />}

          <AudioBtn />
        </div>
      </div>
      <div className="Nav-Bar">
        <NavButton text="Home" href="/" />
        <NavButton text="Projects" href={"/projects/" + name} />
        <NavButton text="Profile" href={"/profile/" + name} />
      </div>
    </div>
  );
};

const NavButton = (props) => {
  return (
    <a href={props.href}>
      <motion.button
        whileHover={{ scale: 1.1, color: "#FFFFFF" }}
        className="Nav-Button"
      >
        {props.text}
      </motion.button>
    </a>
  );
};

export default ProjectsScreen;
