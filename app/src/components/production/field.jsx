import React from "react"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import TeamFormation from '@/components/production/formation'
  
  const Field = () => {
    return (
      <Card
      className="h-full"
      >
        <TeamFormation />
      </Card>
    );
  };
  
  export default Field;
  