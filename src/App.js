import logo from './logo.svg';
import './App.css';
import Header from './Header';
import { useState } from 'react';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

function App() {
  const [currentPage, setCurrentPage] = useState("About")
  return (
    <div className="App">
      <Header currentPage = {currentPage} setCurrentPage = {setCurrentPage} />
      {
        (() => {
          switch (currentPage) {
            case "About":
              return <About />

            case "Portfolio":
              return <Portfolio />

            case "Contact":
              return <Contact />

            case "Resume":
              return <Resume />

            default:
              return <About />

          }
        })()
      }
    </div>
    
  );
}

export default App;
