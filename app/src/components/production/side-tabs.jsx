import React from "react"
import { useTeam } from '@/contexts/team-context';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const SideTabs = () => {
  const { team, updatePlayerName } = useTeam();

  return (
    <Tabs defaultValue="account" className="flex flex-col h-full">
      <TabsList className="flex-shrink-0"> {/* Prevents the tabs list from growing */}
        <TabsTrigger value="account">Style</TabsTrigger>
        <TabsTrigger value="players">Players</TabsTrigger>
        <TabsTrigger value="lineups">My Lineups</TabsTrigger>
      </TabsList>
      <TabsContent value="account" className="flex-grow">
        <div className="h-full"> {/* Ensures the card container fills the height */}
          <Card className="flex flex-col h-full"> {/* Flex layout to allow internal items to expand */}
            <CardContent className="flex-grow py-4"> {/* Allows content to expand */}
              <h3 className="text-lg font-semibold">Field</h3>
              <h3 className="text-lg font-semibold">Formation</h3>
              <h3 className="text-lg font-semibold">Icon Style</h3>
              <h3 className="text-lg font-semibold">Icon Color</h3>
              <h3 className="text-lg font-semibold">Optional Title</h3>
            </CardContent>
            <CardFooter className="flex-shrink-0">
              <a href="#" className="text-blue-500">Read More</a>
            </CardFooter>
          </Card>
        </div>
      </TabsContent>
      {/* Ensure each TabsContent fills the height similarly */}
      <TabsContent value="players" className="flex-grow">
      <div className="h-full"> {/* Ensures the card container fills the height */}
          <Card className="flex flex-col h-full"> {/* Flex layout to allow internal items to expand */}
            <CardHeader className="flex-shrink-0">
              <CardTitle>Card Title</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow"> {/* Allows content to expand */}
            <div className="flex flex-wrap">
                {team.map(player => (
                    <div key={player.id} className="player-input mb-4 w-full md:w-1/2">
                        <label htmlFor={`player-${player.id}`} className="block text-sm font-medium text-gray-700">
                            {player.position}:
                        </label>
                        <input
                            id={`player-${player.id}`}
                            type="text"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            value={player.name}
                            onChange={(e) => updatePlayerName(player.id, e.target.value)}
                            placeholder="Enter player name"
                        />
                    </div>
                ))}
            </div>
            </CardContent>
          </Card>
        </div>
      </TabsContent>
      <TabsContent value="lineups" className="flex-grow">
      <div className="h-full"> {/* Ensures the card container fills the height */}
          <Card className="flex flex-col h-full"> {/* Flex layout to allow internal items to expand */}
            <CardHeader className="flex-shrink-0">
              <CardTitle>Card Title</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow"> {/* Allows content to expand */}
              <CardDescription>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
              </CardDescription>
            </CardContent>
            <CardFooter className="flex-shrink-0">
              <a href="#" className="text-blue-500">Read More</a>
            </CardFooter>
          </Card>
        </div>
      </TabsContent>
    </Tabs>
  );
};

export default SideTabs;
