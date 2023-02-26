import { create } from "zustand";

type Store = {
  isLoading: boolean;
  data: User;
  setUser: (urlRes?: User) => void;
  getUser: () => void;
  error: any;
};

interface User {
  name: string;
  role: string;
  email: string;
  profile_image?: string;
}

const dummyUser = {
  name: "Naruto Uzumaki",
  role: "client",
  email: "client@mail.com",
  profile_image: "",
};

const delay = (delayMs: number) => {
  return new Promise((res) => setTimeout(res, delayMs));
};

export const useUsersStore = create<Store>((set) => ({
  isLoading: false,
  data: {
    name: "",
    role: "",
    email: "",
  },
  error: null,
  setUser(urlRes?: User) {
    set((state: any) => ({
      ...state,
      data: dummyUser,
    }));
  },
  // * recursive function
  getUser: async () => {
    try {
      set({ isLoading: true });
      // const data = await getUserApi()
      // await delay(5000);
      set({ isLoading: false, data: dummyUser });
    } catch (err: any) {
      set({ error: err.message, isLoading: false });
    }
  },
}));
