import React from "react";
import { mystery_quest } from "../fonts";
import Image from "next/image";
import { closeMongoDB } from "@/libs/mongo";

export default async function About() {
  // await closeMongoDB();
  return (
    <div className="bg-back min-h-screen max-h-full pt-[144px]">
      <div
        className={`text-wte text-[85px] sm:text-[60px] xs:text-[50px] text-center mb-[100px] xs:mb-[60px] ${mystery_quest.variable} font-quest underline decoration-dotted underline-offset-[40px] sm:underline-offset-[25px] xs:underline-offset-[5px]`}
      >
        {"About"}
      </div>
      <div className="flex flex-row justify-evenly flex-wrap items-center px-6">
        <div className="relative h-auto w-[700px] sm:w-[550px] xs:w-[400px] mb-12">
          <Image
            src="/spicemart.jpeg"
            alt="Spice Mart Store"
            width="1000"
            height="1000"
            className="rounded-xl"
          />
        </div>
        <p className="w-[900px] text-wte text-[30px] text-justify sm:text-[22px] xs:text-body mb-12">
          {
            "Transforming Dreams into Reality: Introducing Barrie's First South Indian Grocery and Takeout Establishment. Founded by Biju George, Spice Mart is committed to delivering an unparalleled experience with each and every visit. Whether you're exploring our extensive selection of South Indian groceries or savoring the comforting flavors of our freshly prepared takeout dishes, every moment at Spice Mart promises an unforgettable journey. Our mission is to create lasting memories for our valued customers, as we endeavor to transport the essence of Kerala to Canada through our culinary creations."
          }
        </p>
      </div>
    </div>
  );
}
