import { useState, useEffect, useLayoutEffect } from 'react';

// Components
import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import Body from '../../components/Body/Body';
import Footer from '../../components/Footer/Footer';

// UI
import Layout from '../../components/UI/Layout/Layout';

// Styles
import classes from './Portfolio.module.css';

const Portfolio = () => {
    // State
    const [isLightMode, setIsLightMode] = useState(true);

    // Switch modes handler
    const switchModesHandler = () => {
        setIsLightMode(prevMode => !prevMode);
    };

    // Watch mode changes
    const watchModeChange = () => {
        const isDarkTheme = matchMedia('(prefers-color-scheme: dark)');
        const isLightTheme = matchMedia('(prefers-color-scheme: light)');
        isDarkTheme.addListener(e => e.matches && setIsLightMode(false));
        isLightTheme.addListener(e => e.matches && setIsLightMode(true));
        const matchesDarkMode = isDarkTheme.matches;
        const matchesLightMode = isLightTheme.matches;
        if (matchMedia && matchesDarkMode) setIsLightMode(false);
        if (matchMedia && matchesLightMode) setIsLightMode(true);
    };

    useLayoutEffect(watchModeChange, []);

    // Build console log
    const buildLogger = () => {
        const message = 'Hello there! Feel free to browse into my code. I made this portfolio with ReactJS, just to show some of my skills and present some of my highlighted projects. \nHope to hear from you!\n\nHave a great one :)';
        let styles = `
			font-size: 18px;
			font-family: 'Gordita', sans-serif;
			font-weight: bold;
		`;

        if (matchMedia && matchMedia('(prefers-color-scheme: dark)').matches) {
            styles += 'color: #fdfdfd;';
        } else {
            styles += 'color: #1f1f1f;';
        }

        console.log(`%c${message}`, styles);
    };

    useEffect(buildLogger, []);

    return (
        <div className={`${classes.Portfolio} ${isLightMode ? classes.Light : classes.Dark}`}>
            <Layout>
                <Header click={switchModesHandler} isLight={isLightMode} />
                <Hero />
                <Body />
                <Footer />
            </Layout>
        </div>
    );
};

export default Portfolio;
