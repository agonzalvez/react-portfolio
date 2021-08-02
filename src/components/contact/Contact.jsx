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
      <a href="https://www.linkedin.com/in/gonzalvezalejandro/">
      <i className="fab fa-linkedin fa-10x"></i>
      </a>
      <a href="mailto:agonzalvez1@gmail.com">
      <i className="far fa-envelope fa-10x"></i>
      </a>
      <ul>
        <li><h2>Phone: +1 (786) 365-7652</h2></li>
      </ul>
      </div>
    </div>

  );
}