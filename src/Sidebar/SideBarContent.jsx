import React, { memo } from 'react';
import SplitControls from '../Controls/SplitControls';
import DeleteControls from '../Controls/DeleteControls';
import useTreeStore from '../stores/Treestore';
import useComponentStore from '../stores/ComponentStore';

const SideBarContent = memo(() => {
  const components = useTreeStore((state) => state.tree.all_leaves);
  const componentMap = useComponentStore((state) => state.map);
  
  return (
    <div className="flex-1 p-4 overflow-y-auto scrollbar-thin scrollbar-track-gray-800 scrollbar-thumb-gray-600 hover:scrollbar-thumb-gray-500">
      <p className="mt-0 text-gray-300">Your sidebar content goes here...</p>
      <ul className="list-none p-0 my-4">
        {components.map((component, index) => (
          <li className="py-2 border-b border-gray-700 text-gray-300 cursor-pointer hover:text-white transition-colors duration-200 last:border-b-0" key={index}>
            {componentMap.get(component)}
          </li>
        ))}
      </ul>
      
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