import './App.css';
import Header from './components/header/Header.js';
import Home from './components/home/Home.js';
import About from './components/about/About.js';
import Skills from './components/skills/Skills.js';
import Services from './components/services/Services.js';
import Work from './components/work/Work';
import Contact from './components/contact/Contact.js';
import Footer from './components/footer/Footer.js'
import ScrollUp from './components/scrollup/ScrollUp.js'

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Services />
        <Work />
        <Contact />
      </main>

      <Footer />
      <ScrollUp />
    </div>
  );
}

export default App;
