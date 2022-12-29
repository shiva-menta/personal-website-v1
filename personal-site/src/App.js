import { useEffect } from 'react';

import Hero from './components/hero.js'
import About from './components/about.js'
import Work from './components/work.js'
import Footer from './components/footer.js'
import NavBar from './components/navbar.js'

import './App.css';
import './components/component.css'
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  useEffect(() => {
    window.history.scrollRestoration = 'manual'
  }, []);

  return (
    <div className="App">
      <NavBar/>
      <Hero/>
      <About/>
      <Work/>
      <Footer/>
    </div>
  );
}

export default App;
