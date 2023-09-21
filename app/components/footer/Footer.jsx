"use client";

import React from "react";
import Location from "./Location";
import Open from "./Open";
import Contact from "./Contact";
import QL from "./QL";
import {
  BiLogoWhatsapp,
  BiLogoInstagram,
  BiLogoFacebook,
} from "react-icons/bi";

function Footer(props) {
  return (
    <div id="contact" className="bg-back z-50">
      <div className="h-1 bg-wte rounded-full xs:hidden" />
      <div className="h-0.5 bg-wte rounded-full hidden xs:block" />
      <div className="py-5 w-full flex flex-row flex-wrap justify-evenly text-wte">
        <Location />
        <Open />
        <Contact />
        <QL />
      </div>
      <div className="flex flex-col items-center pb-3">
        <div className="text-wte flex flex-row text-[40px] pb-10">
          <a
            className="px-5 transition duration-250 ease-in-out hover:text-prwte hover:scale-125"
            target="_blank"
            href="https://www.facebook.com/profile.php?id=100094581322517"
          >
            <BiLogoFacebook />
          </a>
          <a
            className="px-5 transition duration-250 ease-in-out hover:text-prwte hover:scale-125"
            target="_blank"
            href="https://www.instagram.com/spicemart_barrie/?hl=en"
          >
            <BiLogoInstagram />
          </a>
          <a
            className="px-5 transition duration-250 ease-in-out hover:text-prwte hover:scale-125"
            target="_blank"
            href="https://chat.whatsapp.com/LhSSKqcaWz70EMsENHHAsL"
          >
            <BiLogoWhatsapp />
          </a>
        </div>
        <span className="text-wte sm:text-foottxts xs:text-foottxts">
          Copyright © 2023 Spice Mart
        </span>
        <span className="text-wte sm:text-foottxts xs:text-foottxts">
          Designed & Created by{" "}
          <a
            className="hover:underline"
            href="https://www.linkedin.com/in/harinairr/"
            target="blank_"
          >
            Hari Nair
          </a>{" "}&{" "}
          <a
            className="hover:underline"
            href="https://www.linkedin.com/in/joel-kayyalakam/"
            target="blank_"
          >
            Joel Kayyalakam
          </a>
        </span>
      </div>
    </div>
  );
}

export default Footer;
