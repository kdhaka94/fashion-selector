import create from "zustand";
import { GLOBAL_StATE } from "./types";

export const useStore = create<typeof GLOBAL_StATE>()((set, get) => ({
  ...GLOBAL_StATE,
  toggleSidebar: () => {
    set({ sidebarOpen: !get().sidebarOpen });
  },
}));


