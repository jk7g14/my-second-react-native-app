import { Redirect, Tabs, Link } from "expo-router";
import Entypo from "@expo/vector-icons/Entypo";
import Feather from "@expo/vector-icons/Feather";
import { theme } from "@/theme";
import { useUserStore } from "@/store/userStore";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Pressable } from "react-native";

export default function Layout() {
  const hasFinishedOnboarding = useUserStore(
    (state) => state.hasFinishedOnBoarding
  );
  if (!hasFinishedOnboarding) {
    return <Redirect href="/onboarding" />;
  }

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: theme.colorGreen,
      }}
    >
      <Tabs.Screen
        name="(home)"
        options={{
          title: "Home",
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ size, color }) => (
            <Entypo name="leaf" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarShowLabel: false,
          tabBarIcon: ({ size, color }) => (
            <Feather name="user" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
