import React from "react";
import { MdDelete } from "react-icons/md";
import { HiPencilAlt } from "react-icons/hi";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { IoIosAdd } from "react-icons/io";
import { withPageAuthRequired } from '@auth0/nextjs-auth0/client';

const getItems = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/protected/items`, {
      cache: "no-store",
      headers: {
        "Content-type": "application/json",
      }
    });
    if (!res.ok) {
      throw new Error("Failed to fetch items");
    }
    return res.json();
  } catch (error) {
    console.log("Error loading items: ", error);
  }
};

export default withPageAuthRequired(async function MenuList() {
  const router = useRouter();
  const result = await getItems();
  
  if(typeof result !== 'object' || result === null) {
    throw new Error('Did not resolve to an object');
  }

  const { items } = result;
  const removeItem = async (id) => {
    
    const confirmed = confirm(
      "Are you sure? You will not be able to undo this action."
    );
    if (confirmed) {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/protected/items?id=${id}`,
        {
          //delete
          method: "DELETE",
          credentials: "include",
          headers: {
            "Content-type": "application/json",
          }
        }
      );
      if (res.ok) {
        router.refresh();
      }
    }
  };

  if (items == "") {
    return (
      <>
        <div className="text-wte flex flex-row items-center text-[30px] justify-center">
          You currently have no items. Press{" "}
          <div className="text-wte transition duration-250 ease-in-out hover:text-prwte hover:scale-110">
            <Link
              href="/portal/manage/item-menu/add"
              className="flex flex-row items-center"
            >
              <IoIosAdd className="text-[74px]" />{" "}
              <span className="font-semibold">Add Item</span>
            </Link>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      {items.map((item) => (
        <div key={item.id} className="bg-wte p-4 rounded-lg flex flex-row justify-between mb-3">
          <div className="text-back">
            <h1 className="font-bold text-[24px]">{item.title}</h1>
            <h2 className="font-semibold">{item.type}</h2>
            <h2>{item.description}</h2>
            {item.price && <h2 className="font-bold">${item.price}</h2>}
            {!item.price && (
              <>
                <h2 className="font-bold">M: ${item.mprice}</h2>
                <h2 className="font-bold">L: ${item.lprice}</h2>
                <h2 className="font-bold">XL: ${item.xlprice}</h2>
              </>
            )}
          </div>
          <div className="text-back text-[30px] flex flex-col justify-between items-start">
            <button
              onClick={() => removeItem(item._id)}
              onPress={() => removeItem(item._id)}
              className="text-red-600 transition duration-250 ease-in-out hover:scale-125"
            >
              <MdDelete />
            </button>
            <Link
              href={`/portal/manage/item-menu/edit/${item._id}`}
              className="transition duration-250 ease-in-out hover:scale-125"
            >
              <HiPencilAlt />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
})

