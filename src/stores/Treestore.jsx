import { create } from "zustand";
import deleteLeaf from "../functions/deletefunction";
import splitLeaf from "../functions/splitfunction";


const useTreeStore = create((set) => ({
  tree: {},

  splitNode: (leafId, splitType, position, newComponent) => set((state) => ({ tree: splitLeaf(state.tree, leafId, splitType, position, newComponent) })),

  deleteNode : (leafId) => set((state) => ({tree : deleteLeaf(state.tree, leafId)}))
  
}))


export default useTreeStore;