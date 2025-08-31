import { create } from "zustand";
import { persist } from "zustand/middleware";
import deleteLeaf from "../functions/deletefunction";
import splitLeaf from "../functions/splitfunction";
import resize from "../functions/resizefunction";

const useTreeStore = create(
  persist(
    (set) => ({
      tree: {},

      splitNode: (leafId, splitType, position, newComponent) =>
        set((state) => ({
          tree: splitLeaf(
            state.tree,
            leafId,
            splitType,
            position,
            newComponent
          )
        })
      ),

      deleteNode: (leafId) =>
        set((state) => ({
          tree: deleteLeaf(state.tree, leafId)
        })
      ),

      resizeNode:(containerId , ratio1, ratio2) => 
        set((state) => ({
          tree : resize(state.tree , containerId , ratio1, ratio2)
        })
      )
    }),
    {
      name: "tree-storage"
    }
  )
);

export default useTreeStore;
