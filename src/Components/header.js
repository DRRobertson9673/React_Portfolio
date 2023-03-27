import "../Style/header.css"
import myImage from '../Images/LilSkull_white.png';
import $ from 'jquery';

function Header() {

    let scrollTop = 0;
    window.addEventListener("scroll", function () {
        let st = window.pageYOffset || document.documentElement.scrollTop;
        if (st > scrollTop) {
            // scroll down
            $('nav').css({
                Animation: `navUpAnim 1s ease .5s 1 normal forwards`
            })
        } else if (st < scrollTop) {
            // scroll up
            $('nav').css({
                Animation: `navDownAnim .5s ease 0s 1 reverse forwards`
            })
        }
        scrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
    }, false);

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