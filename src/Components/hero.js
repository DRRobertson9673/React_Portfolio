import "../Style/hero.css"
import React, { useEffect } from 'react';
import dots from '../Images/BackdropShapes.svg';
import $ from 'jquery';
import { Parallax } from 'react-scroll-parallax';

function Hero() {

    useEffect(() => {
        window.addEventListener("scroll", onScroll);
        function onScroll() {
            const scrollTop = $(window).scrollTop();
            const heroContentOffset = document.getElementById('heroTitle').offsetTop;

            $('#hero').css({
                opacity: ((heroContentOffset * 1.75) - scrollTop) / heroContentOffset
            })
            $('#heroContent').css({
                opacity: (heroContentOffset - scrollTop) / heroContentOffset
            })
            $('#backgroundFill').css({
                opacity: ((heroContentOffset * 2) - scrollTop) / heroContentOffset
            })
        }
    }, []);

    return (
        <div>
            <div id="backgroundFill"></div>
            <div id="hero">
                <div id="heroContent">
                    <p id="heroTitle">Above average</p>
                    <p id="heroTitleSmall">and often better than necessary.</p>
                </div>
            </div>
        </div >
    );
}

export default Hero;