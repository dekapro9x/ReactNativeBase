import { ContextContainer } from '@context/AppContext';
import { black, white } from '@css/Color';
import { AppIcon } from '@element/AppIcon';
import { DebounceButton } from '@element/DebounceButton';
import { SizeRpScreen } from '@resources/ResponsiveScreen';
import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function DateAndWeather({ navigation }) {
  const { colorApp } = useContext(ContextContainer)

  const showDrawer = () => {
    navigation.openDrawer()
  }

  const renderTouchShowDrawer = () => {
    return (
      <DebounceButton
        title=""
        useLoading={false}
        useDelay={false}
        onPress={showDrawer}
        style={{ height: 45, width: 65, backgroundColor: colorApp.backgroundColor, borderRadius: 0, marginLeft: 6 }}>
        <AppIcon type={"Ionicons"} name={"menu"} iconSize={26} color={black} ></AppIcon>
      </DebounceButton>
    )
  }

  return (
    <View style={[styles.container, { flexDirection: "row", justifyContent: "space-between" }]}>
      {renderTouchShowDrawer()}
      <Text> DateAndWeather </Text>
      <Text> DateAndWeather </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 50, width: SizeRpScreen.width(100),
    backgroundColor: white,
    alignItems: 'center',
    justifyContent: 'center',
  }
})
