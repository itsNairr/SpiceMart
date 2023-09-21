import React from "react";

export default function Logout() {
  return (
    <>
      <a
        className="text-body font-semibold text-wte transition duration-250 ease-in-out hover:text-prwte hover:scale-110"
        href="/api/auth/logout"
      >
        Log Out
      </a>
    </>
  );
}
