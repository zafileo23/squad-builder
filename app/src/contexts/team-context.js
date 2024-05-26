import { createContext, useContext, useState } from 'react';

const TeamContext = createContext();

export const useTeam = () => useContext(TeamContext);

export const TeamProvider = ({ children }) => {
    const [team, setTeam] = useState([
        { id: 1, name: "Player 1", position: "Goalkeeper" },
        { id: 2, name: "Player 2", position: "Right Back" },
        { id: 3, name: "Player 3", position: "Left Back" },
        { id: 4, name: "Player 4", position: "RCB" },
        { id: 5, name: "Player 5", position: "LCB" },
        { id: 6, name: "Player 6", position: "Center Midfield" },
        { id: 7, name: "Player 7", position: "Right Wing" },
        { id: 8, name: "Player 8", position: "Center Midfield" },
        { id: 9, name: "Player 9", position: "Striker" },
        { id: 10, name: "Player 10", position: "Attacking Midfield" },
        { id: 11, name: "Player 11", position: "Left Wing" },
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