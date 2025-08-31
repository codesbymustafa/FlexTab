import React from 'react';
import LayoutRenderer from './LayoutRenderer';
import SideBar from './Sidebar/SideBar.jsx';
import {enableMapSet } from 'immer';
import useTreeStore from './stores/Treestore.jsx';

enableMapSet();
// Example usage with the provided tree structure
const App = () => {

  const initialtree = {
  "all_leaves": [
    {
      "id": "0.1.1.2.1",
      "component": "Editor"
    },
    {
      "id": "0.1.1.2.2",
      "component": "Preview"
    },
    {
      "id": "0.1.2.1",
      "component": "Console"
    },
    {
      "id": "0.1.2.2.1",
      "component": "Tests"
    },
    {
      "id": "0.1.2.2.2",
      "component": "Debug"
    },
    {
      "id": "0.2.1.1",
      "component": "Problem"
    },
    {
      "id": "0.2.1.2",
      "component": "Notes"
    }
  ],
  "root": {
    "id": "0",
    "ratio": 100,
    "type": "container",
    "split": "vertical",
    "children": [
      {
        "id": "0.1",
        "ratio": 44.47090380161202,
        "type": "container",
        "split": "horizontal",
        "children": [
          {
            "id": "0.1.1.2",
            "ratio": 45.27924106096658,
            "type": "container",
            "split": "vertical",
            "children": [
              {
                "id": "0.1.1.2.1",
                "type": "leaf",
                "ratio": 43.667239520279566,
                "component_connected": "Editor"
              },
              {
                "id": "0.1.1.2.2",
                "type": "leaf",
                "ratio": 56.332760479720434,
                "component_connected": "Preview"
              }
            ]
          },
          {
            "id": "0.1.2",
            "ratio": 54.72075893903342,
            "type": "container",
            "split": "vertical",
            "children": [
              {
                "id": "0.1.2.1",
                "ratio": 50.916458942207335,
                "type": "leaf",
                "component_connected": "Console"
              },
              {
                "id": "0.1.2.2",
                "ratio": 49.083541057792665,
                "type": "container",
                "split": "horizontal",
                "children": [
                  {
                    "id": "0.1.2.2.1",
                    "ratio": 45.12472601512632,
                    "type": "leaf",
                    "component_connected": "Tests"
                  },
                  {
                    "id": "0.1.2.2.2",
                    "ratio": 54.87527398487368,
                    "type": "leaf",
                    "component_connected": "Debug"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "0.2.1",
        "ratio": 55.52909619838798,
        "type": "container",
        "split": "vertical",
        "children": [
          {
            "id": "0.2.1.1",
            "ratio": 57.62501716936429,
            "type": "leaf",
            "component_connected": "Problem"
          },
          {
            "id": "0.2.1.2",
            "ratio": 42.37498283063571,
            "type": "leaf",
            "component_connected": "Notes"
          }
        ]
      }
    ]
  }
}

useTreeStore.setState({tree : initialtree})

  return (
  <>
  <SideBar/>
  <LayoutRenderer />
  </>
)
};

export default App;