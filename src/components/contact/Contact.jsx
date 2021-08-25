import "./contact.scss";


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
        <a href="https://github.com/agonzalvez">
          <i class="fab fa-github fa-10x"></i>
        </a>
        <ul>
          <li>
            <h2>
              Phone:
            </h2>
          </li>
          <li>
            <a href="tel:+17863657652"><p>+1 (786) 365-7652</p></a>
          </li>
          <li>
            <h2>
              Github:
            </h2>
          </li>
          <li>
            <a href="https://github.com/agonzalvez"><p>github.com/agonzalvez</p></a>
          </li>
          <li>
            <h2>
              Email:
            </h2>
          </li>
          <li>
            <a href="mailto:agonzalvez1@gmail.com"><p>agonzalvez1@gmail.com</p></a>
          </li>
        </ul>
      </div>
    </div>

  );
}