import React from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const SideTabs = () => {
  return (
    <Tabs defaultValue="account" className="flex flex-col h-full">
      <TabsList className="flex-shrink-0"> {/* Prevents the tabs list from growing */}
        <TabsTrigger value="account">Style</TabsTrigger>
        <TabsTrigger value="password">Players</TabsTrigger>
        <TabsTrigger value="lineups">My Lineups</TabsTrigger>
      </TabsList>
      <TabsContent value="account" className="flex-grow">
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
      {/* Ensure each TabsContent fills the height similarly */}
      <TabsContent value="password" className="flex-grow">
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
