"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { furius } from "@/app/fonts";
import Image from "next/image";
import "./headerbar.css";

export const Headerbar = () => {
  const [tog, setToggle] = useState(false);
  const checkBoxRef = useRef(null);

  useEffect(() => {
    if (checkBoxRef.current) {
      checkBoxRef.current.checked = tog;
    }
  }, [tog]);

  const handleToggle = () => {
    setToggle(!tog);
  };

  const handleContactToggle = () => {
    setToggle(!tog);
    document.getElementById("contact").scrollIntoView()
  };

  return (
    //height is 134px normal, 104 sm
    <div className="fixed w-full z-50">
      <div className="px-[10px] bg-back/[.9]">
        <div className="flex flex-row justify-between items-center">
          <Link
            href="/"
            className="relative h-[130px] w-[130px] xs:h-[100px] xs:w-[100px] my-1"
          >
            <Image src="/logo.png" alt="Spice Mart Logo" width="500" height="500"/>
          </Link>
          <Navigation />
          <div className="hidden xs:contents">
            <input
              ref={checkBoxRef}
              id="checkbox"
              type="checkbox"
              onClick={handleToggle}
              className="hidden xs:block"
            />
            <label className="toggle" htmlFor="checkbox">
              <div id="bar1" className="bars" />
              <div id="bar2" className="bars" />
              <div id="bar3" className="bars" />
            </label>
          </div>
        </div>
      </div>
      <div className="h-1 bg-wte rounded-full xs:hidden" />
      {!tog && <div className="h-0.5 bg-wte rounded-full hidden xs:block" />}
      {tog && (
        <>
          <div className="hidden xs:contents">
            <div className="flex flex-col">
              <Link
                onClick={handleToggle}
                href="/"
                className={`text-wte bg-back/[.9] px-[10px] p-5 ${furius.variable} font-furius cta text-[20px] active:bg-prwte transition duration-250 ease-in-out`}
              >
                Home
              </Link>
              <Link
                onClick={handleToggle}
                href="/item-menu"
                className={`text-wte bg-back/[.9] px-[10px] p-5 ${furius.variable} font-furius cta text-[20px] active:bg-prwte transition duration-250 ease-in-out`}
              >
                Menu
              </Link>
              <Link
                onClick={handleToggle}
                href="/about"
                className={`text-wte bg-back/[.9] px-[10px] p-5 ${furius.variable} font-furius cta text-[20px] active:bg-prwte transition duration-250 ease-in-out`}
              >
                About
              </Link>
              <button
                onClick={handleContactToggle}
                className={`text-wte p-5 px-[10px] text-left bg-back/[.9] active:bg-prwte transition duration-250 ease-in-out ${furius.variable} font-furius cta text-[20px]`}
              >
                Contact
              </button>
              <Link
                onClick={handleToggle}
                href="/order"
                className={`text-wte ${furius.variable} px-[10px] p-5 bg-back/[.9] font-furius cta text-[20px] active:bg-prwte transition duration-250 ease-in-out`}
              >
                Order
              </Link>
              <div className="h-0.5 bg-wte rounded-full" />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

const Navigation = () => {
  return (
    <div className="flex flex-row space-x-[5vw] text-xl xs:hidden">
      <Link
        href="/"
        className={`text-wte ${furius.variable} font-furius cta text-[20px]`}
      >
        <span className="hover-underline-animation hover:text-prwte">Home</span>
      </Link>
      <Link
        href="/item-menu"
        className={`text-wte ${furius.variable} font-furius cta text-[20px]`}
      >
        <span className="hover-underline-animation hover:text-prwte">Menu</span>
      </Link>
      <Link
        href="/about"
        className={`text-wte ${furius.variable} font-furius cta text-[20px]`}
      >
        <span className="hover-underline-animation hover:text-prwte">
          About
        </span>
      </Link>
      <button
        onClick={() => document.getElementById("contact").scrollIntoView()}
        className={`text-wte ${furius.variable} font-furius cta text-[20px]`}
      >
        <span className="hover-underline-animation hover:text-prwte">
          Contact
        </span>
      </button>
      <Link
        href="/order"
        className={`text-wte ${furius.variable} font-furius cta text-[20px] pr-5`}
      >
        <span className="hover-underline-animation hover:text-prwte">
          Order
        </span>
      </Link>
    </div>
  );
};

export default Headerbar;
