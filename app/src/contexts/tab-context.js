import React, { createContext, useContext, useState } from 'react';

const themes = {
    default: { bgColor: '#4b4', bgSecondColor: '#5c5', lineColor: '#efe' },
    lightGreen: { bgColor: '#5c5', bgSecondColor: '#5c5', lineColor: '#efe' },
    darkGreen: { bgColor: '#4b4', bgSecondColor: '#4b4', lineColor: '#efe' },
    light: { bgColor: '#CBD2D3', bgSecondColor: '#CBD2D3', lineColor: '#F6F6F4' },
    dark: { bgColor: '#343332', bgSecondColor: '#343332', lineColor: '#454545' },
    // Add more themes as needed
};

const TabContext = createContext();

export const useTheme = () => useContext(TabContext);

export const TabProvider = ({ children }) => {
    const [theme, setTheme] = useState(themes.default);
    const [iconColor, setIconColor] = useState('#034694');

    const changeTheme = (themeName) => {
        setTheme(themes[themeName]);
    };

    const changeIconColor = (color) => {
        setIconColor(color);
    };

    return (
        <TabContext.Provider value={{ theme, changeTheme, iconColor, changeIconColor }}>
            {children}
        </TabContext.Provider>
    );
};
