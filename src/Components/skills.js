import "../Style/skills.css"
import photoshop from '../Images/icons/photoshop-green.svg';
import illustrator from '../Images/icons/illustrator-green.svg';
import indesign from '../Images/icons/indesign-green.svg';
import HTML from '../Images/icons/HTML-green.svg';
import CSS from '../Images/icons/CSS-green.svg';
import js from '../Images/icons/js-green.svg';
import react from '../Images/icons/react-green.svg';
import bootstrap from '../Images/icons/bootstrap-green.svg';
import jquery from '../Images/icons/jquery-green.svg';
import node from '../Images/icons/node-green.svg';
import vsc from '../Images/icons/vsc-green.svg';
import git from '../Images/icons/git-green.svg';
import React, { useEffect } from 'react';
import $ from 'jquery';

function Skills() {

    useEffect(() => {
        window.addEventListener("scroll", onScroll);
        function onScroll() {
            const scrollTop = $(window).scrollTop();
            const Offset = document.getElementById('skillsRow').offsetTop;
            const vh = (window.innerHeight);

            if ((scrollTop + (vh)) > Offset) {
                $('#photoshop').css({
                    animation: `skillAnim 1s ease 0s 1 normal forwards`
                })
                $('#illustrator').css({
                    animation: `skillAnim 1s ease .1s 1 normal forwards`
                })
                $('#indesign').css({
                    animation: `skillAnim 1s ease .2s 1 normal forwards`
                })
                $('#HTML').css({
                    animation: `skillAnim 1s ease .3s 1 normal forwards`
                })
                $('#CSS').css({
                    animation: `skillAnim 1s ease .4s 1 normal forwards`
                })
                $('#js').css({
                    animation: `skillAnim 1s ease .5s 1 normal forwards`
                })
                $('#jquery').css({
                    animation: `skillAnim 1s ease .6s 1 normal forwards`
                })
                $('#react').css({
                    animation: `skillAnim 1s ease .7s 1 normal forwards`
                })
                $('#bootstrap').css({
                    animation: `skillAnim 1s ease .8s 1 normal forwards`
                })
                $('#node').css({
                    animation: `skillAnim 1s ease .9s 1 normal forwards`
                })
                $('#vsc').css({
                    animation: `skillAnim 1s ease 1s 1 normal forwards`
                })
                $('#git').css({
                    animation: `skillAnim 1s ease 1.1s 1 normal forwards`
                })
            }
        }
    }, []);




    return (
            <div id="skillsRow">
                <div id="photoshop" className="skill">
                    <img className="skillIcon" src={photoshop} alt="photoshop" />
                    <p>Photoshop</p>
                </div>
                <div id="illustrator" className="skill">
                    <img className="skillIcon" src={illustrator} alt="illustrator" />
                    <p>Illustrator</p>
                </div>
                <div id="indesign" className="skill">
                    <img className="skillIcon" src={indesign} alt="indesign" />
                    <p>Indesign</p>
                </div>
                <div id="HTML" className="skill">
                    <img className="skillIcon" src={HTML} alt="HTML" />
                    <p>HTML</p>
                </div>
                <div id="CSS" className="skill">
                    <img className="skillIcon" src={CSS} alt="CSS" />
                    <p>CSS</p>
                </div>
                <div id="js" className="skill">
                    <img className="skillIcon" src={js} alt="js" />
                    <p>Javascript</p>
                </div>
                <div id="jquery" className="skill">
                    <img className="skillIcon" src={jquery} alt="jquery" />
                    <p>JQuery</p>
                </div>
                <div id="react" className="skill">
                    <img className="skillIcon" src={react} alt="react" />
                    <p>React</p>
                </div>
                <div id="bootstrap" className="skill">
                    <img className="skillIcon" src={bootstrap} alt="bootstrap" />
                    <p>Bootstrap</p>
                </div>
                <div id="node" className="skill">
                    <img className="skillIcon" src={node} alt="node" />
                    <p>NodeJS</p>
                </div>
                <div id="vsc" className="skill">
                    <img className="skillIcon" src={vsc} alt="vsc" />
                    <p>Visual Studio</p>
                </div>
                <div id="git" className="skill">
                    <img className="skillIcon" src={git} alt="git" />
                    <p>Git</p>
                </div>
            </div>
    );
}

export default Skills;