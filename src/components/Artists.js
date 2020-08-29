import React, { Component } from "react";
import ARTISTSPROFILES from "../data/artistsProfiles";
import FACEBOOK_LOGO from "../data/images/social_media_icons/facebook.png";
import INSTAGRAM_LOGO from "../data/images/social_media_icons/instagram.png";
import TWITTER_LOGO from "../data/images/social_media_icons/twitter.png";
import DEFAULT_IMG from "../data/images/artist_photos/profile.png";

import "./artists.css";

class Artist extends Component {
  render() {
    const {
      name,
      //image,
      //description,
      //website,
      facebook,
      twitter,
      instagram,
    } = this.props.artistProfile;

    let facebookLink = (
      <a href={facebook} target="_blank" rel="noopener noreferrer">
        <img
          alt="facebook_logo"
          src={FACEBOOK_LOGO}
          className={
            facebook === "" ? "disabledSocialMedia" : "enabledSocialMedia"
          }
        ></img>
      </a>
    );

    let instagramLink = <div>Test</div>;
    let twitterLink = <div>Test</div>;

    return (
      <div>
        <p>{name}</p>
        <img
          alt=""
          src={DEFAULT_IMG}
          style={{ width: 200, height: 200, borderRadius: 100 }}
        />
        {facebookLink}

        <a href={instagram} target="_blank" rel="noopener noreferrer">
          <img
            alt="instagram_logo"
            src={INSTAGRAM_LOGO}
            className="socialMediaImg"
          ></img>
        </a>
        <a href={twitter} target="_blank" rel="noopener noreferrer">
          <img
            alt="twitter_logo"
            src={TWITTER_LOGO}
            className="socialMediaImg"
          ></img>
        </a>
      </div>
    );
  }
}

class Artists extends Component {
  render() {
    return (
      <div>
        <h2>Artists of the Ruberto Ostberg Gallery</h2>
        <h4>
          The Ruberto Ostberg Gallery is host to some of the finest artists from
          the Calgary area and around the world.
        </h4>
        <div>
          {ARTISTSPROFILES.map((ARTIST_PROFILE) => {
            return (
              <Artist key={ARTIST_PROFILE.id} artistProfile={ARTIST_PROFILE} />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Artists;
