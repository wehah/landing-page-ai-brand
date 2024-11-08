
import {create} from "zustand";

export const useDrawerStore = create((set) => ({
    open: false,
    delayedClose:false,   toggleDrawer: () => set((state) => ({ open: !state.open })),
    drawerOpen : () => set((state) => ({ open: true})),
    drawerClose : () => set({ open: false })  
}));
