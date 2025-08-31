import React from 'react';
import LayoutRenderer from './LayoutRenderer';
import SideBar from './Sidebar/SideBar.jsx';
import {enableMapSet } from 'immer';

enableMapSet();
// Example usage with the provided tree structure
const App = () => {

  return (
  <>
  <SideBar/>
  <LayoutRenderer />
  </>
)
};

export default App;