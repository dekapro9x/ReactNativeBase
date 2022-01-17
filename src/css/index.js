import { FontAppType } from "../const/TypeFontFamily";
const { white } = require("@css/Color");
const { SizeRpScreen } = require("../resources/ResponsiveScreen");

const heightElementDefault = 50;

const AppLinearGradient = ["#481E34", "#16192B"]

const textAppDefault = SizeRpScreen.H5;

const titleAppTextInput = {
    fontSize: textAppDefault,
    color: white,
    marginLeft: 12
}
const appTextInputDefault = {
    flex: 1,
    height: heightElementDefault,
    marginLeft: 16,
    fontWeight: "bold",
    fontSize: SizeRpScreen.H5,
}

const titleDebounceButtonDefault = {
    fontSize: textAppDefault * 1.2,
    fontFamily: FontAppType.Happy,
    color: white
}

const debounceButtonDefault = {
    height: heightElementDefault,
    width: SizeRpScreen.width(96),
    backgroundColor: "#481E34",
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
}

export {
    heightElementDefault,
    textAppDefault,
    appTextInputDefault,
    titleAppTextInput,
    titleDebounceButtonDefault,
    debounceButtonDefault,
    AppLinearGradient
};

