import './App.css';
import Hero from './components/hero.js'
import About from './components/about.js'
import Work from './components/work.js'
import Footer from './components/footer.js'
import NavBar from './components/navbar.js'
import 'bootstrap/dist/css/bootstrap.css';

function App() {
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
