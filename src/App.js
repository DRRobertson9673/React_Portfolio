import "./Style/App.css"
import Header from './Components/header';
import Hero from './Components/hero';
import Intro from './Components/intro';
import Skills from './Components/skills';
import { ParallaxProvider } from 'react-scroll-parallax';

function App() {
  return (
    <div>
      <ParallaxProvider>
        <Header />
        <Hero />
        <Intro />
        <Skills />
      </ParallaxProvider>
    </div>
  );
}

export default App;