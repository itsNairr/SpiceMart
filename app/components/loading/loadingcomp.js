import React from "react";
import "./loading.css";

function LoadingComp() {
  return (
    <div className="h-screen bg-back flex flex-row justify-center items-center">
      <div className="spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default LoadingComp;
