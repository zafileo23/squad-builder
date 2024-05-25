import React from 'react';

const MenuBar = () => {
  return (
    <div className="bg-emerald-700">
      {/* Utilize the container class to align and center the content like in GridLayout and Footer */}
      <div className="container mx-auto px-8 h-16 flex justify-between items-center"> {/* px-4 to match padding used in GridLayout and Footer */}
        {/* Logo or title section */}
        <div className="flex-shrink-0 flex items-center">
          <h1 className="font-bold text-xl text-white">Squad Builder</h1>
        </div>
        {/* Right section for settings etc, aligned to the right */}
        <div className="flex items-center">
          {/* Hidden on small screens, visible on medium and up with space-x-8 */}
          <div className="hidden sm:flex sm:space-x-8">
            {/* Navigation links here */}
            <a href="#" className="text-white px-3 py-2 rounded-md text-sm font-medium">Link 1</a>
            <a href="#" className="text-white px-3 py-2 rounded-md text-sm font-medium">Link 2</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuBar;

