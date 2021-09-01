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
        <h4>I am a Full-stack web developer leveraging my background in advertising to provide unique perspectives on how end-users interact with websites and software platforms. 
          Recently, I earned a certificate in Full Stack Web Development from UCLA Extension Coding Bootcamp. 
          The technologies I am most familiar with include: HTML5, CSS3, Bootstrap, JavaScript, Handlebars, jQuery, React.js, MySQL, NoSql, MongoDB, and Mongoose. 
          I consider myself an innovative problem-solver, who is passionate about developing apps with a focus on responsive design, and development. 
          My strengths lie in creativity, teamwork, and building projects from ideation to execution.</h4>
      </div>
    </div>
  );
}