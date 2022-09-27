import "../App.css";
import CharacterSelect from "./Character-select";
import { useState, useEffect } from "react";
import { useGetAllProfiles, useGetProfileUsingParam } from "../Hooks/getProfile";

function Home() {
  let profileData = useGetAllProfiles();

  let foundProfile = useGetProfileUsingParam();


  useEffect(() => {
    console.log(profileData);

    console.log(foundProfile)

  });

  return (
    <div class="d-flex flex-column home-container">
      <h1 class="container title">
        Choose Your Developer <span class="dots__blink1">.</span>{" "}
        <span class="dots__blink2">.</span> <span class="dots__blink3">.</span>{" "}
      </h1>

      <div class="container d-flex flex-row justify-content-center mt-5 flex-wrap">
        {/* <div class="row"> */}

        {profileData.map((profile, index) => {
          let bgColour = "";

          if (index === 0) {
            bgColour = "bg-red";
          } else if (index === 1) {
            bgColour = "bg-blue";
          } else {
            bgColour = "bg-yellow";
          }

          return (
            <CharacterSelect
              bgClass={bgColour}
              props={profile}
              key={profile.name}
            ></CharacterSelect>
          );
        })}

        {/* </div> */}
      </div>
    </div>
  );
}

export default Home;
