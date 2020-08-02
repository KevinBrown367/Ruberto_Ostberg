import React from "react";
import rental from "../data/images/rentalInfo.jpg";

function Rentals() {
  return (
    <div>
      <img src={rental} alt="Rental information" />
      <p></p>
      <h3>Art and Gallery Rentals</h3>
      <p>
        The Ruberto Ostberg Gallery Art rentals are available for home staging
        and special events, please call us to inquire about pricing and details
        at 403.289.3388 during regular gallery hours.
      </p>
    </div>
  );
}

export default Rentals;
