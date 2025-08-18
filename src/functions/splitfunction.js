export default function splitLeaf (tree, leafId, splitType, position, newComponent) {
  // Deep clone the tree to avoid mutations
  const newTree = JSON.parse(JSON.stringify(tree));
  
  // Recursive function to find and split the target leaf
  const findAndSplit = (node) => {
    if (!node) return false;
    
    // Found the target leaf
    if (node.id === leafId && node.type === 'leaf') {
      // Store the original component
      const originalComponent = node.component_connected;
      
      // Convert leaf to container
      node.type = 'container';
      node.split = splitType;
      delete node.component_connected;
      
      // Create two new leaf nodes
      const child1 = {
        id: `${node.id}.1`,
        type: 'leaf',
        height: splitType === 'horizontal' ? 50 : 100,
        width: splitType === 'vertical' ? 50 : 100,
        component_connected: null
      };
      
      const child2 = {
        id: `${node.id}.2`,
        type: 'leaf',
        height: splitType === 'horizontal' ? 50 : 100,
        width: splitType === 'vertical' ? 50 : 100,
        component_connected: null
      };
      
      // Assign components based on position
      if (splitType === 'horizontal') {
        if (position === 'top') {
          child1.component_connected = newComponent;
          child2.component_connected = originalComponent;
        } else { // bottom
          child1.component_connected = originalComponent;
          child2.component_connected = newComponent;
        }
      } else { // vertical
        if (position === 'left') {
          child1.component_connected = newComponent;
          child2.component_connected = originalComponent;
        } else { // right
          child1.component_connected = originalComponent;
          child2.component_connected = newComponent;
        }
      }
      
      // Add children to the new container
      node.children = [child1, child2];
      
      // Update all_leaves array - remove old leaf, add new leaves
      const leafIndex = newTree.all_leaves.indexOf(leafId);
      if (leafIndex !== -1) {
        // Remove the old leaf ID and insert the two new leaf IDs at the same position
        newTree.all_leaves.splice(leafIndex, 1, child1.id, child2.id);
      } else {
        // If for some reason the leaf wasn't in the array, add the new leaves at the end
        console.warn(`Leaf ${leafId} not found in all_leaves array`);
        newTree.all_leaves.push(child1.id, child2.id);
      }
      
      return true;
    }
    
    // If it's a container, recurse through children
    if (node.type === 'container' && node.children) {
      for (let i = 0; i < node.children.length; i++) {
        if (findAndSplit(node.children[i], node, i)) {
          return true;
        }
      }
    }
    
    return false;
  };
  
  const success = findAndSplit(newTree.root);
  
  if (!success) {
    console.error(`Failed to split leaf with ID: ${leafId}. Make sure it exists and is a leaf node.`);
    return tree; // Return original tree if split failed
  }
  
  console.log('Updated all_leaves:', newTree.all_leaves);
  return newTree;
};