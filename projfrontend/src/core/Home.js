import React from "react";
import "../styles.css";
import { API } from "../backend";
import Base from "./Base";

export default function Home() {
  console.log("API is", API);
  return (
    <Base title="Home Page" description="welcome to the tshirt store">
      <h1 className="text-white text-center">Hello Frontend</h1>
    </Base>
  );
}
