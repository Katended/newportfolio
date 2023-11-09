import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import portfolioData from '../../data/portfolio.json';

const Portfolio = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const [portfolio, setPortfolio] = useState([]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        return () => {
            clearTimeout(timer);
        }
    });

    const renderPortfolio = (portfolio) => {
        return (
            <div className="images-container">
                {
                    portfolioData.portfolio.map((port, idx) => {
                        return (
                            <div className="image-box" key={idx}>
                                <img
                                    src={port.cover}
                                    className="portfolio-image"
                                    alt="portfolio" />
                                <div className="content">
                                    <p className="title">{port.title}</p>
                                    <h4 className="description">{port.description}</h4>
                                    <button
                                        className="btn"
                                        onClick={() => window.open(port.git)}
                                    >GitHub</button>
                                    <button
                                        className="btn"
                                        onClick={() => window.open(port.url)}
                                    >Live Demo</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        );
    }


    return (
        <>
            <div className="container portfolio-page">
                <h1 >
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={"Works".split("")}
                        idx={5}
                    />
                </h1>
                {renderPortfolio(portfolio)}
            </div>
            <Loader type="pacman" />
        </>
    );
}

export default Portfolio;