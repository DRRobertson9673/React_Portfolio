import "../Style/projects.css"
import React, { useEffect } from 'react';
import $ from 'jquery';

function Projects() {

    useEffect(() => {
        window.addEventListener("scroll", onScroll);
        function onScroll() {
            const scrollTop = $(window).scrollTop();
            const Offset = document.getElementById('projectsArea').offsetTop;
            const vh = (window.innerHeight);

            if ((scrollTop + (vh)) > Offset) {
                $('#projectsTitle').css({
                    opacity: 1,
                    Animation: `introTextAnim 1s ease-in-out 0s 1 normal both`
                })
            }
        }
    }, []);

    return (
        <div className="section" id="projectsArea">
            <h1 id="projectsTitle">Recent work<span>.</span></h1>
            <div id="projectsGrid">
                <div id="project1" className="project">
                    <div className="projectOverlay">
                        <div className="projectInfo">
                            <h3 className="projectName">WEIGHTLESS<br />WEIGHTLOSS</h3>
                            <p className="projectDescription"><b>Built with: </b>React, Node, Javascript, CSS, Netlify</p>
                            <a href="https://github.com/Boxie999/weightless-weightloss" target="_blank" rel="noopener noreferrer" className="projectLink"><p>VIEW THE CODE <span className="linkArrow">&#9654;</span></p></a>
                            <a href="https://weightless-weightloss.netlify.app/" target="_blank" rel="noopener noreferrer"className="projectLink"><p>VIEW THE APP <span className="linkArrow">&#9654;</span></p></a>
                        </div>
                    </div>
                </div>
                <div id="project2" className="project">
                    <div className="projectOverlay">
                        <div className="projectInfo">
                            <h3 className="projectName">PERFECT<br />MOVIE NIGHT</h3>
                            <p className="projectDescription"><b>Built with: </b>HTML, Javascript, CSS</p>
                            <a href="https://github.com/DRRobertson9673/Perfect_Movie_Night" target="_blank" rel="noopener noreferrer" className="projectLink"><p>VIEW THE CODE <span className="linkArrow">&#9654;</span></p></a>
                            <a href="https://drrobertson9673.github.io/Perfect_Movie_Night/" target="_blank" rel="noopener noreferrer" className="projectLink"><p>VIEW THE APP <span className="linkArrow">&#9654;</span></p></a>
                        </div>
                    </div>
                </div>
                <div id="project3" className="project">
                    <div className="projectOverlay">
                        <div className="projectInfo">
                            <h3 className="projectName">WEATHER<br />DASHBOARD</h3>
                            <p className="projectDescription"><b>Built with: </b>HTML, Javascript, CSS</p>
                            <a href="https://github.com/DRRobertson9673/Weather_Dashboard" target="_blank" rel="noopener noreferrer" className="projectLink"><p>VIEW THE CODE <span className="linkArrow">&#9654;</span></p></a>
                            <a href="https://drrobertson9673.github.io/Weather_Dashboard/" target="_blank" rel="noopener noreferrer" className="projectLink"><p>VIEW THE APP <span className="linkArrow">&#9654;</span></p></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;