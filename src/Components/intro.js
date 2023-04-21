import "../Style/intro.css"
import Monitor from '../Components/monitor';
import React, { useEffect } from 'react';
import $ from 'jquery';

function Intro() {

    useEffect(() => {
        window.addEventListener("scroll", onScroll);
        function onScroll() {
            const scrollTop = $(window).scrollTop();
            const Offset = document.getElementById('introArea').offsetTop;
            const vh = (window.innerHeight);

            if ((scrollTop + (vh)) > Offset) {
                $('#hello').css({
                    opacity: 1,
                    Animation: `introTextAnim 1s ease-in-out 0s 1 normal both`
                })
            }
        }
    }, []);

    useEffect(() => {
        window.addEventListener("scroll", onScroll);
        let index = 0
        function onScroll() {
            const scrollTop = $(window).scrollTop();
            const Offset = document.getElementById('socialLinksTrigger').offsetTop;
            const vh = (window.innerHeight);

            if (scrollTop < 200 && index > 1) {
                $('#socialLinks').css({
                    opacity: 0,
                    Animation: `socialLinksAnimOut .5s ease 0s 1 reverse backwards`
                })
            } else if ((scrollTop + (vh)) > Offset) {
                $('#socialLinks').css({
                    opacity: 1,
                    Animation: `socialLinksAnim .5s ease 0s 1 normal forwards`
                })
                index++
            }
        }
    }, []);

    return (
        <div id="introArea">
            <div id="introText" className="Text">
                <h1 id="hello">Hello. I'm Dave</h1>
                <h2>I'm a <span>graphic designer</span> and <span>frontend developer</span> living in Devon and I'm passionate about creating things that are beautiful both inside and out.</h2>
                <div id="socialLinksTrigger"></div>
                <p>As a graphic designer I have 13+ years of experience working with Adobe Creative suite - primarily <span>Photoshop</span>, <span>Illustrator</span> and <span>Indesign</span> all of which I use on a daily basis. As for web development I have a certification in frontend development using <span>Node.js</span>, <span>React</span>, <span>Bootstrap</span>, <span>Javascipt</span>, <span>CSS</span> and <span>HTML</span>.<br /><br />I look at any project or opportunity to work in a design environment as a chance to learn and develop my skillset.</p>
            </div>
            <div className="introImage">
                <Monitor />
            </div>
        </div>
    );
}

export default Intro;