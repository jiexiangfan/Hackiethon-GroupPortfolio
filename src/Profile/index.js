/* eslint-disable jsx-a11y/alt-text */
import "../App.css";
import ProfilePic from "../assets/chris.png";
import ReturnIcon from "../assets/ReturnIcon.png";
import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import useAudio from "../Hooks/useAudio";
import cyberMusic from "../assets/EpicCyberpunk.mp3";
import { motion } from "framer-motion";
import AudioBtn from "../Projects/AudioBtn";
import MovingProfile from "../Projects/MovingProfile";

const Profile = () => {
  return (
    <div className="Whole-Page">
      <div className="Project-Page">
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
                  </div>
                </Row>
                <Row style={{ marginTop: "175px" }}>
                  <h1>About me:</h1>
                  <p>
                    -> I am student software engineer and I love to code
                    everyday.
                  </p>
                </Row>
                <Row>
                  <h1> Role:</h1>
                  <p> -> Developer</p>
                </Row>
                <Row>
                  <h1> Qualifications:</h1>
                  <p>
                    {" "}
                    -> Master of Information Technology (Software Development)
                  </p>
                </Row>
                <Row>
                  <h1> Experience:</h1>
                  <p> -> Frontend Developer</p>
                  <p> -> Part-time web developer</p>
                </Row>
              </Col>
              <Col>
                <Row style={{ marginTop: "175px" }}>
                  <h1>Skills</h1>
                </Row>
                <Row>
                  <p>-> JavaScript 🔥</p>
                  <p>-> CSS 🔥</p>
                  <p>-> HTML 🔥</p>
                  <p>-> React 👍</p>
                  <p>-> Angular 👍</p>
                  <p>-> TypeScript 👍</p>
                  <p>-> C# 👍</p>
                  <p>-> Java 👍</p>
                  <p>-> MongoDB 👍</p>
                  <p>-> SQL 👍</p>
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

export default Profile;
