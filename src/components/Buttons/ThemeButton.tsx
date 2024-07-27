import { Theme } from '../../models/theme';

import './theme-button.css';

interface Props {
    theme: Theme;
    setCurrentTheme: React.Dispatch<React.SetStateAction<Theme>>;
}

const ThemeButton = ({ theme, setCurrentTheme }: Props) => {
    const toggleTheme = (): void => {
        setCurrentTheme((currentValue) => currentValue === Theme.LIGHT ? Theme.DARK : Theme.LIGHT)
    };

    return (
        <button
            className={`theme-button ${theme === Theme.LIGHT ? 'light' : 'dark'}`}
            onClick={toggleTheme}    
        >
            {theme === 'light'
                ? <span className='fa-solid fa-sun'></span>
                : <span className='fa-solid fa-moon'></span>
            }
        </button>
    );
};

export default ThemeButton;