import { createContext, useContext, useState } from 'react';

const TeamContext = createContext();

export const useTeam = () => useContext(TeamContext);

export const TeamProvider = ({ children }) => {
    const [team, setTeam] = useState([
        { id: 1, number: 1, name: "Player 1", position: "Goalkeeper", x: 50, y: 90 },
        { id: 2, number: 3, name: "Player 3", position: "Left Back", x: 20, y: 70 },
        { id: 3, number: 5, name: "Player 5", position: "LCB", x: 40, y: 70 },
        { id: 4, number: 4, name: "Player 4", position: "RCB", x: 60, y: 70 },
        { id: 5, number: 2, name: "Player 2", position: "Right back", x: 80, y: 70 },
        { id: 6, number: 10, name: "Player 10", position: "Center Midfielder", x: 30, y: 50 },
        { id: 7, number: 6, name: "Player 6", position: "Center Midfielder", x: 50, y: 50 },
        { id: 8, number: 8, name: "Player 8", position: "Center Midfielder", x: 70, y: 50 },
        { id: 9, number: 11, name: "Player 11", position: "Left Wing", x: 30, y: 30 },
        { id: 10, number: 9, name: "Player 9", position: "Striker", x: 50, y: 30 },
        { id: 11, number: 7, name: "Player 7", position: "Right Wing", x: 70, y: 30 }
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

    return (
        <TeamContext.Provider value={{ team, updatePlayerName, updatePlayerNumber }}>
            {children}
        </TeamContext.Provider>
    );
};