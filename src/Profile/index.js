/* eslint-disable jsx-a11y/alt-text */
import "../App.css";
import TrumpImage from "../assets/Trump.png";
import CP2077 from "../assets/CP2077.png";
import OceanScene from "../assets/OceanProject.png";
import ProfilePic from "../assets/person.png";
import ReturnIcon from "../assets/ReturnIcon.png";
import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
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

const Profile = () => {
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
    <div className="Whole-Page">
      <div className="Project-Left">
        <Container>
          <Row>
            <Col>
              <Row>
                {" "}
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
                  <img
                    src={ReturnIcon}
                    styles={{ width: "50px", height: "50px" }}
                  />
                  <h1
                    style={{
                      color: "white",
                      position: "relative",
                      fontWeight: "lighter",
                      marginLeft: "15px",
                    }}
                  >
                    About / Skills
                  </h1>
                </div>
              </Row>
              <Row style={{ marginTop: "175px" }}>
                <h2>About me:</h2>
                <p>
                  aboutme about me about me about me about me. about me about
                  eme about me
                </p>
              </Row>
              <Row>
                <h2> Role:</h2>
                <p> - Software Engineer</p>
              </Row>
              <Row>
                <h2> Qualifications:</h2>
                <p> - Bachelor</p>
                <p> - Master</p>
              </Row>
              <Row>
                <h2> Experience:</h2>
                <p> - Job A</p>
                <p> - Job B</p>
              </Row>
            </Col>
            <Col>
              <Row style={{ marginTop: "175px" }}>
                <h2>Skills</h2>
              </Row>
            </Col>
          </Row>
        </Container>
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

export default Profile;
