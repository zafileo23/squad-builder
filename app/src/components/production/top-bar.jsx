import React from 'react';
import { Button } from '../ui/button';
import { useTheme } from '@/contexts/tab-context';
import { DownloadIcon } from '@radix-ui/react-icons'


export const TopBar = () => {
  const { downloadSvgAsPng } = useTheme();

  return (
    <div className="border-b">
      <div className="px-4">
        <div className="flex justify-between h-16">
          <div className="flex">
            {/* Logo or title section */}
            <div className="flex-shrink-0 flex items-center">
              <h1 className="font-bold text-xl text-gray-900">My Squad</h1>
            </div>
          </div>
          {/* Right section for settings etc */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
                <Button onClick={downloadSvgAsPng}>
                  Download as PNG
                  <DownloadIcon 
                    className="w-5 h-5 ml-1"
                  />
                </Button>  
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
