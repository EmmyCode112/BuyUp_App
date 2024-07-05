import React from 'react'
import "./Team.css";
import { team } from "../../../assets/assets";
import Team_display from './Team_display';

const Team_item = () => {
  return (
    <section >
    <h5 className="text-[tomato] my-5 text-[15px] ">Our Team</h5>
    <div className="container grid flexible gap-[40px]">
      {team.map((team, index) => (
        <Team_display
          key={index}
          imgURL={team.imgURL}
          Name={team.Name}
          Position={team.position}
          SocialOne={team.socialOne}
          SocialTre={team.socialTre}
          SocialTwo={team.socialTwo}
        />
      ))}
    </div>
  </section>
  )
}

export default Team_item
