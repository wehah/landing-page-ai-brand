import { useEffect } from "react";
import { create } from "zustand";

export const useDrawerStore = create((set) => ({
  open: false,
  toggleDrawer: () => set((state) => ({ open: !state.open })),
  drawerOpen: () => set((state) => ({ open: true })),
  drawerClose: () => set({ open: false }),
}));

export const useModalStore = create((set) => ({
  open: false,
  toggleModal: () => set((state) => ({ open: !state.open })),
  openModal: () => set({ open: true }),
  closeModal: () => set({ open: false }),
}));

export const searchStore = create((set) => ({
  open: false,
  toggleSearch: () => set((state) => ({ open: !state.open })),
  openSearch: () => set((state) => ({ open: true })),
  closeSearch: () => set((state) => ({ open: false })),
}));

export const navTrayStore = create((set) => ({
  open: false,
  toggleTray: () => set((state) => ({ open: !state.open })),
  openTray: () => set((state) => ({ open: true })),
  closeTray: () => set((state) => ({ open: false })),
}));

