import "../Style/projects.css"
import React, { useEffect, useState } from 'react';
import $ from 'jquery';
import calendar1 from '../Images/GDPortfolio/Calendars_1.png';
import calendar2 from '../Images/GDPortfolio/Calendars_2.png';
import calendar3 from '../Images/GDPortfolio/Calendars_3.png';
import calendar4 from '../Images/GDPortfolio/Calendars_4.png';
import calendar5 from '../Images/GDPortfolio/Calendars_5.png';
import calendar6 from '../Images/GDPortfolio/Calendars_6.png';
import calendar7 from '../Images/GDPortfolio/Calendars_7.png';
import calendar8 from '../Images/GDPortfolio/Calendars_8.png';
import calendar9 from '../Images/GDPortfolio/Calendars_9.png';
import calendar10 from '../Images/GDPortfolio/Calendars_10.png';
import calendar11 from '../Images/GDPortfolio/Calendars_11.png';
import calendar12 from '../Images/GDPortfolio/Calendars_12.png';
import diary1 from '../Images/GDPortfolio/Diaries_1.png';
import diary2 from '../Images/GDPortfolio/Diaries_2.png';
import diary3 from '../Images/GDPortfolio/Diaries_3.png';
import poster1 from '../Images/GDPortfolio/Posters_1.png';
import poster2 from '../Images/GDPortfolio/Posters_2.png';
import poster3 from '../Images/GDPortfolio/Posters_3.png';
import poster4 from '../Images/GDPortfolio/Posters_4.png';
import poster5 from '../Images/GDPortfolio/Posters_5.png';
import poster6 from '../Images/GDPortfolio/Posters_6.png';
import poster7 from '../Images/GDPortfolio/Posters_7.png';
import poster8 from '../Images/GDPortfolio/Posters_8.png';
import poster9 from '../Images/GDPortfolio/Posters_9.png';
import booklet1 from '../Images/GDPortfolio/Booklets_1.png';
import identity1 from '../Images/GDPortfolio/Identity_1.png';
import identity2 from '../Images/GDPortfolio/Identity_2.png';
import identity3 from '../Images/GDPortfolio/Identity_3.png';
import tshirt1 from '../Images/GDPortfolio/Tshirts_1.png';
import tshirt2 from '../Images/GDPortfolio/Tshirts_2.png';
import tshirt3 from '../Images/GDPortfolio/Tshirts_3.png';


