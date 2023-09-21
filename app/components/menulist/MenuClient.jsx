// import React from "react";

// const getItems = async () => {
//   try {
//     const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/protected/items`, {
//       cache: "no-store",
//       headers: {
//         "Content-type": "application/json",
//         "API-Key": process.env.NEXT_PUBLIC_API_GET_KEY,
//       },
//     });
//     if (!res.ok) {
//       throw new Error("Failed to fetch items");
//     }
//     return res.json();
//   } catch (error) {
//     console.log("Error loading items: ", error);
//   }
// };

// async function MenuClient(Type) {
//   const result = await getItems();

//   if (typeof result !== "object" || result === null) {
//     console.error("getItems did not resolve to an object");
//     return <></>;
//   }

//   const { items } = result;
//   const { type: itemtype } = Type;

//   return (
//     <>
//       <div>
//         {items.filter((item) => item.type == itemtype)
//         .map(
//           (item) =>
//              (
//               <div
//                 key={item.id}
//                 className="flex flex-col justify-between text-wte my-3"
//               >
//                 <div className="text-[20px] sm:text-[16px] xs:text-[16px] font-semibold flex flex-row justify-between gap-5">
//                   <div>
//                     {item.title}{" "}
//                     <div className="text-body sm:text-[12px] xs:text-[12px]">
//                       {item.description}
//                     </div>
//                   </div>
//                   {item.price && <span>${item.price}</span>}
//                   {!item.price && (
//                     <>
//                       <div className="flex flex-col">
//                         <span className="font-bold text-right">M: ${item.mprice}</span>
//                         <span className="font-bold text-right">L: ${item.lprice}</span>
//                         <span className="font-bold text-right">XL: ${item.xlprice}</span>
//                       </div>
//                     </>
//                   )}
//                 </div>
//               </div>
//             )
//         )}
//       </div>
//     </>
//   );
// }

// export default MenuClient;

'use client'

import React, { useEffect, useState } from "react";
import { closeMongoDB } from "@/libs/mongo";
import Loading from "@/app/loading";

const MenuClient = ({ type }) => {
  const [items, setItems] = useState([]);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    const getItems = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/protected/items`, {
          cache: "no-store",
          headers: {
            "Content-type": "application/json",
            "API-Key": process.env.NEXT_PUBLIC_API_GET_KEY,
          },
        });
        if (!res.ok) {
          throw new Error("Failed to fetch items");
        }
        const data = await res.json();
        setItems(data.items);
        await closeMongoDB();
      } catch (error) {
        console.log("Error loading items: ", error);
      }finally {
        setIsRunning(false);
      }
    };
    getItems();
  }, []);

  if(isRunning) return <Loading/>

  return (
    <div>
      {items
        .filter((item) => item.type == type)
        .map((item) => (
          <div
            key={item.id}
            className="flex flex-col justify-between text-wte my-3"
          >
            <div className="text-[20px] sm:text-[16px] xs:text-[16px] font-semibold flex flex-row justify-between gap-5">
              <div>
                {item.title}{" "}
                <div className="text-body sm:text-[12px] xs:text-[12px]">
                  {item.description}
                </div>
              </div>
              {item.price && <span>${item.price}</span>}
              {!item.price && (
                <>
                  <div className="flex flex-col">
                    <span className="font-bold text-right">M: ${item.mprice}</span>
                    <span className="font-bold text-right">L: ${item.lprice}</span>
                    <span className="font-bold text-right">XL: ${item.xlprice}</span>
                  </div>
                </>
              )}
            </div>
          </div>
        ))}
    </div>
  );
};

export default MenuClient;
