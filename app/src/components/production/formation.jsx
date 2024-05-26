import { useTeam } from '@/contexts/team-context';

export const TeamFormation = () => {
    const { team, updatePlayerName } = useTeam();

    return (
        <div className="formation">
            {team.map(player => (
                <div key={player.id} className="player-input">
                    <label htmlFor={`player-${player.id}`}>Player {player.id}:</label>
                    <input
                        id={`player-${player.id}`}
                        type="text"
                        value={player.name}
                        onChange={(e) => updatePlayerName(player.id, e.target.value)}
                        placeholder="Enter player name"
                    />
                </div>
            ))}
        </div>
    );
};

export default TeamFormation;