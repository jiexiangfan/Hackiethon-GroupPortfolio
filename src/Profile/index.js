/* eslint-disable jsx-a11y/alt-text */
import "../App.css";
import ReturnIcon from "../assets/ReturnIcon.png";
import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { motion } from "framer-motion";
import AudioBtn from "../Projects/AudioBtn";
import MovingProfile from "../Projects/MovingProfile";
import { useParams } from "react-router-dom";

const Profile = () => {
  const [profile, setProfile] = useState(undefined);
  const { name } = useParams();
  let Profiles = require("../Data/ProfileData.json");

  useEffect(() => {
    var jsonProfile = Profiles["data"].find((o) => o.name == name);
    setProfile(jsonProfile);
  });

  return (
    <div className="Whole-Page">
      <div className="Project-Page ">
        <div className="Project-Left">
          <Container className="Profile-Page">
            <Row style={{ paddingLeft: "2%" }}>
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
                    <a href="/">
                      <img
                        src={ReturnIcon}
                        styles={{ width: "50px", height: "50px" }}
                      />
                    </a>
                  </div>
                </Row>
                <Row style={{ marginTop: "175px" }}>
                  <h1>About me:</h1>
                  <p>{profile && profile.aboutMe}</p>
                </Row>
                <Row>
                  <h1> Role:</h1>
                  <p> {profile && profile.role}</p>
                </Row>
                <Row>
                  <h1> Qualifications:</h1>
                  <p>{profile && profile.qualifications}</p>
                </Row>
                <Row>
                  <h1> Experience:</h1>
                  {profile && profile.experience.map((item) => <p>→ {item}</p>)}
                </Row>
              </Col>
              <Col>
                <Row style={{ marginTop: "175px" }}>
                  <h1>Skills</h1>
                </Row>
                <Row>
                  {profile &&
                    profile.skills.map((skill) => (
                      <p>
                        → {skill.skillName} {skill.emoji}
                      </p>
                    ))}
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

export default Profile;
