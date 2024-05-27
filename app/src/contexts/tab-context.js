import React, { createContext, useContext, useState } from 'react';

const themes = {
    default: { bgColor: '#4b4', bgSecondColor: '#5c5', lineColor: '#efe' },
    night: { bgColor: '#333', bgSecondColor: '#444', lineColor: '#ccc' },
    beach: { bgColor: '#5DADE2', bgSecondColor: '#FAD7A0', lineColor: '#154360' },
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
