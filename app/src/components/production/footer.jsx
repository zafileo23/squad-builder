import React from 'react';

const Footer = () => {
  return (
      // Use the container class to align with GridLayout
      <div className="hidden lg:flex container mx-auto px-8">
        <div className="flex justify-between h-16 items-center"> {/* Ensure vertical centering and consistent height */}
          {/* Logo or title section */}
          <div className="flex-shrink-0 flex items-center">
            <h1 className="font-normal text-xs text-zinc-500">Built by Zach Fickenworth.</h1>
          </div>
        </div>
      </div>
  );
};

export default Footer;

