import React, { createContext, useContext, useRef, useState } from 'react';

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
    const svgRef = useRef(null);

    const changeTheme = (themeName) => {
        setTheme(themes[themeName]);
    };

    const changeIconColor = (color) => {
        setIconColor(color);
    };

    const downloadSvgAsPng = () => {
        if (!svgRef.current) return;
        
        const svgElement = svgRef.current;
        const svgData = new XMLSerializer().serializeToString(svgElement);
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        const img = new Image();
        
        img.onload = () => {
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);
            canvas.toBlob((blob) => {
                const url = URL.createObjectURL(blob);
                const link = document.createElement('a');
                link.href = url;
                link.download = 'team-formation.png';
                link.click();
            });
        };
        img.src = 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(svgData)));
    };

    return (
        <TabContext.Provider value={{ theme, 
            changeTheme, 
            iconColor, 
            changeIconColor, 
            svgRef, 
            downloadSvgAsPng 
        }}>
            {children}
        </TabContext.Provider>
    );
};
