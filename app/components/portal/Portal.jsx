import React from "react";
import Link from "next/link";
import { mystery_quest } from "../../fonts";
import { useUser } from "@auth0/nextjs-auth0/client";
import { redirect } from "next/dist/server/api-utils";
import Loading from "../../portal/loading";
import Logout from "./Logout";

 function Portal(props) {
  const { user, isLoading } = useUser();
  if (isLoading) return <Loading />;
  if (!user) {
    redirect("/portal");
  }
  return (
    <div className="bg-back min-h-screen max-h-full pt-[154px] xs:pt-[124px]">
      <div className="pr-5 flex flex-row justify-end">
        <Logout />
      </div>
      <div className="pt-[50px]">
        <span
          className={`text-[65px] sm:text-[50px] xs:text-[40px] text-wte flex justify-center ${mystery_quest.variable} font-quest`}
        >
          Welcome
        </span>
        <div className="pt-[60px] text-wte flex flex-row xs:flex-col gap-12 justify-evenly items-center">
          <div>
            <Link
              href="/portal/manage/item-menu"
              className="bg-wte text-back font-semibold p-5 rounded-full transition duration-250 ease-in-out hover:bg-prwte hover:text-wte"
            >
              Manage Menu Items
            </Link>
          </div>
          <div>
            <button
              onClick={() => alert("Coming Soon")}
              className="bg-wte text-back font-semibold p-5 rounded-full transition duration-250 ease-in-out hover:bg-prwte hover:text-wte"
            >
              Manage Updates
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portal;
