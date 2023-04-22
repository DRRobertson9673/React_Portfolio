import "./Style/App.css"
import Header from './Components/header';
import Hero from './Components/hero';
import Intro from './Components/intro';
import Projects from './Components/projects';
import ContactForm from './Components/contact';
import Orbs from './Components/orbs';
import Orbs2 from './Components/orbs2';
import { ParallaxProvider } from 'react-scroll-parallax';

function App() {
  return (
    <div>
      <ParallaxProvider>
        <Header />
        <Hero />
        <Intro />
        <Projects />
        <ContactForm />
        <Orbs />
        <Orbs2 />
      </ParallaxProvider>
    </div>
  );
}

export default App;