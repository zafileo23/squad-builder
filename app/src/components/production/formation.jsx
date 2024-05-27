import { useTeam } from '@/contexts/team-context';
import FieldSVG from '@/components/production/field-svg';

export const TeamFormation = () => {
    const { team, updatePlayerName } = useTeam();

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
                            <circle r="50" fill="blue" />
                            <text y="150" fontSize="80" textAnchor="middle">{player.name}</text>
                        </g>
                    );
                })}
            </FieldSVG>
        </div>
    );
};

export default TeamFormation;