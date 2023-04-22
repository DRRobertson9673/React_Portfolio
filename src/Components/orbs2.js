import "../Style/orbs.css"
import orb from '../Images/Orb.png';
import { Parallax } from 'react-scroll-parallax';

function Orbs2() {

    return (
        <Parallax speed={+50} id="orbsContainer">
                    <img id="orb5" className="orb" src={orb} alt="orb" />
                    <img id="orb6" className="orb" src={orb} alt="orb" />
                    <img id="orb7" className="orb" src={orb} alt="orb" />
                    <img id="orb8" className="orb" src={orb} alt="orb" />
        </Parallax>
    );
}

export default Orbs2;