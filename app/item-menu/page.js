import React from "react";
import { mystery_quest } from "../fonts";
import MenuClient from "../components/menulist/MenuClient";

export function ItemMenu(props) {
  return (
    <div className="bg-back min-h-screen max-h-full pt-[144px] ">
      <div
        className={`text-wte text-[85px] sm:text-[60px] xs:text-[50px] text-center mb-[60px] ${mystery_quest.variable} font-quest underline decoration-dotted underline-offset-[40px] sm:underline-offset-[25px] xs:underline-offset-[5px]`}
      >
        Menu
      </div>
      <div className="flex flex-col w-full justify-evenly text-wte flex-wrap text-[55px] gap-3 sm:text-[45px] xs:text-[35px]">
        <div className="flex flex-col m-6">
          <div className={`${mystery_quest.variable} font-quest text-center`}>Rice</div>
          <MenuClient type={"Rice"}/>
        </div>
        <div className="flex flex-col m-6">
          <span className={`${mystery_quest.variable} font-quest text-center`}>
            Bread & Single Items
          </span>
          <MenuClient type={"Bread & Single Items"} />
        </div>
        <div className="flex flex-col m-6">
          <span className={`${mystery_quest.variable} font-quest text-center`}>Dosa</span>
          <MenuClient type={"Dosa"} />
        </div>
        <div className="flex flex-col m-6">
          <span className={`${mystery_quest.variable} font-quest text-center`}>
            Non-Veg Curries
          </span>
          <MenuClient type={"Non-Veg Curries"} />
        </div>
        <div className="flex flex-col m-6">
          <span className={`${mystery_quest.variable} font-quest text-center`}>
            Veg Curries
          </span>
          <MenuClient type={"Veg Curries"} />
        </div>
        <div className="flex flex-col m-6">
          <span className={`${mystery_quest.variable} font-quest text-center`}>
            Kerala Street Food Specials
          </span>
          <MenuClient type={"Kerala Street Food Specials"} />
        </div>
        <div className="flex flex-col m-6">
          <span className={`${mystery_quest.variable} font-quest text-center`}>Snacks</span>
          <MenuClient type={"Snacks"} />
        </div>
        <div className="flex flex-col m-6">
          <span className={`${mystery_quest.variable} font-quest text-center`}>Beverages</span>
          <MenuClient type={"Beverages"} />
        </div>
      </div>
    </div>
  );
};

export default ItemMenu;