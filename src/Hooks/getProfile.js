import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const profileData = [
  {
    name: "Jie",
    imageUrl: "jie.png",
    role: "Software Engineer",
    profileLink: "/Profile/Jie",
    aboutMe:
      "I am a student software engineer who is passionate about creating new things. I am currently studying at the Monash University and I am looking for a full time role in the software industry. I am a fast learner and I am always looking to improve my skills. I am also a team player and I am always willing to help others.",
    qualifications: ["Bachelor of Software Engineering (Honours)"],
    skills: [
      {
        skillName: "Python",
        emoji: "🔥",
      },
      {
        skillName: "MongoDB",
        emoji: "🔥",
      },
      {
        skillName: "JavaScript",
        emoji: "👍",
      },
      {
        skillName: "MongoDB",
        emoji: "👍",
      },
      {
        skillName: "React",
        emoji: "👍",
      },
      {
        skillName: "Neo4j",
        emoji: "👍",
      },
      {
        skillName: "Cassandra",
        emoji: "👍",
      },
      {
        skillName: "Java",
        emoji: "👍",
      },

      {
        skillName: "Golang",
        emoji: "👍",
      },
    ],
    experience: ["Intern Consultant", "Frontend developer"],
    contact: [
      {
        platformName: "linkedin",
        contactLink: "https://www.linkedin.com/in/jiexiangfan/",
      },
    ],
    projects: [
      {
        projectName: "Researchify",
        projectImage: "jieProject_researchify.png",
        projectDescription:
          "Researchify is a web application that allows researchers to publish websites for their research profiles on GitHub pages. It targets researchers without any programming nor graphic design knowledge. It is a full-year project provided by Monash University.",
        projectLink: "https://github.com/Researchify/Researchify",
      },
    ],
  },

  {
    name: "Jerry",
    imageUrl: "jerry.png",
    role: "Software Engineer",
    aboutMe: "I am student software engineer and I love to code everyday.",
    qualifications: ["Bachelor of CS and SE"],
    experience: ["VR Game developer"],
    profileLink: "/Profile/Jerry",
  },

  {
    name: "Chris",
    imageUrl: "chris.png",
    role: "Developer",
    profileLink: "/Profile/Chris",
    aboutMe: "I am student software engineer and I love to code everyday.",
    qualifications: ["Master of Information Technology (Software Development)"],
    skills: [
      {
        skillName: "JavaScript",
        emoji: "🔥",
      },
      {
        skillName: "CSS",
        emoji: "🔥",
      },
      {
        skillName: "HTML",
        emoji: "🔥",
      },
      {
        skillName: "React",
        emoji: "👍",
      },
      {
        skillName: "Angular",
        emoji: "👍",
      },
      {
        skillName: "TypeScript",
        emoji: "👍",
      },
      {
        skillName: "C#",
        emoji: "👍",
      },
      {
        skillName: "Java",
        emoji: "👍",
      },
      {
        skillName: "MongoDB",
        emoji: "👍",
      },
      {
        skillName: "SQL",
        emoji: "👍",
      },
    ],
    experience: ["Frontend Developer", "Part-time web developer"],
    contact: [
      {
        platformName: "linkedin",
        contactLink: "https://www.linkedin.com/in/chrisyuen976/",
      },
    ],
    projects: [
      {
        projectName: "Exercise Map",
        projectImage: "chrisProject_exerciseMap.jpg",
        projectDescription:
          "Users can pick a location on the map and record the exercise they did. Users can log their activity, time and make comments to track their progress. Whether it is running, team sport, or gym, an emoji will automatically be generated. It is a JavaScript-based application and uses the Leaflet API.",
        projectLink: "https://exercise-map-by-chris.herokuapp.com/",
      },
      {
        projectName: "Communla Stickies Wall",
        projectImage: "chrisProject_stickiesWall.jpg",
        projectDescription:
          "Users can share a sticky note with a message for everyone to see. They can also choose the colour of their sticky note. They can share a joke, their thoughts, have a vent...etc. It is a react based application using MongoDB to save the note and colour data.",
        projectLink: "https://stickies-wall-by-chris.herokuapp.com/",
      },
    ],
  },
];

const useGetProfileUsingParam = () => {
  const [profile, setProfile] = useState({});

  const { name } = useParams();

  useEffect(() => {
    console.log(name);

    setProfile(
      profileData.filter((profile) => {
        return profile.name === name;
      })
    );
  }, []);

  if (profile.length > 0) {
    return profile[0];
  } else {
    return false;
  }
};

const useGetAllProfiles = () => {
  const [profilesData, setProfilesData] = useState([]);

  useEffect(() => {
    setProfilesData(profileData);
  }, []);

  return profilesData;
};

export { useGetProfileUsingParam, useGetAllProfiles };
