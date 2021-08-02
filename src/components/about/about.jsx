import "./about.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Developer", "Photographer", "Filmmaker"],
    });
  }, []);

  return (
    <div className="about" id="about">
      <div className="left">
        <div className="wrapper">
          <h2>Hello! I'm</h2>
          <h1>Alejandro Gonzalvez</h1>
          <h3>
            <span ref={textRef}></span>
          </h3>
        </div>
      </div>
      <div className="right">
        <h4>Alejandro Gonzalvez is a full-stack developer, photographer, video editor, with a degree in advertising from Florida International University, and a Web Developer Certificate from UCLA. 
          He was the videographer and editor for Bill De Blasio’s 2017 New York City mayoral re-election campaign. During that time, he worked closely with De Blasio’s campaign manager and was in charge of filming and editing Bernie Sanders’ endorsement speech. 
          Gonzalvez is passionate about the performing arts and has created multiple dance films in collaboration with dancers from Miami City Ballet and Broadway. He also contributed to Miami’s music scene by helping promote artists, providing marketing tools for music agencies, and producing concerts for headliners such as St. Vincent and Of Montreal. 
          Gonzalvez was part of the inaugural Open Ice team, working both as a graphic designer and sole editor. </h4>
      </div>
    </div>
  );
}