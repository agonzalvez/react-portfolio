import "./contact.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Contact() {


  return (
    <div className="contact" id="contact">
      <div className="left">
        <div className="wrapper">
          <h1>Contact</h1>
        </div>
      </div>
      <div className="right">
        <h4>Email + logos</h4>
      </div>
    </div>
  );
}