import React, { memo } from 'react';
import SplitControls from '../Controls/SplitControls';
import DeleteControls from '../Controls/DeleteControls';
import FlexbitList from '../FlexbitList';

const SideBarContent = memo(() => {
  
  return (
    <div className="flex-1 p-4 overflow-y-auto scrollbar-thin scrollbar-track-gray-800 scrollbar-thumb-gray-600 hover:scrollbar-thumb-gray-500">
      <p className="mt-0 text-gray-300">Your sidebar content goes here...</p>
      
      <FlexbitList/>
      
      <div className="space-y-4">
        <div className="p-3 bg-gray-800 rounded border border-gray-700">
          <SplitControls />
          <DeleteControls />
        </div>
      </div>
    </div>
  );
});

export default SideBarContent;