import React from "react";
import map from "../data/images/map.jpg";

function Contact() {
  return (
    <div>
      <img src={map} alt="Map"></img>
      <h2>
        <b>Subscribe to our mailing list:</b>
      </h2>
      <form>
        <label>
          Email Address
          <br />
          <input type="text" email="email" />
        </label>
        <br />
        <br />
        <label>
          First Name
          <br />
          <input type="text" firstName="firstName" />
        </label>
        <br />
        <br />
        <label>
          Last Name
          <br />
          <input type="text" lastName="lastName" />
        </label>
        <br />
        <input type="submit" value="Subscribe" />
      </form>

      <h2>
        <b>
          For more information on any of our artists please contact us below.
        </b>
      </h2>
      <form>
        <label>
          Name:
          <br />
          <input type="text" name="name" />
        </label>
        <br />
        <label>
          Email:
          <br />
          <input type="text" email="email" />
        </label>
        <br />
        <label>
          Message:
          <br />
          <textarea>Write your message here.</textarea>
        </label>
      </form>
    </div>
  );
}

export default Contact;
