import React from 'react';
import TopBar from './top-bar';
import Field from './field';
import SideTabs from './side-tabs';

const GridLayout = () => {
  return (
    <div className="flex flex-col h-full container mx-16 my-4">
      <div className="border rounded-md flex flex-col h-full">
        <TopBar />
        {/* Change flex direction based on screen size */}
        <div className="flex flex-col lg:flex-row flex-grow">
          <div className="w-full lg:w-1/2 bg-zinc-50/80 p-4 flex flex-col h-full">
            <Field />
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
