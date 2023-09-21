"use client";

import React from "react";
import Link from "next/link";

function QL(props) {
  return (
    <div className="mb-8  px-3 flex flex-col">
      <span className="text-footft sm:text-footst xs:text-footst font-bold mb-5">Quick Links</span>
      <span className="mb-1"><Link href='/' className="hover:underline sm:text-foottxts xs:text-foottxts">Home</Link></span>
      <span className="mb-1"><Link href='/item-menu' className="hover:underline sm:text-foottxts xs:text-foottxts">Menu</Link></span>
      <span className="mb-1"><Link href='/about' className="over:underline sm:text-foottxts xs:text-foottxts">About</Link></span>
      <span className="mb-1"><Link href='/order' className="hover:underline sm:text-foottxts xs:text-foottxts">Order</Link></span>
      {/* <span className="mb-1"><Link href='/portal' className="hover:underline sm:text-foottxts xs:text-foottxts">Portal</Link></span> */}
    </div>
  );
}

export default QL;
