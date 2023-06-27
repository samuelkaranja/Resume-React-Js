import './App.css';
import Header from './components/header/Header.js';
import Home from './components/home/Home.js';
import About from './components/about/About.js';
import Skills from './components/skills/Skills.js';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
      </main>
    </div>
  );
}

export default App;
