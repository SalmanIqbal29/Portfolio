"use client"
import { createContext,  useEffect,  useState } from 'react';

export const DataContext = createContext(null);

const DataProvider = ({ children }) => {
    const [color, setColor] = useState("#1854b4");
    const [theme, setTheme] = useState('light');

    const [fontSizeAction, setFontSizeAction] = useState(null);

    const changeFontSize = (action) => {
        setFontSizeAction(action);
    };

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    useEffect(() => {
        if (fontSizeAction) {
            const elements = document.querySelectorAll(
                ".content, .aside, .nav a, .skill-percent, .title, i, span, h1, h2, h3, h4, h5, p, a"
            );
            elements.forEach((element) => {
                const currentFontSize = parseInt(
                    window.getComputedStyle(element).fontSize
                );
                const newFontSize =
                    fontSizeAction === "increase"
                        ? currentFontSize + 2
                        : currentFontSize - 2;
                element.style.fontSize = `${newFontSize}px`;
            });
            setFontSizeAction(null);
        }
    }, [fontSizeAction]);


    return (
        <DataContext.Provider value={{
            color,
            setColor,
            changeFontSize,
            theme,
            fontSizeAction,
            setFontSizeAction,
            toggleTheme 
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataProvider