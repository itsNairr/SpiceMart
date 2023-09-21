import React from "react";
import { mystery_quest } from "./fonts";
import { closeMongoDB } from "@/libs/mongo";
import "./globals.css";

export default async function page() {
  // await closeMongoDB();
  return (
    <div>
      <div className="intro">
        <div className="pt-[134px] xs:pt-[104px] px-10 flex flex-col justify-center min-h-screen max-h-full">
          <h1
            className={`text-wte ${mystery_quest.variable} font-quest text-[90px] xs:text-[45px] sm:text-[60px]`}
          >
            {'Discover the taste of'}
            <br />
            {'South India.'}
          </h1>
          <h1 className={`text-wte text-[20px] xs:text-[15px] sm:text-[15px]`}>
            {'Visit Barrie\'s #1 South Indian store for takeout, grocery and catering services.'}
          </h1>
        </div>
      </div>
    </div>
  );
}

