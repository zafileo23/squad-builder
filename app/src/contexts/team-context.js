import { createContext, useContext, useState } from 'react';

const TeamContext = createContext();

export const useTeam = () => useContext(TeamContext);

export const TeamProvider = ({ children }) => {
    const [team, setTeam] = useState([
        { id: 1, name: "Player 1", position: "Goalkeeper", x: 50, y: 90 },
        { id: 2, name: "Player 2", position: "Defender", x: 20, y: 70 },
        { id: 3, name: "Player 3", position: "Defender", x: 40, y: 70 },
        { id: 4, name: "Player 4", position: "Defender", x: 60, y: 70 },
        { id: 5, name: "Player 5", position: "Defender", x: 80, y: 70 },
        { id: 6, name: "Player 6", position: "Midfielder", x: 30, y: 50 },
        { id: 7, name: "Player 7", position: "Midfielder", x: 50, y: 50 },
        { id: 8, name: "Player 8", position: "Midfielder", x: 70, y: 50 },
        { id: 9, name: "Player 9", position: "Forward", x: 30, y: 30 },
        { id: 10, name: "Player 10", position: "Forward", x: 50, y: 30 },
        { id: 11, name: "Player 11", position: "Forward", x: 70, y: 30 }
    ]);

    const updatePlayerName = (id, name) => {
        setTeam(currentTeam =>
            currentTeam.map(player =>
                player.id === id ? { ...player, name } : player
            )
        );
    };

    return (
        <TeamContext.Provider value={{ team, updatePlayerName }}>
            {children}
        </TeamContext.Provider>
    );
};