import { Text, View, StyleSheet, Button } from "react-native";
import { theme } from "@/theme";
import { useRouter } from "expo-router";
import { useUserStore } from "@/store/userStore";

export default function ProfileScreen() {
  const toggleHadOnboarded = useUserStore((state) => state.toggleHadOnboarded);
  const router = useRouter();
  const handlePress = () => {
    toggleHadOnboarded();
    router.replace("/onboarding");
  };
  return (
    <View style={styles.container}>
      <Button title="Back to onboarding" onPress={handlePress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colorWhite,
  },
});
