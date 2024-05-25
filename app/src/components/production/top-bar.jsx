import React from 'react';
import { Button } from '../ui/button';


const TopBar = () => {
  return (
    <div className="border-b">
      <div className="px-4">
        <div className="flex justify-between h-16">
          <div className="flex">
            {/* Logo or title section */}
            <div className="flex-shrink-0 flex items-center">
              <h1 className="font-bold text-xl text-gray-900">My Lineup</h1>
            </div>
          </div>
          {/* Right section for settings etc */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
                <Button>Share</Button>  
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
