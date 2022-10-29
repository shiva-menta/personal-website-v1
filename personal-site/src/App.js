import './App.css';
import Hero from './components/hero.js'
import About from './components/about.js'
import Work from './components/work.js'
import Footer from './components/footer.js'

function App() {
  return (
    <div className="App">
      <Hero/>
      <About/>
      <Work/>
      <Footer/>
    </div>
  );
}

export default App;
