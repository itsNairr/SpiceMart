"use client"

import Loading from "./loading";
import { redirect } from "next/navigation";
import React, { useState, useEffect } from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useRouter } from "next/navigation";
import Logout from "../portal/Logout";
import { IoArrowBack } from "react-icons/io5";
import Link from "next/link";
import { withPageAuthRequired } from '@auth0/nextjs-auth0/client';

export default withPageAuthRequired(function EditItem({ id, title, description, type, price, mprice, lprice, xlprice }) {
  const [tog, setTog] = useState(false);
  const [newTitle, setTitle] = useState(title);
  const [newDescription, setDescription] = useState(description);
  const [newType, setType] = useState(type);
  const [newPrice, setPrice] = useState(price);
  const [newMPrice, setMPrice] = useState(mprice);
  const [newLPrice, setLPrice] = useState(lprice);
  const [newXLPrice, setXLPrice] = useState(xlprice);
  const { user, isLoading } = useUser();
  const router = useRouter();

  useEffect(() => {
    //Initial tog check
    setTog(type === "Non-Veg Curries" || type === "Veg Curries");
  }, []);

  const handleToggle = (event) => {
    //3 prices for curries
    setTog(
      event.target.value === "Non-Veg Curries" ||
        event.target.value === "Veg Curries"
    );
    if (
      event.target.value === "Non-Veg Curries" ||
      event.target.value === "Veg Curries"
    ) {
      setPrice("");
    } else {
      setMPrice("");
      setLPrice("");
      setXLPrice("");
    }
    setType(event.target.value);
  };

  const handleSubmit = async function (e) {
    e.preventDefault();
    try {
      const res = await fetch(`/api/protected/items/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          newTitle,
          newDescription,
          newType,
          newPrice,
          newMPrice,
          newLPrice,
          newXLPrice,
        }),
      });

      if (res.ok) {
        router.refresh();
        router.push("/portal/manage/item-menu");
      } else {
        throw new Error("Failed to update item");
      }
    } catch (error) {
      console.log(error);
    }
  };
  if (isLoading) return <Loading />;
  if (!user) {
    redirect("/portal");
  }

  return (
    <div className="bg-back min-h-screen max-h-full pt-[154px] xs:pt-[124px]">
      <div className="px-5 pb-20 flex flex-row justify-between items-center">
      <Link
          href="/portal/manage/item-menu"
          className="flex flex-row text-[33px] items-center text-wte transition duration-250 ease-in-out hover:text-prwte hover:scale-110"
        >
          <IoArrowBack />
          <span className="text-body font-semibold">Back</span>
        </Link>
        <Logout />
      </div>

      <form onSubmit={handleSubmit} className="px-[70px] sm:px-[50px] xs:px-[30px] flex flex-col">
        <input
          onChange={(e) => setTitle(e.target.value)}
          value={newTitle}
          className="mb-4 border-2 rounded-lg bg-wte text-back py-2 px-8 placeholder:font-semibold placeholder-gray-500 font-semibold"
          type="text"
          placeholder="Item Name"
          required
        ></input>
        <textarea
          onChange={(e) => setDescription(e.target.value)}
          value={newDescription}
          className="mb-4 border-2 rounded-lg bg-wte text-back py-2 px-8 placeholder:font-semibold placeholder-gray-500 font-semibold"
          type="text"
          placeholder="Description"
        ></textarea>
        <select
          className="mb-4 border-2 rounded-lg bg-wte text-back py-2 px-8 font-semibold"
          placeholder="Price"
          onChange={handleToggle}
          value={newType}
          required
        >
          <option value="Rice">Rice</option>
          <option value="Bread & Single Items">Bread & Single Items </option>
          <option value="Dosa">Dosa</option>
          <option value="Non-Veg Curries">Non-Veg Curries</option>
          <option value="Veg Curries">Veg Curries</option>
          <option value="Kerala Street Food Specials">
            Kerala Street Food Specials
          </option>
          <option value="Snacks">Snacks</option>
          <option value="Beverages">Beverages</option>
        </select>
        {!tog && (
          <>
            <input
              onChange={(e) => setPrice(e.target.value)}
              value={newPrice}
              className="mb-4 border-2 rounded-lg bg-wte text-back py-2 px-8 placeholder:font-semibold placeholder-gray-500 font-semibold"
              type="text"
              placeholder="Price"
              required
            ></input>
          </>
        )}
        {tog && (
          <>
            <input
              onChange={(e) => setMPrice(e.target.value)}
              value={newMPrice}
              className="mb-4 border-2 rounded-lg bg-wte text-back py-2 px-8 placeholder:font-semibold placeholder-gray-500 font-semibold"
              type="text"
              placeholder="Medium Price"
              required
            ></input>

            <input
              onChange={(e) => setLPrice(e.target.value)}
              value={newLPrice}
              className="mb-4 border-2 rounded-lg bg-wte text-back py-2 px-8 placeholder:font-semibold placeholder-gray-500 font-semibold"
              type="text"
              placeholder="Large Price"
              required
            ></input>

            <input
              onChange={(e) => setXLPrice(e.target.value)}
              value={newXLPrice}
              className="mb-4 border-2 rounded-lg bg-wte text-back py-2 px-8 placeholder:font-semibold placeholder-gray-500 font-semibold"
              type="text"
              placeholder="Extra Large Price"
              required
            ></input>
          </>
        )}
        <button
          type="submit"
          className="bg-wte text-back font-semibold p-3 text-body rounded-full transition duration-250 ease-in-out hover:bg-prwte hover:text-wte"
        >
          Update
        </button>
      </form>
    </div>
  );
})
