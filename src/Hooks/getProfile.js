import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


const profileData = [
  {
    name: "Jie",
  imageUrl: "jie.png",
  role:"Developer",
  profileLink: "/Profile/Jie"
  },
  {
  name: "Jerry",
  imageUrl: "jerry.png",
  role:"Developer",
  profileLink: "/Profile/Jerry"
  },
  {
    name: "Chris",
    imageUrl: "chris.png",
    role:"Developer",
    profileLink: "/Profile/Chris"
  },
]

const useGetProfileUsingParam = () => {
  
  const [profile, setProfile] = useState({});

  const {name} = useParams();


  useEffect(()=> {

    console.log(name)

    setProfile(profileData.filter(profile => {
      return profile.name === name
    })
  )}, [])

  if(profile.length>0){
    return profile[0];
  } else {
    return false;
  }

};


const useGetAllProfiles = () => {

  const [profilesData, setProfilesData] = useState([]);

  useEffect(()=> {
    setProfilesData(profileData)
  }, [])

  return profilesData;
};

export { useGetProfileUsingParam, useGetAllProfiles };
