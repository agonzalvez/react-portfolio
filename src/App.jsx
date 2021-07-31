import Navbar from './components/navbar/navbar'
import About from './components/about/about';
import Work from './components/work/work';
import Resume from './components/resume/resume';
import './App.css';


function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="sections">
        <About />
        <Work />
        <Resume />
      </div>
    </div>
  );
}

export default App;
