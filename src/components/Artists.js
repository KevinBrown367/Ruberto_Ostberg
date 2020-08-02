import React from "react";
import ARTISTSPROFILES from "../data/artistsProfiles";

function Artists() {
  return (
    <div>
      <h2>Artists of the Ruberto Ostberg Gallery</h2>
      <h4>
        The Ruberto Ostberg Gallery is host to some of the finest artists from
        the Calgary area and around the world.
      </h4>
      <div>
        <div>
          {ARTISTSPROFILES.map((ARTISTPROFILE) => {
            return (
              <div>
                <p>{ARTISTPROFILE.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Artists;
