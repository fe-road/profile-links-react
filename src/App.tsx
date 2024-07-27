import { useState } from 'react';

import MainButtonsContainer from './components/Buttons/MainButtonsContainer';
import MainSection from './components/MainSection/MainSection';
import SocialMediaContainer from './components/SocialMedia/SocialMediaContainer';
import ThemeButton from './components/Buttons/ThemeButton';

import { Theme } from './models/theme';

import './App.css';

function App() {
    const [currentTheme, setCurrentTheme] = useState(Theme.DARK);
    
    return (
        <main
            className='main-container'
            data-theme={currentTheme}
        >
            <div className='content-container'>
                <MainSection />
                <MainButtonsContainer />
                <SocialMediaContainer />
            </div>

            <ThemeButton
                theme={currentTheme}
                setCurrentTheme={setCurrentTheme}
            />
        </main>
    )
}

export default App;
