import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const profileData = [
  {
    name: "Jie",
    imageUrl: "jie.png",
    role: "Developer",
    profileLink: "/Profile/Jie",
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
