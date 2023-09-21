"use client";

import React from "react";
import { HiMail } from "react-icons/hi";
import { AiFillPhone } from "react-icons/ai";

function Contact(props) {
  return (
    <div className="mb-8 px-3 flex flex-col">
      <span className="text-footft sm:text-footst xs:text-footst font-bold mb-5">
        Contact
      </span>
      <div className="mb-2 sm:text-foottxts xs:text-foottxts flex flex-row items-center gap-2">
        Store: <AiFillPhone /> <div>+1 (705)-733-1990 </div>
      </div>
      <div className="mb-2 sm:text-foottxts xs:text-foottxts flex flex-row items-center gap-2">
        Catering: <AiFillPhone /> <div>+1 (705)-817-4078 </div>
      </div>
      <div className="mb-6 sm:text-foottxts xs:text-foottxts hover:underline">
        <a
          className="flex flex-row items-center gap-2"
          href="mailto:spicemartbarrie@gmail.com"
        >
          <HiMail /> spicemartbarrie@gmail.com
        </a>
      </div>
      <div className="hidden xs:contents">
        <div>
          <a
            target="_blank"
            href="tel:+1(705)-733-1990"
            className="bg-wte text-back font-semibold p-3 px-6 rounded-full sm:text-foottxts xs:text-foottxts transition duration-250 ease-in-out hover:bg-prwte hover:text-wte"
          >
            Call
          </a>
        </div>
      </div>
    </div>
  );
}

//+1 (705)-733-1990
//spicemartbarrie@gmail.com

export default Contact;
