import "./Style/App.css"
import Header from './Components/header';
import Hero from './Components/hero';
import Intro from './Components/intro';
import Projects from './Components/projects';
import ContactForm from './Components/contact';
import Orbs from './Components/orbs';
import Orbs2 from './Components/orbs2';
import ThankYou from './Components/thankYou';
import { ParallaxProvider } from 'react-scroll-parallax';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={
            <ParallaxProvider>
              <Header />
              <Hero />
              <Intro />
              <Projects />
              <ContactForm />
              <Orbs />
              <Orbs2 />
            </ParallaxProvider>} />
          <Route path="thankyou" element={<ThankYou />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;