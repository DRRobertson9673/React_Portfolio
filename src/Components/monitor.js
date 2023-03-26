import "../Style/monitor.css"
import monitor from '../Images/Monitor/Monitor.svg';
import profile from '../Images/Monitor/Profile.svg';
import element1 from '../Images/Monitor/element1.svg';
import element2 from '../Images/Monitor/element2.svg';
import element3 from '../Images/Monitor/element3.svg';
import element4 from '../Images/Monitor/element4.svg';
import element5 from '../Images/Monitor/element5.svg';
import screen1 from '../Images/Monitor/Screen1.svg';
import screen2 from '../Images/Monitor/Screen2.svg';
import screen3 from '../Images/Monitor/Screen3.svg';
import React, { useEffect } from 'react';
import $ from 'jquery';
import { Parallax } from 'react-scroll-parallax';

function Monitor() {

    useEffect(() => {
        window.addEventListener("scroll", onScroll);
        function onScroll() {
            const scrollTop = $(window).scrollTop();
            const Offset = document.getElementById('marker').offsetTop;
            const vh = (window.innerHeight);

            if ((scrollTop + (vh / 2)) > Offset) {
                $('.screen1').addClass('screenAnimationA')
                $('.screen2').addClass('screenAnimationB')
                $('.screen3').addClass('screenAnimationC')
                $('.profile').addClass('profileAnimation')
                $('.element1').addClass('element1Animation')
                $('.element2').addClass('element2Animation')
                $('.element3').addClass('element3Animation')
                $('.element4').addClass('element4Animation')
                $('.element5').addClass('element5Animation')
            }
        }
    }, []);

    return (
        <div>
            <div id="marker"></div>
            <div id="monitorAnimation">
                <Parallax speed={+5} id="parallaxMonitor">
                    <img id="monitor" src={monitor} alt="" />
                    <img className="profile" src={profile} alt="" />
                    <img className="element1" src={element1} alt="" />
                    <img className="element2" src={element2} alt="" />
                    <img className="element3" src={element3} alt="" />
                    <img className="element4" src={element4} alt="" />
                    <img className="element5" src={element5} alt="" />
                </Parallax>
                <img className="screen1" src={screen1} alt="screen1" />
                <img className="screen2" src={screen2} alt="screen2" />
                <img className="screen3" src={screen3} alt="screen3" />
            </div>
        </div>
    );
}

export default Monitor;