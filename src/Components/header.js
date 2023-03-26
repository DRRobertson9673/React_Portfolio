import "../Style/header.css"
import myImage from '../Images/LilSkull_white.png';

function Header() {
    return (
        <nav>
            <div id="brand"><img id="lilSkull" src={myImage} alt="LittleSkullIcon" /><span className="name">DAVID ROBERTSON</span><span className="portfolio"> PORTFOLIO</span></div>
            <div>
                <ul id="navLinks">
                    <p className="nav-link">ABOUT</p>
                    <p className="nav-link">PROJECTS</p>
                    <p className="nav-link">CONTACT</p>
                    <p className="resume-link">RESUME</p>
                </ul>
            </div>
        </nav>
    );
}

export default Header;