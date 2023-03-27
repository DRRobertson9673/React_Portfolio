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

    return (
        <div>
            <div id="lilSkull" onClick={showNav}></div>
            <nav>
                <div id="brand"><span className="name">DAVID ROBERTSON</span><span className="portfolio"> PORTFOLIO</span></div>
                <div>
                    <ul id="navLinks">
                        <p className="nav-link">ABOUT</p>
                        <p className="nav-link">PROJECTS</p>
                        <p className="nav-link">CONTACT</p>
                        <p className="resume-link">RESUME</p>
                    </ul>
                </div>
            </nav>
            <div id="socialLinks">
                <div id="LinkedIn" className="socialLink" onClick={showNav}></div>
                <div id="GitHub" className="socialLink" onClick={showNav}></div>
                <div id="navLine"></div>
            </div>
        </div>
    );
}

export default Header;