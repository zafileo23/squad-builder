import React from 'react';
import { useTheme } from '@/contexts/tab-context';

export const FieldSVG = ({ children }) => {
    const { theme } = useTheme();
    const { bgColor, bgSecondColor, lineColor } = theme;

    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2670 3690" className="w-3/4 h-auto">
            <defs>
                <pattern id="fieldPattern" width="2" patternUnits="userSpaceOnUse" patternTransform="matrix(0 205 -205 0 0 0)" height="2">
                    <rect width="1" fill={bgColor} height="2"/>
                    <rect x="1" height="2" width="1" fill={bgSecondColor}/>
                </pattern>
            </defs>
            <rect width="2670" height="3690" fill={bgColor} />
            <rect width="2670" fill="url(#fieldPattern)" rx="40" height="3690"/>
            <g stroke={lineColor} strokeWidth="11" fill="none">
                <path d="m106.7 1845h2456m-2456 1641v-3282l2456 .3v3282z"/>
                <g id="g">
                    <circle cy="3187" cx="1335" r="11"/>
                    <path d="m2563 3446c-22 0-40 18-40 40m-2416-40c22.1 0 40 18 40 40m936 0v-156h504v156m297 0v-452h-1098l.6 452h447.4v84h202v-84zm-752-452a249 249 0 0 1 406 0"/>
                </g>
                <use y="-3690" xlinkHref="#g" transform="scale(1,-1)"/>
                <circle cy="1845" cx="1335" r="249"/>
                <circle cy="1845" cx="1335" r="11"/>
            </g>
            {children}
        </svg>
    );
};

export default FieldSVG;
