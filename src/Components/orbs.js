import "../Style/orbs.css"
import orb from '../Images/Orb.png';
import { Parallax } from 'react-scroll-parallax';

function Orbs() {

    return (
        <Parallax speed={+100} id="orbsContainer">
                    <img id="orb1" className="orb" src={orb} alt="orb" />
                    <img id="orb2" className="orb" src={orb} alt="orb" />
                    <img id="orb3" className="orb" src={orb} alt="orb" />
                    <img id="orb4" className="orb" src={orb} alt="orb" />
        </Parallax>
    );
}

export default Orbs;