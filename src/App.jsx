import Navbar from "./components/navbar/Navbar";
import About from "./components/about/About";
import Works from "./components/works/Works";
import Contact from "./components/contact/Contact";
import Resume from "./components/resume/Resume";
import Footer from "./components/footer/Footer";
import "./app.scss";
import { useState } from "react";
import Menu from "./components/menu/Menu";

function App() {
  const [menuOpen,setMenuOpen] = useState(false)
  return (
    <div className="app">
     <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <div className="sections">
       <About />
       <Works />
       <Contact />
       <Resume />
       <Footer className="footer" />
     </div>
    </div>
  );
}

export default App;