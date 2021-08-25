import "./works.scss";

export default function Works() {


  return (
    <div className="works" id="works">

        <div className="work-1">
          <div className="container">
            <div className="item">
              <h2>Feel Your Feelings</h2>
              <p>Made with React.js</p>
              <div className="right">
                <a href="https://shrouded-lake-27009.herokuapp.com/" alt="Feel Your Feelings app"><img className="fyf-logo" /></a>
              </div>
            </div>
            <ul>
              <li><a href="https://shrouded-lake-27009.herokuapp.com/">Live App</a></li>
              <li><a href="https://github.com/MarissaNancy/feel-your-feelings">Github Repo</a></li>
            </ul>
          </div>
        </div>

        <div className="work-2">
          <div className="container">
            <div className="item">
              <h2>ReadMe Generator</h2>
              <p>Backend Generator using Inquirer</p>
              <div className="right">
                <a href="https://github.com/agonzalvez/readme-generator" alt="ReadMe Repository"><img className="read-me" /></a>
              </div>
            </div>
            <ul>
              <li><a href="https://github.com/agonzalvez/readme-generator">Live App</a></li>
              <li><a href="https://github.com/agonzalvez/readme-generator">Github Repo</a></li>
            </ul>
          </div>
        </div>

        <div className="work-3">
          <div className="container">
            <div className="item">
              <h2>Google Book Search</h2>
              <p>Made with React, Axios and Mongoose</p>
              <div className="right">
                <a href="https://mysterious-meadow-63767.herokuapp.com/" alt="google book search app"><img className="google-book" /></a>
              </div>
            </div>
            <ul>
              <li>
                <a href="https://mysterious-meadow-63767.herokuapp.com/">Live App</a>
                </li>
              <li><a href="https://github.com/agonzalvez/google-booksearch">Github Repo</a></li>
            </ul>
          </div>
        </div>

        <div className="work-4">
          <div className="container">
            <div className="item">
              <h2>NoSQL Fitness Tracker</h2>
              <p>Made with React, Express, Mongoose and Morgan</p>
              <div className="right">
                <a href="https://floating-citadel-88773.herokuapp.com/" alt="fitness tracker app"><img className="fitness-tracker" /></a>
              </div>
            </div>
            <ul>
              <li><a href="https://floating-citadel-88773.herokuapp.com/">Live App</a></li>
              <li><a href="https://github.com/agonzalvez/nosql-fitness-tracker">Github Repo</a></li>
            </ul>
          </div>
        </div>
      
    </div>


  );
}