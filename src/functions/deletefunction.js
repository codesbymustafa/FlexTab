export default function deleteLeaf (tree, leafId) {
  // Don't allow deleting the root if it's the only node
  if (leafId === "0" && tree.root.type === 'leaf') {
    console.error("Cannot delete the root leaf when it's the only node");
    return tree;
  }
  
  // Deep clone the tree to avoid mutations
  const newTree = JSON.parse(JSON.stringify(tree));
  
  // Recursive function to find and delete the target leaf
  const findAndDelete = (node, parentNode = null, childIndex = -1, grandparentNode = null, parentIndex = -1) => {
    if (!node) return false;
    
    // Found the target leaf
    if (node.id === leafId && node.type === 'leaf') {
      // Can't delete if there's no parent (shouldn't happen except for root)
      if (!parentNode) {
        console.error("Cannot delete a node without a parent");
        return false;
      }
      
      // Find the sibling
      const siblingIndex = childIndex === 0 ? 1 : 0;
      const sibling = parentNode.children[siblingIndex];
      
      if (!sibling) {
        console.error("No sibling found - this shouldn't happen in a binary tree");
        return false;
      }
      
      // If there's no grandparent, the parent is the root
      if (!grandparentNode) {
        // Replace root with the sibling
        Object.assign(newTree.root, sibling);
      } else {
        // Replace parent node with sibling in grandparent's children
        grandparentNode.children[parentIndex] = sibling;
      }
      
      // Update all_leaves array
      const leafIndex = newTree.all_leaves.indexOf(leafId);
      if (leafIndex !== -1) {
        newTree.all_leaves.splice(leafIndex, 1);
      }
      
      // If the sibling was a container, we need to update all its descendant IDs
      // to reflect the new position in the tree
      // This is optional but keeps IDs consistent
      
      console.log(`Deleted leaf ${leafId}, promoted sibling ${sibling.id}`);
      return true;
    }
    
    // If it's a container, recurse through children
    if (node.type === 'container' && node.children) {
      for (let i = 0; i < node.children.length; i++) {
        if (findAndDelete(node.children[i], node, i, parentNode, childIndex)) {
          return true;
        }
      }
    }
    
    return false;
  };
  
  const success = findAndDelete(newTree.root, null, -1, null, -1);
  
  if (!success) {
    console.error(`Failed to delete leaf with ID: ${leafId}`);
    return tree;
  }
  
  console.log('Updated all_leaves after deletion:', newTree.all_leaves);
  return newTree;
};