import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type UserStore = {
  hasFinishedOnBoarding: boolean;
  toggleHadOnboarded: () => void;
};

export const useUserStore = create(
  persist<UserStore>(
    (set) => ({
      hasFinishedOnBoarding: false,
      toggleHadOnboarded: () =>
        set((state) => {
          return {
            ...state,
            hasFinishedOnBoarding: !state.hasFinishedOnBoarding,
          };
        }),
    }),
    {
      name: "plantly-user-store",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
