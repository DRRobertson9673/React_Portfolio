import "../Style/header.css"
import $ from 'jquery';

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
        const offset = (window.innerWidth) / 10;
        $('html, body').animate({ scrollTop: $("#introArea").offset().top - offset }, 900);
    }
    function gotoProjects() {
        const offset = (window.innerWidth) / 20;
        $('html, body').animate({ scrollTop: $("#projectsArea").offset().top }, 900);
    }
    function gotoContact() {
        const offset = (window.innerWidth) / 50;
        $('html, body').animate({ scrollTop: $("#contactArea").offset().top }, 900);
    }

    return (
        <div>
            <div id="lilSkull" onClick={showNav}></div>
            <nav>
                <div id="brand"><span className="name">DAVID ROBERTSON</span><span className="portfolio"> PORTFOLIO</span></div>
                <div>
                    <ul id="navLinks">
                        <p className="nav-link" onClick={gotoAbout}>ABOUT</p>
                        <p className="nav-link" onClick={gotoProjects}>PROJECTS</p>
                        <p className="nav-link" onClick={gotoContact}> CONTACT</p>
                        <p className="resume-link">RESUME</p>
                    </ul>
                </div>
            </nav>
            <div id="socialLinks">
                <a href="https://www.linkedin.com/in/david-robertson-67a895259/" target="_blank" ><div id="LinkedIn" className="socialLink"></div></a>
                <a href="https://github.com/DRRobertson9673" target="_blank" ><div id="GitHub" className="socialLink"></div></a>
                <div id="navLine"></div>
            </div>
        </div>
    );
}

export default Header;