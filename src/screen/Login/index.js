import { blue500, green400, grey900, red400, white } from "../../const/Color";
import { AppImage } from "@element/AppImage";
import { AppTextInput } from "@element/AppTextInput";
import { DebounceButton } from "@element/DebounceButton";
import { SizeRpScreen } from "../../resources/ResponsiveScreen";
import { BEOTRAN_LOGGER } from "@util/Loger";
import React, { useRef, useContext } from "react";
import { Alert, StyleSheet, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { AppContainer } from "../../element/AppContainer";
import { keyNavigation } from "../../navigation/KeyNavigations";
import { ContextContainer } from "@context/AppContext";
import { AppText } from "@element/AppText";
import { FontAppType } from "../../const/TypeFontFamily";
import { PlatFormUsingConnect } from "../../const/Setting";
import { AppIcon } from "@element/AppIcon";
export default function Login({ navigation, router }) {
  const { logoApp } = useContext(ContextContainer);
  const useName = useRef("");
  const passWord = useRef("");

  const navigateHome = () => {
    navigation.replace(keyNavigation.HOME);
  };

  const onChangeText = (keyState, value) => {
    switch (keyState) {
      case "UserName":
        useName.current = value;
        break;
      case "Password":
        passWord.current = value;
        break;
    }
  };

  const pressLogin = () => {
    if (validateAccount()) {
      navigateHome();
    }
  };

  const validateAccount = () => {
    BEOTRAN_LOGGER(useName.current, passWord.current);
    if (!useName.current) {
      Alert.alert("Đăng nhập không chính xác", "Tài khoản là bắt buộc");
      return false;
    }
    if (!passWord.current) {
      Alert.alert("Đăng nhập không chính xác", "Mật khẩu là bắt buộc");
      return false;
    }
    if (useName.current && passWord.current) {
      return true;
    }
  };

  const renderListPlatformConnectUsing = () => {
    return (
      <View style={styles.containerOsConnectUsing}>
        {PlatFormUsingConnect.map((oSConnect => {
          return (
            <DebounceButton
              style={[
                styles.oSConnectItem,
                { backgroundColor: oSConnect.backgroundColor }]}>
              <AppIcon
                type={oSConnect.iconType}
                name={oSConnect.iconName}
                size={24}
                color={white}
              ></AppIcon>
            </DebounceButton>
          )
        }))}
      </View>
    )
  }

  const renderContent = () => {
    return (
      <LinearGradient
        colors={["#481E34", "#16192B"]}
        end={{ x: 1, y: 1 }}
        start={{ x: 0, y: 0 }}
        style={[styles.linearGradientContainer]}
      >
        <View style={[styles.containerContent]}>
          {/* IconApp */}
          <View style={styles.appIcon}>
            <AppImage
              source={{
                uri: logoApp
              }}
              resizeMode="stretch"
              style={{ height: SizeRpScreen.width(25), width: SizeRpScreen.width(25) }}>
            </AppImage>
          </View>
          {/* Form nhập tài khoản */}
          <View style={styles.containerFormInput}>
            <AppText style={styles.textTitle}>
              Well come to React Native Base
            </AppText>
            <AppText style={[styles.textTitle, { fontSize: 14 }]}>
              Discovery Every Thing Around You!
            </AppText>
            <AppTextInput
              useClean={true}
              keyState={"UserName"}
              titleTextInput={"UserName"}
              placeholder={"UserName"}
              styleContainer={styles.textInput}
              styleTitle={styles.textTitleInput}
              onChangeText={onChangeText}
            />
            <AppTextInput
              secureTextEntry={true}
              useClean={true}
              keyState={"Password"}
              titleTextInput={"Password"}
              placeholder={"Password"}
              styleContainer={styles.textInput}
              styleTitle={styles.textTitleInput}
              onChangeText={onChangeText}
            />
            <AppText
              onPress={() => {
                console.log("Đăng kí")
              }}
              style={[styles.textTitle, { fontSize: 14, marginTop: 12, color: red400 }]}>
              _______________Register_______________
            </AppText>
            <AppText style={[styles.textTitle, { fontSize: 14, marginTop: 12, color: red400, fontFamily: FontAppType.MotoyaLMaru, fontWeight: "bold" }]}>
              __________________Or Connect Using__________________
            </AppText>
            {/* Danh sách các nền tảng có thể kết nối ứng dụng */}
            {renderListPlatformConnectUsing()}
          </View>
          <DebounceButton
            useDelay={true}
            onPress={pressLogin}
            loadingColor="#FFFFFF"
            title={"Login"}
            textStyle={{
              color: "#FFFFFF",
              fontSize: SizeRpScreen.H5 * 1.2,
              fontWeight: "bold",
              textAlign: "center"
            }}
            style={{
              backgroundColor: "#06B050",
              justifyContent: "center",
              alignItems: "center",
              alignSelf: "center"
            }}
          />
        </View>
      </LinearGradient>
    );
  };

  return (
    <AppContainer
      nameScreen={""}
      goBackScreen={false}
      flexWrapHeader>
      {renderContent()}
    </AppContainer>
  );
}

const styles = StyleSheet.create({
  containerContent: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  linearGradientContainer: {
    flex: 1
  },
  containerFormInput: {
    flex: 1,
    minHeight: SizeRpScreen.width(65),
    backgroundColor: "#781E3A",
    marginTop: 12,
    borderRadius: 12
  },
  appIcon: {
    height: SizeRpScreen.width(25),
    width: SizeRpScreen.width(25),
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 12,
    backgroundColor: "#D64BFE"
  },
  textTitle: {
    fontSize: SizeRpScreen.H4,
    color: white,
    fontFamily: FontAppType.LetterMagic,
    alignSelf: "center"
  },
  textTitleInput: {
    fontFamily: FontAppType.LetterMagic,
    fontSize: 12
  },
  containerOsConnectUsing: {
    height: 60,
    flexDirection: "row",
    width: SizeRpScreen.width(80),
    alignSelf: "center",
    marginTop: 30,
    justifyContent: "space-between",
    alignItems: "center"
  },
  oSConnectItem: {
    height: 50,
    width: 50,
    backgroundColor: white,
    borderRadius: 12
  },
  textInput: {
    width: SizeRpScreen.width(90),
    marginTop: 12,
    alignSelf: "center",
    marginHorizontal: 8
  }
});
