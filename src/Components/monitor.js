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
import sparkles1 from '../Images/Monitor/Sparkles1.svg';
import sparkles2 from '../Images/Monitor/Sparkles2.svg';
import shine from '../Images/Monitor/Shine.svg';
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
                $('.screen1').css({
                    opacity: 1,
                    animation: `screenAnim 1s ease 0s 1 normal forwards, vibrateAnim 6s ease 1s infinite normal forwards`
                })
                $('.screen2').css({
                    opacity: 1,
                    animation: `screenAnim 1.25s ease .5s 1 normal forwards, vibrateAnim 9s ease 1.75s infinite normal forwards`
                })
                $('.screen3').css({
                    opacity: 1,
                    animation: `screenAnim .75s ease .25s 1 normal forwards, vibrateAnim 7s ease 1s infinite reverse forwards`
                })
                $('.profile').css({
                    opacity: 1,
                    animation: `profileAnim .5s ease .5s 1 normal forwards`
                })
                $('.element1').css({
                    opacity: 1,
                    animation: `element1Anim 1.5s ease .5s 1 normal forwards`
                })
                $('.element2').css({
                    opacity: 1,
                    animation: `element2Anim 1.5s ease .5s 1 normal forwards`
                })
                $('.element3').css({
                    opacity: 1,
                    animation: `element3Anim 1.5s ease .5s 1 normal forwards`
                })
                $('.element4').css({
                    opacity: 1,
                    animation: `element4Anim 1.5s ease 1s 1 normal forwards`
                })
                $('.element5').css({
                    opacity: 1,
                    animation: `element1Anim 1.5s ease 1s 1 normal forwards`
                })
                $('.sparkles1').css({
                    opacity: 1,
                    animation: `sparkles1Anim 5s linear 1.5s infinite forwards`
                })
                $('.sparkles2').css({
                    opacity: 1,
                    animation: `sparkles2Anim 4s linear 1s infinite forwards`
                })
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
                    <img className="shine" src={shine} alt="" />
                </Parallax>
                <img className="screen1" src={screen1} alt="screen1" />
                <img className="screen2" src={screen2} alt="screen2" />
                <img className="screen3" src={screen3} alt="screen3" />
                <img className="sparkles1" src={sparkles1} alt="sparkle" />
                <img className="sparkles2" src={sparkles2} alt="sparkle" />
            </div>
        </div>
    );
}

export default Monitor;