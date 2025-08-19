import React from 'react';
import LayoutRenderer from './LayoutRenderer';
import useTreeStore from './stores/Treestore';
import useComponentStore from './stores/ComponentStore';
import SideBar from './Sidebar/SideBar.jsx';
import {enableMapSet ,produce} from 'immer';

enableMapSet();
// Example usage with the provided tree structure
const App = () => {
  const treeData = {
    all_leaves: ["0"],
    root: {
      id: "0",
      height: 100,
      width: 100,
      type: "leaf",
      component_connected: "01"
    }
  };

  useTreeStore.setState({ tree: treeData });
  useComponentStore.setState(produce((state) => {state.map.set("0", "01")}))

  console.log(useComponentStore.getState().map); // Debugging log

  return (
  <>
  <SideBar/>
  <LayoutRenderer />
  </>
)
};

export default App;