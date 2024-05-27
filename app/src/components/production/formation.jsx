import React from 'react';
import { useTeam } from '@/contexts/team-context';
import FieldSVG from '@/components/production/field-svg';
import { useTheme } from '@/contexts/tab-context';

export const TeamFormation = () => {
    const { team } = useTeam();
    const { theme, iconColor } = useTheme();

    const getPlayerTextColor = (iconColor) => {
        if (iconColor === "#fde100" || iconColor === "#ffffff") {
            return "black";
        }
        return "white";
    };

    const getPlayerNameTextColor = (player) => {
        if (!player.starter && theme.bgColor === "#ECEEED") {
            return "rgba(0, 0, 0, 0.6)";
        }
        if (!player.starter) {
            return "rgba(255, 255, 255, 0.6)";
        }
        if (theme.bgColor === "#ECEEED") {
            return "black";
        }
        return "white";
    };

    const convertPosition = (playerPosition, maxFieldDimensions) => {
        return {
            x: (playerPosition.x / maxFieldDimensions.width) * 2670,
            y: (playerPosition.y / maxFieldDimensions.height) * 3690
        };
    };

    return (
        <div className="max-w-4xl mx-auto overflow-hidden">
            <FieldSVG>
                {team.map(player => {
                    console.log('Player Position:', player.position);

                    const position = convertPosition({ x: player.x, y: player.y }, { width: 100, height: 100 });
                    return (
                        <g key={player.id} transform={`translate(${position.x}, ${position.y})`}>
                            {player.starter && (
                                <>
                                    <circle r="110" fill="white" />
                                    <circle r="90" fill={iconColor} />
                                    <text y="20" fontSize="65" textAnchor="middle" fill={getPlayerTextColor(iconColor)}>
                                        {player.number}
                                    </text>
                                </>
                            )}
                            <text 
                              y="205" 
                              fontSize="80" 
                              textAnchor="middle"
                              style={{ fontFamily: 'Inter, sans-serif', fontSize: '80px', fontWeight: '400', fill: getPlayerNameTextColor(player) }}
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
