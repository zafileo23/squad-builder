import React from 'react';
import TopBar from './top-bar';
import SideTabs from './side-tabs';
import TeamFormation from '@/components/production/formation'

const GridLayout = () => {
  return (
    <div className="flex flex-col h-full container mx-16 my-4">
      <div className="border rounded-md flex flex-col h-full">
        <TopBar />
        {/* Change flex direction based on screen size */}
        <div className="flex flex-col lg:flex-row flex-grow h-5/6">
          <div className="w-full lg:w-1/2 bg-zinc-50/80 p-4 flex flex-col h-full">
            <TeamFormation />
          </div>
          <div className="w-full lg:w-1/2 bg-zinc-50/80 p-4 flex flex-col h-full">
            <SideTabs />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridLayout;
