import React from "react";
import img1 from "./img/13.png";

export default function Introduce() {
  return (
    <>
      <div style={{}}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <h1 style={{ width: "400px", fontSize: "50px" }}>
            Healthy meals delivered daily to your door
          </h1>
          <img style={{ height: "500px" }} src={img1} />
        </div>
      </div>
    </>
  );
}
