import { ContextContainer } from "@context/AppContext";
import { black, white } from "@css/Color";
import { AppIcon } from "@element/AppIcon";
import { DebounceButton } from "@element/DebounceButton";
import { SizeRpScreen } from "@resources/ResponsiveScreen";
import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function DateAndWeather({ navigation }) {
  const { colorApp } = useContext(ContextContainer);

  return (
    <View
      style={[
        styles.container,
        {
          flexDirection: "row",
          justifyContent: "space-between",
          backgroundColor: colorApp.backgroundColor
        }
      ]}
    >
      <Text> DateAndWeather </Text>
      <Text> DateAndWeather </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: SizeRpScreen.width(100),
    backgroundColor: white,
    alignItems: "center",
    justifyContent: "center"
  }
});
