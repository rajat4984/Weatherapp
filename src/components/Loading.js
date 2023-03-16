import React from "react";
import { ClipLoader } from "react-spinners";
import { useGlobalContext } from "../context";

function Loading() {
  const { loading } = useGlobalContext();
  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(to bottom,#4561df,#2c77e0, #3289db, #4f99d3, #72a6c9)",
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        <ClipLoader loading={loading} color={"white"} size={100} />
      </div>
    </div>
  );
}

export default Loading;
