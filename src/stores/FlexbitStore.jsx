import { create } from "zustand";
import data from "../Database/Flexbits";

const componentMap = data.flexbitlist;

const useFlexbitStore = create(() => ({
  map: componentMap
}))


export default useFlexbitStore;