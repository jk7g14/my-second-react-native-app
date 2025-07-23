import { Image, useWindowDimensions } from "react-native";

export function PlantlyImage() {
  const { width } = useWindowDimensions();

  const imageSize = Math.min(width / 1.5, 400);
  return (
    <Image
      style={{ width: imageSize, height: imageSize }}
      source={require("@/assets/plantly.png")}
    />
  );
}