function Projects() {

    const calendarArray = [calendar1, calendar2, calendar3, calendar4, calendar5, calendar6, calendar7, calendar8, calendar9, calendar10, calendar11, calendar12 ];
    const diaryArray = [diary1, diary2, diary3, diary1, diary2, diary3, diary1, diary2, diary3, diary1, diary2, diary3 ];
    const postersArray = [poster1, poster2, poster3, poster4, poster5, poster6, poster7, poster8, poster9, poster1, poster2, poster3];
    const bookletsArray = [booklet1, booklet1, booklet1, booklet1, booklet1, booklet1, booklet1, booklet1, booklet1, booklet1, booklet1, booklet1, ];
    const identityArray = [identity1, identity2, identity3, identity1, identity2, identity3, identity1, identity2, identity3, identity1, identity2, identity3, ];
    const tshirtsArray = [tshirt1, tshirt2, tshirt3, tshirt1, tshirt2, tshirt3, tshirt1, tshirt2, tshirt3, tshirt1, tshirt2, tshirt3, ]; 

    let [imageIndex, setImageIndex] = useState(0);

    function increase() {
        if (imageIndex <= 10) {
            setImageIndex(imageIndex + 1);
        } else {
            setImageIndex(0);
        }
    }

    function decrease() {
        if (imageIndex > 0) {
            setImageIndex(imageIndex - 1);
        } else {
            setImageIndex(11);
        }
    }

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

    function calendarsSelected() {
        $('#calendars').removeClass("hidden");
        $('#diaries').addClass("hidden");
        $('#posters').addClass("hidden");
        $('#booklets').addClass("hidden");
        $('#identity').addClass("hidden");
        $('#tshirts').addClass("hidden");
        setImageIndex(0);
    }
    function diariesSelected() {
        $('#calendars').addClass("hidden");
        $('#diaries').removeClass("hidden");
        $('#posters').addClass("hidden");
        $('#booklets').addClass("hidden");
        $('#identity').addClass("hidden");
        $('#tshirts').addClass("hidden");
        setImageIndex(0);
    }
    function postersSelected() {
        $('#calendars').addClass("hidden");
        $('#diaries').addClass("hidden");
        $('#posters').removeClass("hidden");
        $('#booklets').addClass("hidden");
        $('#identity').addClass("hidden");
        $('#tshirts').addClass("hidden");
        setImageIndex(0);
    }
    function bookletsSelected() {
        $('#calendars').addClass("hidden");
        $('#diaries').addClass("hidden");
        $('#posters').addClass("hidden");
        $('#booklets').removeClass("hidden");
        $('#identity').addClass("hidden");
        $('#tshirts').addClass("hidden");
        setImageIndex(0);
    }
    function identitySelected() {
        $('#calendars').addClass("hidden");
        $('#diaries').addClass("hidden");
        $('#posters').addClass("hidden");
        $('#booklets').addClass("hidden");
        $('#identity').removeClass("hidden");
        $('#tshirts').addClass("hidden");
        setImageIndex(0);
    }
    function tshirtsSelected() {
        $('#calendars').addClass("hidden");
        $('#diaries').addClass("hidden");
        $('#posters').addClass("hidden");
        $('#booklets').addClass("hidden");
        $('#identity').addClass("hidden");
        $('#tshirts').removeClass("hidden");
        setImageIndex(0);
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

            <div id="projectsGridGD"  className="hidden">
                <div id="navigationAndCurrentInfo">
                    <div id="navigationGD">
                        <ul>
                            <li onClick={calendarsSelected}>Calendars</li>
                            <li onClick={diariesSelected}>Diaries</li>
                            <li onClick={postersSelected}>Posters</li>
                            <li onClick={bookletsSelected}>Booklets</li>
                            <li onClick={identitySelected}>Identity</li>
                            <li onClick={tshirtsSelected}>TShirts</li>
                        </ul>
                        <div id="navigationArrowsGD">
                            <svg className="navigationArrowGD" onClick={decrease} clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m9.474 5.209s-4.501 4.505-6.254 6.259c-.147.146-.22.338-.22.53s.073.384.22.53c1.752 1.754 6.252 6.257 6.252 6.257.145.145.336.217.527.217.191-.001.383-.074.53-.221.293-.293.294-.766.004-1.057l-4.976-4.976h14.692c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-14.692l4.978-4.979c.289-.289.287-.761-.006-1.054-.147-.147-.339-.221-.53-.221-.191-.001-.38.071-.525.215z" fillRule="nonzero" /></svg>
                            <svg className="navigationArrowGD" onClick={increase} clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m14.523 18.787s4.501-4.505 6.255-6.26c.146-.146.219-.338.219-.53s-.073-.383-.219-.53c-1.753-1.754-6.255-6.258-6.255-6.258-.144-.145-.334-.217-.524-.217-.193 0-.385.074-.532.221-.293.292-.295.766-.004 1.056l4.978 4.978h-14.692c-.414 0-.75.336-.75.75s.336.75.75.75h14.692l-4.979 4.979c-.289.289-.286.762.006 1.054.148.148.341.222.533.222.19 0 .378-.072.522-.215z" fillRule="nonzero" /></svg>
                        </div>
                    </div>
                    <div id="currentInfo"></div>
                </div>
                <div id="viewportGD" onClick={increase}>
                    <img id="calendars" className="portfolioImageGD" src={calendarArray[imageIndex]} alt="" />
                    <img id="diaries" className="portfolioImageGD hidden" src={diaryArray[imageIndex]} alt="" />
                    <img id="posters" className="portfolioImageGD hidden" src={postersArray[imageIndex]} alt="" />
                    <img id="booklets" className="portfolioImageGD hidden" src={bookletsArray[imageIndex]} alt="" />
                    <img id="identity" className="portfolioImageGD hidden" src={identityArray[imageIndex]} alt="" />
                    <img id="tshirts" className="portfolioImageGD hidden" src={tshirtsArray[imageIndex]} alt="" />
                </div>
            </div>







        </div>
    );
}

export default Projects;