"use client";

import React from "react";

function Location(props) {
  return (
    <div className="mb-8 px-3 flex flex-col">
      <p className="text-footft sm:text-footst xs:text-footst font-bold mb-5">
        Location
      </p>
      <span className="mb-8 sm:text-foottxts xs:text-foottxts">
        18 Cundles Rd E<br />
        Barrie, ON L4M 2Z5
      </span>
      <div>
        <a
          target="_blank"
          href="https://www.google.com/maps/place/Spice+Mart+South+Indian+Take+out+and+Grocery/@44.4060505,-79.7049904,17z/data=!3m1!4b1!4m6!3m5!1s0x882aa3a4b8443069:0x19d940c867b0cc04!8m2!3d44.4060467!4d-79.7024155!16s%2Fg%2F11k_4x0gmc?entry=ttu"
          className="bg-wte text-back font-semibold p-3 rounded-full sm:text-foottxts xs:text-foottxts transition duration-250 ease-in-out hover:bg-prwte hover:text-wte"
        >
          View Map
        </a>
      </div>
    </div>
  );
}

export default Location;
