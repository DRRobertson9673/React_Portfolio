import "../Style/header.css"
import $ from 'jquery';
import myResume from "../Images/myResume.pdf"

function Header() {

    const showNav = () => {
        $('nav').css({
            Animation: `navDownAnim .5s ease 0s 1 reverse forwards`
        })
    };

    let scrollTop = 0;
    window.addEventListener("scroll", function () {
        let st = window.pageYOffset || document.documentElement.scrollTop;
        if (st > scrollTop) {
            // scroll down
            $('nav').css({
                Animation: `navUpAnim 1.5s ease .5s 1 normal forwards`
            })
        } else if (st < scrollTop) {
            // scroll up
            $('nav').css({
                Animation: `navDownAnim .5s ease 0s 1 reverse forwards`
            })
        }
        scrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
    }, false);

    function gotoAbout() {
        $('html, body').animate({ scrollTop: $("#introArea").offset().top }, 900);
    }
    function gotoProjects() {
        $('html, body').animate({ scrollTop: $("#projectsArea").offset().top }, 900);
    }
    function gotoContact() {
        $('html, body').animate({ scrollTop: $("#contactArea").offset().top }, 900);
    }

    return (
        <div>
            <div id="lilSkull" onClick={showNav}></div>
            <nav>
                <div id="brand"><span className="name">DAVID</span><span className="portfolio">ROBERTSON</span></div>
                <div>
                    <ul id="navLinks">
                        <p className="nav-link" onClick={gotoAbout}>ABOUT</p>
                        <p className="nav-link" onClick={gotoProjects}>PROJECTS</p>
                        <p className="nav-link" onClick={gotoContact}> CONTACT</p>
                        <a href={myResume} download="David Robertson's Resume "><p className="resume-link">RESUM&Eacute;</p></a>
                    </ul>
                </div>
            </nav>
            <div id="socialLinks">
                <div id="EmailLink" className="socialLink" onClick={gotoContact}></div>
                <a href="https://www.linkedin.com/in/david-robertson-67a895259/" target="_blank" rel="noopener noreferrer"><div id="LinkedIn" className="socialLink"></div></a>
                <a href="https://github.com/DRRobertson9673" target="_blank" rel="noopener noreferrer"><div id="GitHub" className="socialLink"></div></a>
                <div id="navLine"></div>
            </div>
        </div>
    );
}

export default Header;