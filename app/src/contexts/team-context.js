import { createContext, useContext, useState } from 'react';

const TeamContext = createContext();

export const useTeam = () => useContext(TeamContext);

export const TeamProvider = ({ children }) => {
    const formations = {
        "4-3-3": [
            { positionId: 1, x: 50, y: 90, position: "Goalkeeper" }, // Goalkeeper
            { positionId: 3, x: 20, y: 70, position: "Left Back" }, // Left Back
            { positionId: 5, x: 40, y: 70, position: "Center Back" }, // LCB
            { positionId: 4, x: 60, y: 70, position: "Center Back" }, // RCB
            { positionId: 2, x: 80, y: 70, position: "Right Back" }, // Right Back
            { positionId: 10, x: 30, y: 50, position: "Center Midfielder" }, // Center Midfielder
            { positionId: 6, x: 50, y: 55, position: "Center Defensive Midfielder" }, // Center Midfielder
            { positionId: 8, x: 70, y: 50, position: "Center Midfielder" }, // Center Midfielder
            { positionId: 11, x: 30, y: 30, position: "Left Wing" }, // Left Wing
            { positionId: 9, x: 50, y: 30, position: "Striker" }, // Striker
            { positionId: 7, x: 70, y: 30, position: "Right Wing" } // Right Wing
        ],
        "4-4-2": [
            { positionId: 1, x: 50, y: 90, position: "Goalkeeper" }, // Goalkeeper
            { positionId: 3, x: 20, y: 70, position: "Left Back" }, // Left Back
            { positionId: 5, x: 40, y: 70, position: "Center Back" }, // LCB
            { positionId: 4, x: 60, y: 70, position: "Center Back" }, // RCB
            { positionId: 2, x: 80, y: 70, position: "Right Back" }, // Right Back
            { positionId: 11, x: 20, y: 50, position: "Left Midfielder" }, // Left Midfielder
            { positionId: 6, x: 40, y: 50, position: "Center Midfielder" }, // Center Midfielder
            { positionId: 8, x: 60, y: 50, position: "Center Midfielder" }, // Center Midfielder
            { positionId: 7, x: 80, y: 50, position: "Right Midfielder" }, // Right Midfielder
            { positionId: 10, x: 40, y: 30, position: "Forward" }, // Striker
            { positionId: 9, x: 60, y: 30, position: "Forward" }, // Striker   
        ],
        "4-2-3-1": [
            { positionId: 1, x: 50, y: 90, position: "Goalkeeper" }, // Goalkeeper
            { positionId: 3, x: 20, y: 70, position: "Left Back" }, // Left Back
            { positionId: 5, x: 40, y: 70, position: "Center Back" }, // LCB
            { positionId: 4, x: 60, y: 70, position: "Center Back" }, // RCB
            { positionId: 2, x: 80, y: 70, position: "Right Back" }, // Right Back
            { positionId: 6, x: 40, y: 55, position: "Center Midfielder" }, // Center Midfielder
            { positionId: 8, x: 60, y: 55, position: "Center Midfielder" }, // Center Midfielder
            { positionId: 11, x: 30, y: 35, position: "Left Midfielder" }, // Left Midfielder
            { positionId: 10, x: 50, y: 35, position: "Attacking Midfielder" }, // Attacking Midfielder
            { positionId: 7, x: 70, y: 35, position: "Right Midfielder" }, // Right Midfielder
            { positionId: 9, x: 50, y: 20, position: "Striker" }, // Striker   
        ],
        "4-2-2-2": [
            { positionId: 1, x: 50, y: 90, position: "Goalkeeper" }, // Goalkeeper
            { positionId: 3, x: 20, y: 70, position: "Left Back" }, // Left Back
            { positionId: 5, x: 40, y: 70, position: "Center Back" }, // LCB
            { positionId: 4, x: 60, y: 70, position: "Center Back" }, // RCB
            { positionId: 2, x: 80, y: 70, position: "Right Back" }, // Right Back
            { positionId: 11, x: 20, y: 45, position: "Left Wing" }, // Left Wing
            { positionId: 6, x: 40, y: 55, position: "Center Midfielder" }, // Center Midfielder
            { positionId: 8, x: 60, y: 55, position: "Center Midfielder" }, // Center Midfielder
            { positionId: 7, x: 80, y: 45, position: "Right Wing" }, // Right Wing
            { positionId: 10, x: 40, y: 30, position: "Forward" }, // Striker
            { positionId: 9, x: 60, y: 30, position: "Forward" }, // Striker   
        ],
        "4-1-2-1-2": [
            { positionId: 1, x: 50, y: 90, position: "Goalkeeper" }, // Goalkeeper
            { positionId: 3, x: 20, y: 70, position: "Left Back" }, // Left Back
            { positionId: 5, x: 40, y: 70, position: "Center Back" }, // LCB
            { positionId: 4, x: 60, y: 70, position: "Center Back" }, // RCB
            { positionId: 2, x: 80, y: 70, position: "Right Back" }, // Right Back
            { positionId: 6, x: 50, y: 60, position: "Center Defensive Midfielder" }, // Center Midfielder
            { positionId: 8, x: 70, y: 45, position: "Center Midfielder" }, // Center Midfielder
            { positionId: 11, x: 30, y: 45, position: "Left Wing" }, // Left Wing
            { positionId: 10, x: 50, y: 35, position: "Center Midfielder" }, // Center Midfielder
            { positionId: 9, x: 40, y: 20, position: "Forward" }, // Forward
            { positionId: 7, x: 60, y: 20, position: "Forward" } // Forward
        ],
        "4-5-1": [
            { positionId: 1, x: 50, y: 90, position: "Goalkeeper" }, // Goalkeeper
            { positionId: 3, x: 20, y: 70, position: "Left Back" }, // Left Back
            { positionId: 5, x: 40, y: 70, position: "Center Back" }, // LCB
            { positionId: 4, x: 60, y: 70, position: "Center Back" }, // RCB
            { positionId: 2, x: 80, y: 70, position: "Right Back" }, // Right Back
            { positionId: 10, x: 35, y: 40, position: "Center Midfielder" }, // Center Midfielder
            { positionId: 6, x: 50, y: 50, position: "Center Defensive Midfielder" }, // Center Midfielder
            { positionId: 8, x: 65, y: 40, position: "Center Midfielder" }, // Center Midfielder
            { positionId: 11, x: 20, y: 50, position: "Left Wing" }, // Left Wing
            { positionId: 9, x: 50, y: 30, position: "Striker" }, // Striker
            { positionId: 7, x: 80, y: 50, position: "Right Wing" } // Right Wing
        ],
        "3-5-2": [
            { positionId: 1, x: 50, y: 90 }, // Goalkeeper
            { positionId: 3, x: 20, y: 70 }, // Left Back
            { positionId: 5, x: 40, y: 70 }, // LCB
            { positionId: 4, x: 60, y: 70 }, // RCB
            { positionId: 2, x: 80, y: 70 }, // Right Back
            { positionId: 6, x: 40, y: 55 }, // Center Midfielder
            { positionId: 8, x: 60, y: 55 }, // Center Midfielder
            { positionId: 11, x: 30, y: 35 }, // Left Midfielder
            { positionId: 10, x: 50, y: 35 }, // Attacking Midfielder
            { positionId: 7, x: 70, y: 35 }, // Right Midfielder
            { positionId: 9, x: 50, y: 20 }, // Striker   
        ],
        "3-4-3": [
            { positionId: 1, x: 50, y: 90 }, // Goalkeeper
            { positionId: 3, x: 20, y: 70 }, // Left Back
            { positionId: 5, x: 40, y: 70 }, // LCB
            { positionId: 4, x: 60, y: 70 }, // RCB
            { positionId: 2, x: 80, y: 70 }, // Right Back
            { positionId: 6, x: 40, y: 55 }, // Center Midfielder
            { positionId: 8, x: 60, y: 55 }, // Center Midfielder
            { positionId: 11, x: 30, y: 35 }, // Left Midfielder
            { positionId: 10, x: 50, y: 35 }, // Attacking Midfielder
            { positionId: 7, x: 70, y: 35 }, // Right Midfielder
            { positionId: 9, x: 50, y: 20 }, // Striker   
        ],
        "3-4-2-1": [
            { positionId: 1, x: 50, y: 90 }, // Goalkeeper
            { positionId: 3, x: 20, y: 70 }, // Left Back
            { positionId: 5, x: 40, y: 70 }, // LCB
            { positionId: 4, x: 60, y: 70 }, // RCB
            { positionId: 2, x: 80, y: 70 }, // Right Back
            { positionId: 6, x: 40, y: 55 }, // Center Midfielder
            { positionId: 8, x: 60, y: 55 }, // Center Midfielder
            { positionId: 11, x: 30, y: 35 }, // Left Midfielder
            { positionId: 10, x: 50, y: 35 }, // Attacking Midfielder
            { positionId: 7, x: 70, y: 35 }, // Right Midfielder
            { positionId: 9, x: 50, y: 20 }, // Striker   
        ],
        "3-4-1-2": [
            { positionId: 1, x: 50, y: 90 }, // Goalkeeper
            { positionId: 3, x: 20, y: 70 }, // Left Back
            { positionId: 5, x: 40, y: 70 }, // LCB
            { positionId: 4, x: 60, y: 70 }, // RCB
            { positionId: 2, x: 80, y: 70 }, // Right Back
            { positionId: 6, x: 40, y: 55 }, // Center Midfielder
            { positionId: 8, x: 60, y: 55 }, // Center Midfielder
            { positionId: 11, x: 30, y: 35 }, // Left Midfielder
            { positionId: 10, x: 50, y: 35 }, // Attacking Midfielder
            { positionId: 7, x: 70, y: 35 }, // Right Midfielder
            { positionId: 9, x: 50, y: 20 }, // Striker   
        ],
    };
    
    const defaultFormation = "4-3-3"; // Default formation   
    
    const [currentFormation, setCurrentFormation] = useState(defaultFormation);

    const [team, setTeam] = useState([
        { id: 1, positionId: 1, positionIndex: 1, number: 1, name: "Player 1", position: "Goalkeeper", x: 50, y: 90, starter: true },
        { id: 2, positionId: 3, positionIndex: 1, number: 3, name: "Player 3", position: "Left Back", x: 20, y: 70, starter: true },
        { id: 3, positionId: 5, positionIndex: 1, number: 5, name: "Player 5", position: "LCB", x: 40, y: 70, starter: true },
        { id: 4, positionId: 4, positionIndex: 1, number: 4, name: "Player 4", position: "RCB", x: 60, y: 70, starter: true },
        { id: 5, positionId: 2, positionIndex: 1, number: 2, name: "Player 2", position: "Right back", x: 80, y: 70, starter: true },
        { id: 6, positionId: 10, positionIndex: 1, number: 10, name: "Player 10", position: "Center Midfielder", x: 30, y: 50, starter: true },
        { id: 7, positionId: 6, positionIndex: 1, number: 6, name: "Player 6", position: "Center Defensive Midfielder", x: 50, y: 55, starter: true },
        { id: 8, positionId: 8, positionIndex: 1, number: 8, name: "Player 8", position: "Center Midfielder", x: 70, y: 50, starter: true },
        { id: 9, positionId: 11, positionIndex: 1, number: 11, name: "Player 11", position: "Left Wing", x: 30, y: 30, starter: true },
        { id: 10, positionId: 9, positionIndex: 1, number: 9, name: "Player 9", position: "Striker", x: 50, y: 30, starter: true },
        { id: 11, positionId: 7, positionIndex: 1, number: 7, name: "Player 7", position: "Right Wing", x: 70, y: 30, starter: true }
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
            y: positionPlayers[0].y + 1 * newPositionIndex, // Adjust Y to space out backup
            starter: false
        };
        setTeam([...team, newPlayer]);
    };

    const applyFormation = (formationName) => {
        const formation = formations[formationName];
        setTeam(currentTeam => currentTeam.map(player => ({
            ...player,
            ...formation.find(f => f.positionId === player.positionId) // Spread operator merges position data
        })));
        setCurrentFormation(formationName);
    };

    return (
        <TeamContext.Provider value={{ 
            team, 
            updatePlayerName, 
            updatePlayerNumber, 
            addBackupPlayer, 
            applyFormation, 
            currentFormation 
        }}>
            {children}
        </TeamContext.Provider>
    );    
};