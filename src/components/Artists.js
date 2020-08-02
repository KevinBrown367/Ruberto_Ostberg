import React from "react";
import ARTISTSPROFILES from "../data/artistsProfiles";
import FACEBOOK_LOGO from "../data/images/social_media_icons/facebook.png";
import INSTAGRAM_LOGO from "../data/images/social_media_icons/instagram.png";
import TWITTER_LOGO from "../data/images/social_media_icons/twitter.png";

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
                <img alt="" src={ARTISTPROFILE.image} />
                <a
                  href={ARTISTPROFILE.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    alt="facebook_logo"
                    src={FACEBOOK_LOGO}
                    width="24px"
                  ></img>
                </a>
                <a
                  href={ARTISTPROFILE.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    alt="instagram_logo"
                    src={INSTAGRAM_LOGO}
                    width="24px"
                  ></img>
                </a>
                <a
                  href={ARTISTPROFILE.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img alt="twitter_logo" src={TWITTER_LOGO} width="24px"></img>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Artists;
