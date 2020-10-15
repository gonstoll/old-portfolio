import React, { useState, useEffect, useLayoutEffect } from 'react';

// Components
import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import Body from '../../components/Body/Body';
import Footer from '../../components/Footer/Footer';

// UI
import Layout from '../../UI/Layout/Layout';

// Styles
import classes from './Portfolio.module.css';

const Portfolio = () => {
    const [ modeState, setModeState ] = useState({ lightMode: true });

    const switchModesHandler = () => {
		setModeState(prevState => ({ lightMode: !prevState.lightMode }));
    };

    const watchModeChange = () => {
        const isDarkTheme = matchMedia('(prefers-color-scheme: dark)');
		const isLightTheme = matchMedia('(prefers-color-scheme: light)');
		isDarkTheme.addListener(e => e.matches && setModeState({ lightMode: false }));
		isLightTheme.addListener(e => e.matches && setModeState({ lightMode: true }));
		const matchesDarkMode = isDarkTheme.matches;
		const matchesLightMode = isLightTheme.matches;
		if (matchMedia && matchesDarkMode) setModeState({ lightMode: false });
		if (matchMedia && matchesLightMode) setModeState({ lightMode: true });
    };

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

    useLayoutEffect(watchModeChange, []);
    useEffect(buildLogger, []);

    const modeClass = [classes.Portfolio];
    if (modeState.lightMode) {
        modeClass.push(classes.Light);
    } else {
        modeClass.push(classes.Dark);
    }

    return (
        <div className={modeClass.join(' ')}>
            <Layout>
                <Header click={switchModesHandler} isLight={modeState.lightMode} />
                <Hero />
                <Body />
                <Footer />
            </Layout>
        </div>
	);
};

export default Portfolio;
