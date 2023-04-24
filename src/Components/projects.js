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

    function showGraphicDesign() {
        $('#graphicdesignPortfolioSelector').addClass("currentPortfolio");
        $('#frontendPortfolioSelector').removeClass("currentPortfolio");
        $('#projectsGrid').addClass("hidden");
        $('#projectsGridGD').removeClass("hidden");
    }

    function showFrontendDevelopment() {
        $('#graphicdesignPortfolioSelector').removeClass("currentPortfolio");
        $('#frontendPortfolioSelector').addClass("currentPortfolio");
        $('#projectsGrid').removeClass("hidden");
        $('#projectsGridGD').addClass("hidden");
    }

    return (
        <div className="section" id="projectsArea">
            <h1 id="projectsTitle">Recent work<span>.</span></h1>
            <div id="portfolioSelector">
                <h2 id="frontendPortfolioSelector" className="selector currentPortfolio" onClick={showFrontendDevelopment}>Frontend Development</h2>
                <h2 id="graphicdesignPortfolioSelector" className="selector" onClick={showGraphicDesign}>Graphic Design</h2></div>
            <div id="projectsGrid">
                <div id="project1" className="project">
                    <div className="projectOverlay">
                        <div className="projectInfo">
                            <h3 className="projectName">WEIGHTLESS<br />WEIGHTLOSS</h3>
                            <p className="projectDescription"><b>Built with: </b>React, Node, Javascript, CSS, Netlify</p>
                            <a href="https://github.com/Boxie999/weightless-weightloss" target="_blank" rel="noopener noreferrer" className="projectLink"><p>VIEW THE CODE <span className="linkArrow">&#9654;</span></p></a>
                            <a href="https://weightless-weightloss.netlify.app/" target="_blank" rel="noopener noreferrer" className="projectLink"><p>VIEW THE APP <span className="linkArrow">&#9654;</span></p></a>
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






            <div id="projectsGridGD" className="hidden">
                <div id="GD1" className="GDproject">
                    <div className="GDOverlay">
                        <div className="projectInfo">
                            <h3 className="projectName">POSTER</h3>
                        </div>
                    </div>
                </div>
                <div id="GD2" className="GDproject">
                    <div className="GDOverlay">
                        <div className="projectInfo">
                            <h3 className="projectName">POSTER</h3>
                        </div>
                    </div>
                </div>
                <div id="GD3" className="GDproject">
                    <div className="GDOverlay">
                        <div className="projectInfo">
                            <h3 className="projectName">POSTER</h3>
                        </div>
                    </div>
                </div>
                <div id="GD4" className="GDproject">
                    <div className="GDOverlay">
                        <div className="projectInfo">
                            <h3 className="projectName">POSTER</h3>
                        </div>
                    </div>
                </div>
                <div id="GD5" className="GDproject">
                    <div className="GDOverlay">
                        <div className="projectInfo">
                            <h3 className="projectName">POSTER</h3>
                        </div>
                    </div>
                </div>
                <div id="GD6" className="GDproject">
                    <div className="GDOverlay">
                        <div className="projectInfo">
                            <h3 className="projectName">POSTER</h3>
                        </div>
                    </div>
                </div>
                <div id="GD7" className="GDproject">
                    <div className="GDOverlay">
                        <div className="projectInfo">
                            <h3 className="projectName">POSTER</h3>
                        </div>
                    </div>
                </div>
                <div id="GD8" className="GDproject">
                    <div className="GDOverlay">
                        <div className="projectInfo">
                            <h3 className="projectName">POSTER</h3>
                        </div>
                    </div>
                </div>
                <div id="GD9" className="GDproject">
                    <div className="GDOverlay">
                        <div className="projectInfo">
                            <h3 className="projectName">POSTER</h3>
                        </div>
                    </div>
                </div>
                <div id="GD10" className="GDproject">
                    <div className="GDOverlay">
                        <div className="projectInfo">
                            <h3 className="projectName">POSTER</h3>
                        </div>
                    </div>
                </div>
                <div id="GD11" className="GDproject">
                    <div className="GDOverlay">
                        <div className="projectInfo">
                            <h3 className="projectName">POSTER</h3>
                        </div>
                    </div>
                </div>
                <div id="GD12" className="GDproject">
                    <div className="GDOverlay">
                        <div className="projectInfo">
                            <h3 className="projectName">POSTER</h3>
                        </div>
                    </div>
                </div>
                <div id="GD13" className="GDproject">
                    <div className="GDOverlay">
                        <div className="projectInfo">
                            <h3 className="projectName">POSTER</h3>
                        </div>
                    </div>
                </div>
                <div id="GD14" className="GDproject">
                    <div className="GDOverlay">
                        <div className="projectInfo">
                            <h3 className="projectName">POSTER</h3>
                        </div>
                    </div>
                </div>
                <div id="GD15" className="GDproject">
                    <div className="GDOverlay">
                        <div className="projectInfo">
                            <h3 className="projectName">POSTER</h3>
                        </div>
                    </div>
                </div>
                <div id="GD16" className="GDproject">
                    <div className="GDOverlay">
                        <div className="projectInfo">
                            <h3 className="projectName">POSTER</h3>
                        </div>
                    </div>
                </div>
            </div>







        </div>
    );
}

export default Projects;