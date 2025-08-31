import React from 'react';
import LayoutRenderer from './Layout/LayoutRenderer.jsx';
import SideBar from './Sidebar/SideBar.jsx';
import {enableMapSet } from 'immer';

enableMapSet();
const App = () => {

  return (
  <>
  <SideBar/>
  <LayoutRenderer />
  </>
)
};

export default App;