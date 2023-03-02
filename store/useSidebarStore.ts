import { create } from 'zustand';

type SideBar = {
  isExpand: boolean;
  miniSidebar: () => void;
  expandSidebar: () => void;
};

export const useSidebarStore = create<SideBar>((set) => ({
  isExpand: false,
  miniSidebar: () => set(() => ({ isExpand: false })),
  expandSidebar: () => set(() => ({ isExpand: true })),
}));
