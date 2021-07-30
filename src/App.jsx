import Navbar from './components/navbar/navbar'
import Home from './components/home/home'
import About from './components/about/about';
import Work from './components/work/work';
import Contact from './components/contact/contact';
import Resume from './components/resume/resume';
import './App.css';


function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="sections">
        <About />
        <Work />
        <Contact />
        <Resume />
      </div>
    </div>
  );
}

export default App;
