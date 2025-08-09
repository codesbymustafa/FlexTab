// import React from 'react';

export default function LayoutRenderer ({ tree }){
  // Recursive function to render nodes
  const renderNode = (node) => {
    if (!node) return null;

    // Determine the style based on parent's split direction
    const style = {
      height: `${node.height}%`,
      width: `${node.width}%`,
      position: 'relative',
      boxSizing: 'border-box'
    };

    if (node.type === 'leaf') {
      return (
        <div
          key={node.id}
          className="border border-gray-600 bg-gray-900 flex items-center justify-center text-white font-mono text-sm overflow-hidden"
          style={style}
        >
          <span className="text-blue-400 font-semibold">
            {node.component_connected || node.id}
          </span>
        </div>
      );
    }

    if (node.type === 'container') {
      const isVerticalSplit = node.split === 'vertical' || node.split === 'verticaly';
      
      return (
        <div
          key={node.id}
          className={`flex ${isVerticalSplit ? 'flex-row' : 'flex-col'}`}
          style={style}
        >
          {node.children && node.children.map(child => renderNode(child))}
        </div>
      );
    }

    return null;
  };

  return (
    <div className="w-full h-screen bg-gray-950 p-4">
      <div className="w-full h-full relative">
        {tree && tree.root && renderNode(tree.root)}
      </div>
    </div>
  );
};

// Example usage with the provided tree structure
