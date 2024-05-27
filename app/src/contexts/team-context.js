import { createContext, useContext, useState } from 'react';

const TeamContext = createContext();

export const useTeam = () => useContext(TeamContext);

export const TeamProvider = ({ children }) => {
    const [team, setTeam] = useState([
        { id: 1, positionId: 1, positionIndex: 1, number: 1, name: "Player 1", position: "Goalkeeper", x: 50, y: 90 },
        { id: 2, positionId: 3, positionIndex: 1, number: 3, name: "Player 3", position: "Left Back", x: 20, y: 70 },
        { id: 3, positionId: 5, positionIndex: 1, number: 5, name: "Player 5", position: "LCB", x: 40, y: 70 },
        { id: 4, positionId: 4, positionIndex: 1, number: 4, name: "Player 4", position: "RCB", x: 60, y: 70 },
        { id: 5, positionId: 2, positionIndex: 1, number: 2, name: "Player 2", position: "Right back", x: 80, y: 70 },
        { id: 6, positionId: 10, positionIndex: 1, number: 10, name: "Player 10", position: "Center Midfielder", x: 30, y: 50 },
        { id: 7, positionId: 6, positionIndex: 1, number: 6, name: "Player 6", position: "Center Midfielder", x: 50, y: 50 },
        { id: 8, positionId: 8, positionIndex: 1, number: 8, name: "Player 8", position: "Center Midfielder", x: 70, y: 50 },
        { id: 9, positionId: 11, positionIndex: 1, number: 11, name: "Player 11", position: "Left Wing", x: 30, y: 30 },
        { id: 10, positionId: 9, positionIndex: 1, number: 9, name: "Player 9", position: "Striker", x: 50, y: 30 },
        { id: 11, positionId: 7, positionIndex: 1, number: 7, name: "Player 7", position: "Right Wing", x: 70, y: 30 }
    ]);

    const updatePlayerName = (id, name) => {
        setTeam(currentTeam =>
            currentTeam.map(player =>
                player.id === id ? { ...player, name } : player
            )
        );
    };

    const updatePlayerNumber = (id, number) => {
        setTeam(currentTeam =>
            currentTeam.map(player =>
                player.id === id ? { ...player, number } : player
            )
        );
    };

    const addBackupPlayer = (positionId) => {
        const positionPlayers = team.filter(player => player.positionId === positionId);
        const newPositionIndex = positionPlayers.length + 1;
        const positionName = positionPlayers[0].position;

        const newPlayer = {
            id: Math.max(...team.map(p => p.id)) + 1,
            positionId: positionId,
            positionIndex: newPositionIndex,
            number: '', 
            name: '',
            position: `${positionName} #${newPositionIndex}`,
            x: positionPlayers[0].x, // Optionally adjust coordinates
            y: positionPlayers[0].y + 30 * newPositionIndex, // Adjust Y to space out backups
        };
        setTeam([...team, newPlayer]);
    };

    return (
        <TeamContext.Provider value={{ team, updatePlayerName, updatePlayerNumber, addBackupPlayer }}>
            {children}
        </TeamContext.Provider>
    );
};