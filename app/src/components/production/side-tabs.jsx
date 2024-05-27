import React, { useMemo, useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { CirclePicker } from 'react-color';
import { useTheme } from '@/contexts/tab-context';
import { useTeam } from '@/contexts/team-context';

  const SideTabs = () => {
  const { changeTheme } = useTheme();
  const { team, updatePlayerName, updatePlayerNumber, addBackupPlayer } = useTeam();
  const [selectedTheme, setSelectedTheme] = useState('default');
  const { applyFormation } = useTeam();
  const [selectedFormation, setSelectedFormation] = React.useState("4-3-3");
  const { changeIconColor, iconColor } = useTheme();

  const handleColorChange = (color) => {
    changeIconColor(color.hex); // update the icon color in the context
  };

  const handleThemeChange = (value) => {
    setSelectedTheme(value); // Update the local state
    changeTheme(value); // Call the context method to apply the theme
  };

  const handleFormationChange = (value) => {
      setSelectedFormation(value);
      applyFormation(value);
  };

  const highestIndexes = useMemo(() => {
    const indexes = {};
    team.forEach(player => {
        if (!indexes[player.positionId] || player.positionIndex > indexes[player.positionId]) {
            indexes[player.positionId] = player.positionIndex;
        }
    });
    return indexes;
  }, [team]);

    // Sort the team by positionId and then by positionIndex
  const sortedTeam = useMemo(() => {
    return [...team].sort((a, b) => a.positionId - b.positionId || a.positionIndex - b.positionIndex);
  }, [team]);


  return (
    <Tabs defaultValue="style" className="flex flex-col h-full">
      <TabsList className="flex-shrink-0"> {/* Prevents the tabs list from growing */}
        <TabsTrigger value="style">Style</TabsTrigger>
        <TabsTrigger value="players">Players</TabsTrigger>
        <TabsTrigger value="lineups">My Lineups</TabsTrigger>
      </TabsList>
      <TabsContent value="style" className="flex-grow">
        <div className="h-full"> {/* Ensures the card container fills the height */}
          <Card className="flex flex-col h-full"> {/* Flex layout to allow internal items to expand */}
            <CardContent className="flex-grow py-4"> {/* Allows content to expand */}
              <h3 className="text-lg font-semibold">Field</h3>
              <Select value={selectedTheme} onValueChange={handleThemeChange} defaultValue="default">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select a theme" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                    <SelectLabel>Field Styles</SelectLabel>
                    <SelectItem value="default">Default</SelectItem>
                    <SelectItem value="lightGreen">Light Green</SelectItem>
                    <SelectItem value="darkGreen">Dark Green</SelectItem>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    </SelectGroup>
                </SelectContent>
              </Select>
              <h3 className="text-lg font-semibold pt-4">Formation</h3>
              <Select value={selectedFormation} onValueChange={handleFormationChange} defaultValue="4-3-3">
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select a formation" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>Formations</SelectLabel>
                        <SelectItem value="4-3-3">4-3-3</SelectItem>
                        <SelectItem value="4-4-2">4-4-2</SelectItem>
                        <SelectItem value="4-2-3-1">4-2-3-1</SelectItem>
                        <SelectItem value="4-2-2-2">4-2-2-2</SelectItem>
                        <SelectItem value="4-1-2-1-2">4-1-2-1-2</SelectItem>
                        <SelectItem value="4-5-1">4-5-1</SelectItem>
                        <SelectItem value="3-5-2">3-5-2</SelectItem>
                        <SelectItem value="3-4-3">3-4-3</SelectItem>
                        <SelectItem value="3-4-2-1">3-4-2-1</SelectItem>
                        <SelectItem value="3-4-1-2">3-4-1-2</SelectItem>
                    </SelectGroup>
                </SelectContent>
              </Select>
              <h3 className="text-lg font-semibold pt-4">Icon Color</h3>
              <CirclePicker 
                className='bg-zinc-100 rounded-lg pt-4 pl-6'
                color={iconColor}
                colors={['#034694', '#0693E3', '#6CABDD', '#A50044', '#EF0107', '#FF8E91', '#FF6900', '#FDE100', '#9C824A', '#018749', '#00D084', '#000000', '#ABB8C3', '#FFFFFF']}
                onChangeComplete={handleColorChange} 
              />
            </CardContent>
          </Card>
        </div>
      </TabsContent>
      <TabsContent value="players" className="flex-grow">
        <div className="h-full"> {/* Ensures the card container fills the height */}
            <Card className="flex flex-col h-full"> {/* Flex layout to allow internal items to expand */}
                <CardContent className="flex-grow overflow-auto py-4">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Position
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Number
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Name
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {sortedTeam.map((player, index, array) => (
                                <tr key={player.id}>
                                    <td className="px-6 py-1 whitespace-nowrap text-xs font-medium text-gray-900">
                                        {player.position}
                                    </td>
                                    <td className="px-6 py-1 whitespace-nowrap text-xs text-gray-500">
                                        <input
                                            id={`player-number-${player.id}`}
                                            type="number"
                                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-xs"
                                            value={player.number}
                                            onChange={(e) => updatePlayerNumber(player.id, e.target.value)}
                                            placeholder="Enter player number"
                                        />
                                    </td>
                                    <td className="px-6 py-1 whitespace-nowrap text-xs text-gray-500">
                                        <input
                                            id={`player-name-${player.id}`}
                                            type="text"
                                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-xs"
                                            value={player.name}
                                            onChange={(e) => updatePlayerName(player.id, e.target.value)}
                                            placeholder="Enter player name"
                                        />
                                    </td>
                                    <td className="text-right px-6 py-1">
                                        {player.positionIndex === highestIndexes[player.positionId] && (
                                            <button
                                                className="text-indigo-600 hover:text-indigo-900 text-sm font-medium"
                                                onClick={() => addBackupPlayer(player.positionId)}>
                                                + Add backup
                                            </button>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </CardContent>
            </Card>
        </div>
      </TabsContent>
      {/* Ensure each TabsContent fills the height similarly */}
      <TabsContent value="lineups" className="flex-grow">
      <div className="h-full"> {/* Ensures the card container fills the height */}
          <Card className="flex flex-col h-full"> {/* Flex layout to allow internal items to expand */}
            <CardHeader className="flex-shrink-0">
              <CardTitle>Coming soon!</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow"> {/* Allows content to expand */}
              <CardDescription>
                We're currently working on giving you the ability to save and load your favorite lineups here.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </TabsContent>
    </Tabs>
  );
};

export default SideTabs;
