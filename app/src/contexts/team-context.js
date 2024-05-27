import { createContext, useContext, useState } from 'react';

const TeamContext = createContext();

export const useTeam = () => useContext(TeamContext);

export const TeamProvider = ({ children }) => {
    const formations = {
        "4-3-3": [
            { positionId: 1, x: 50, y: 84, position: "GK" }, // Goalkeeper
            { positionId: 3, x: 20, y: 70, position: "LB" }, // Left Back
            { positionId: 5, x: 40, y: 70, position: "LCB" }, // LCB
            { positionId: 4, x: 60, y: 70, position: "RCB" }, // RCB
            { positionId: 2, x: 80, y: 70, position: "RB" }, // Right Back
            { positionId: 10, x: 30, y: 50, position: "CM" }, // Center Midfielder
            { positionId: 6, x: 50, y: 55, position: "CDM" }, // Center Midfielder
            { positionId: 8, x: 70, y: 50, position: "CM" }, // Center Midfielder
            { positionId: 11, x: 30, y: 30, position: "LW" }, // Left Wing
            { positionId: 9, x: 50, y: 30, position: "ST" }, // Striker
            { positionId: 7, x: 70, y: 30, position: "RW" } // Right Wing
        ],
        "4-4-2": [
            { positionId: 1, x: 50, y: 84, position: "GK" }, // Goalkeeper
            { positionId: 3, x: 20, y: 70, position: "LB" }, // Left Back
            { positionId: 5, x: 40, y: 70, position: "LCB" }, // LCB
            { positionId: 4, x: 60, y: 70, position: "CB" }, // RCB
            { positionId: 2, x: 80, y: 70, position: "RB" }, // Right Back
            { positionId: 11, x: 20, y: 50, position: "LM" }, // Left Midfielder
            { positionId: 6, x: 40, y: 50, position: "CM" }, // Center Midfielder
            { positionId: 8, x: 60, y: 50, position: "CM" }, // Center Midfielder
            { positionId: 7, x: 80, y: 50, position: "RM" }, // Right Midfielder
            { positionId: 10, x: 40, y: 30, position: "ST" }, // Striker
            { positionId: 9, x: 60, y: 30, position: "ST" }, // Striker   
        ],
        "4-2-3-1": [
            { positionId: 1, x: 50, y: 84, position: "GK" }, // Goalkeeper
            { positionId: 3, x: 20, y: 70, position: "LB" }, // Left Back
            { positionId: 5, x: 40, y: 70, position: "LCB" }, // LCB
            { positionId: 4, x: 60, y: 70, position: "RCB" }, // RCB
            { positionId: 2, x: 80, y: 70, position: "RB" }, // Right Back
            { positionId: 6, x: 40, y: 55, position: "CM" }, // Center Midfielder
            { positionId: 8, x: 60, y: 55, position: "CM" }, // Center Midfielder
            { positionId: 11, x: 30, y: 35, position: "LM" }, // Left Midfielder
            { positionId: 10, x: 50, y: 35, position: "CAM" }, // Attacking Midfielder
            { positionId: 7, x: 70, y: 35, position: "RM" }, // Right Midfielder
            { positionId: 9, x: 50, y: 20, position: "ST" }, // Striker   
        ],
        "4-2-2-2": [
            { positionId: 1, x: 50, y: 84, position: "GK" }, // Goalkeeper
            { positionId: 3, x: 20, y: 70, position: "LB" }, // Left Back
            { positionId: 5, x: 40, y: 70, position: "LCB" }, // LCB
            { positionId: 4, x: 60, y: 70, position: "RCB" }, // RCB
            { positionId: 2, x: 80, y: 70, position: "RB" }, // Right Back
            { positionId: 11, x: 20, y: 45, position: "LW" }, // Left Wing
            { positionId: 6, x: 40, y: 55, position: "CM" }, // Center Midfielder
            { positionId: 8, x: 60, y: 55, position: "CM" }, // Center Midfielder
            { positionId: 7, x: 80, y: 45, position: "RW" }, // Right Wing
            { positionId: 10, x: 40, y: 30, position: "ST" }, // Forward
            { positionId: 9, x: 60, y: 30, position: "ST" }, // Forward   
        ],
        "4-1-2-1-2": [
            { positionId: 1, x: 50, y: 84, position: "GK" }, // Goalkeeper
            { positionId: 3, x: 20, y: 70, position: "LB" },
            { positionId: 5, x: 40, y: 70, position: "LCB" },
            { positionId: 4, x: 60, y: 70, position: "RCB" },
            { positionId: 2, x: 80, y: 70, position: "RB" },
            { positionId: 6, x: 50, y: 55, position: "CDM" },
            { positionId: 8, x: 70, y: 45, position: "RM" },
            { positionId: 11, x: 30, y: 45, position: "LM" },
            { positionId: 10, x: 50, y: 35, position: "CAM" },
            { positionId: 9, x: 40, y: 20, position: "ST" },
            { positionId: 7, x: 60, y: 20, position: "ST" }
        ],
        "4-5-1": [
            { positionId: 1, x: 50, y: 84, position: "GK" }, // Goalkeeper
            { positionId: 3, x: 20, y: 70, position: "LB" },
            { positionId: 5, x: 40, y: 70, position: "LCB" },
            { positionId: 4, x: 60, y: 70, position: "RCB" },
            { positionId: 2, x: 80, y: 70, position: "RB" },
            { positionId: 11, x: 20, y: 50, position: "LM" },
            { positionId: 10, x: 35, y: 40, position: "CAM" },
            { positionId: 6, x: 50, y: 50, position: "CM" },
            { positionId: 8, x: 65, y: 40, position: "CAM" },
            { positionId: 7, x: 80, y: 50, position: "RM" },
            { positionId: 9, x: 50, y: 30, position: "ST" },
        ],
        "3-5-2": [
            { positionId: 1, x: 50, y: 84, position: "GK" }, // Goalkeeper
            { positionId: 3, x: 15, y: 55, position: "LWB"  }, // Left Wing Back
            { positionId: 5, x: 30, y: 70, position: "LCB"  }, // LCB
            { positionId: 4, x: 50, y: 70, position: "CCB"  }, // CCB
            { positionId: 2, x: 70, y: 70, position: "RCB"  }, // RCB
            { positionId: 7, x: 85, y: 55, position: "RWB"  }, // Right Wing Back
            { positionId: 10, x: 30, y: 50, position: "CM"  }, // Center Midfielder
            { positionId: 6, x: 50, y: 55, position: "CM"  }, // Center Midfielder
            { positionId: 8, x: 70, y: 50, position: "CM"  }, // Center Midfielder
            { positionId: 9, x: 40, y: 30, position: "ST"  }, // Forward   
            { positionId: 11, x: 60, y: 30, position: "ST"  }, // Forward
        ],
        "3-4-3": [
            { positionId: 1, x: 50, y: 84, position: "GK" }, // Goalkeeper
            { positionId: 3, x: 20, y: 50, position: "LWB"  }, // Left Wing Back
            { positionId: 5, x: 30, y: 70, position: "LCB"  }, // LCB
            { positionId: 4, x: 50, y: 70, position: "CCB"  }, // CCB
            { positionId: 2, x: 70, y: 70, position: "RCB"  }, // RCB
            { positionId: 7, x: 80, y: 50, position: "RWB"  }, // Right Wing Back
            { positionId: 6, x: 40, y: 50, position: "CM"  }, // Center Midfielder
            { positionId: 8, x: 60, y: 50, position: "CM"  }, // Center Midfielder
            { positionId: 10, x: 30, y: 30, position: "LW"  }, // Left Wing
            { positionId: 9, x: 50, y: 30, position: "ST"  }, // Forward   
            { positionId: 11, x: 70, y: 30, position: "RW"  }, // Right Wing
        ],
        "3-4-2-1": [
            { positionId: 1, x: 50, y: 84, position: "GK" }, // Goalkeeper
            { positionId: 3, x: 20, y: 50, position: "LWB"  }, // Left Wing Back
            { positionId: 5, x: 30, y: 70, position: "LCB"  }, // LCB
            { positionId: 4, x: 50, y: 70, position: "CCB"  }, // CCB
            { positionId: 2, x: 70, y: 70, position: "RCB"  }, // RCB
            { positionId: 7, x: 80, y: 50, position: "RWB"  }, // Right Wing Back
            { positionId: 6, x: 40, y: 50, position: "CM"  }, // Center Midfielder
            { positionId: 8, x: 60, y: 50, position: "CM"  }, // Center Midfielder
            { positionId: 10, x: 35, y: 35, position: "LF"  }, // Left Forward
            { positionId: 11, x: 65, y: 35, position: "RF"  }, // Right Forward
            { positionId: 9, x: 50, y: 25, position: "ST"  }, // Forward   
        ],
        "3-4-1-2": [
            { positionId: 1, x: 50, y: 84, position: "GK" }, // Goalkeeper
            { positionId: 3, x: 20, y: 50, position: "LWB"  }, // Left Wing Back
            { positionId: 5, x: 30, y: 70, position: "LCB"  }, // LCB
            { positionId: 4, x: 50, y: 70, position: "CCB"  }, // CCB
            { positionId: 2, x: 70, y: 70, position: "RCB"  }, // RCB
            { positionId: 7, x: 80, y: 50, position: "RWB"  }, // Right Wing Back
            { positionId: 6, x: 40, y: 50, position: "CM"  }, // Center Midfielder
            { positionId: 8, x: 60, y: 50, position: "CM"  }, // Center Midfielder
            { positionId: 10, x: 50, y: 35, position: "CAM"  }, // Left Forward
            { positionId: 11, x: 40, y: 25, position: "RW"  }, // Right Forward
            { positionId: 9, x: 60, y: 25, position: "ST"  }, // Forward   
        ],
    };
    
    const defaultFormation = "4-3-3"; // Default formation   
    
    const [currentFormation, setCurrentFormation] = useState(defaultFormation);

    const [team, setTeam] = useState([
        { id: 1, positionId: 1, positionIndex: 1, number: 1, name: "Player 1", position: "GK", x: 50, y: 84, starter: true },
        { id: 2, positionId: 3, positionIndex: 1, number: 3, name: "Player 3", position: "LB", x: 20, y: 70, starter: true },
        { id: 3, positionId: 5, positionIndex: 1, number: 5, name: "Player 5", position: "LCB", x: 40, y: 70, starter: true },
        { id: 4, positionId: 4, positionIndex: 1, number: 4, name: "Player 4", position: "RCB", x: 60, y: 70, starter: true },
        { id: 5, positionId: 2, positionIndex: 1, number: 2, name: "Player 2", position: "RB", x: 80, y: 70, starter: true },
        { id: 6, positionId: 10, positionIndex: 1, number: 10, name: "Player 10", position: "CM", x: 30, y: 50, starter: true },
        { id: 7, positionId: 6, positionIndex: 1, number: 6, name: "Player 6", position: "CDM", x: 50, y: 55, starter: true },
        { id: 8, positionId: 8, positionIndex: 1, number: 8, name: "Player 8", position: "CM", x: 70, y: 50, starter: true },
        { id: 9, positionId: 11, positionIndex: 1, number: 11, name: "Player 11", position: "LW", x: 30, y: 30, starter: true },
        { id: 10, positionId: 9, positionIndex: 1, number: 9, name: "Player 9", position: "ST", x: 50, y: 30, starter: true },
        { id: 11, positionId: 7, positionIndex: 1, number: 7, name: "Player 7", position: "RW", x: 70, y: 30, starter: true }
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

    const removePlayer = (playerId) => {
        setTeam(currentTeam => currentTeam.filter(player => player.id !== playerId));
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
            y: positionPlayers[0].y + 2.5 * (newPositionIndex - 1), // Correctly adjust Y to space out backup
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
            removePlayer,
            applyFormation, 
            currentFormation 
        }}>
            {children}
        </TeamContext.Provider>
    );    
};