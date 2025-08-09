import React from 'react';
import LayoutRenderer from './LayoutRenderer';
// Example usage with the provided tree structure
const App = () => {
  const treeData = {
    all_leaves: ["0.1.1.1", "0.1.1.2.1","0.1.1.2.1", "0.1.1.3", "0.1.2", "0.2.1", "0.2.2"],
    root: {
      id: "0",
      height: 100,
      width: 100,
      type: "container",
      split: "verticaly",
      children: [
        {
          id: "0.1",
          height: 100,
          width: 50,
          type: "container",
          split: "horizontal",
          children: [
            {
              id: "0.1.1",
              height: 70,
              width: 100,
              type: "container",
              split: "vertical",
              children: [
                {
                  id: "0.1.1.1",
                  height: 100,
                  width: 50,
                  type: "leaf",
                  component_connected: "01"
                },
                {
                  id: "0.1.1.2",
                  height: 100,
                  width: 50,
                  type: "container",
                  split: "horizontal",
                  children: [
                    {
                      id: "0.1.1.2.1",
                      height: 30,
                      width: 100,
                      type: "leaf",
                      component_connected: "05"
                    },
                    {
                      id: "0.1.1.2.2",
                      height: 70,
                      width: 100,
                      type: "leaf",
                      component_connected: "06"
                    }
                  ]
                }
              ]
            },
            {
              id: "0.1.2",
              height: 30,
              width: 100,
              type: "leaf",
              component_connected: "02"
            }
          ]
        },
        {
          id: "0.2",
          height: 100,
          width: 50,
          type: "leaf",
          component_connected: "03"
        }
      ]
    }
  };

  return <LayoutRenderer tree={treeData} />;
};

export default App;