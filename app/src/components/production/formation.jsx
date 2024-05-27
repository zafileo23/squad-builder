import React from 'react';
import { useTeam } from '@/contexts/team-context';
import FieldSVG from '@/components/production/field-svg';
import { useTheme } from '@/contexts/tab-context';

export const TeamFormation = () => {
    const { team } = useTeam();
    const { iconColor } = useTheme(); // Access the iconColor from TabContext

    // Define the function inside the component
    const convertPosition = (playerPosition, maxFieldDimensions) => {
        return {
            x: (playerPosition.x / maxFieldDimensions.width) * 2670,
            y: (playerPosition.y / maxFieldDimensions.height) * 3690
        };
    };

    // Example dimensions, adjust as necessary
    const fieldWidth = 100; // maximum x value of player positions
    const fieldHeight = 100; // maximum y value of player positions

    return (
        <div className="max-w-4xl mx-auto overflow-hidden">
            <FieldSVG>
                {team.map(player => {
                    const position = convertPosition({ x: player.x, y: player.y }, { width: fieldWidth, height: fieldHeight });
                    return (
                        <g key={player.id} transform={`translate(${position.x}, ${position.y})`}>
                            {player.starter && (
                                <>
                                    {/* Outer white circle for visual emphasis */}
                                    <circle r="110" fill="white" />
                                    {/* Main player circle */}
                                    <circle r="90" fill={iconColor}/>
                                    {/* Player number text */}
                                    <text y="20" fontSize="65" textAnchor="middle" fill="white">
                                        {player.number}
                                    </text>
                                </>
                            )}
                            <text 
                              y="205" 
                              fontSize="80" 
                              textAnchor="middle"
                              style={{ fontFamily: 'Inter, sans-serif', fontSize: '80px', fontWeight: '300', fill: 'white' }}
                            > 
                              {player.name}
                            </text>
                        </g>
                    );
                })}
            </FieldSVG>
        </div>
    );
};

export default TeamFormation;
