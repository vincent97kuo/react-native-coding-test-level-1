import { Dimensions, Platform } from 'react-native';
import Colors from './Colors';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const textInput = Platform.OS === 'ios' ? 50 : 40;

export default {
  window: {
    width,
    height,
  },
  platform: Platform.OS,
  headerHeight: Platform.OS === 'ios' ? 60 : 55,
  screenPadding: 20,
  innerPadding: 16,
  tabbarHeight: Platform.OS === 'ios' ? 90 : 50,
  textInput: textInput,
  boxMarginBottom: 10,
  isSmallDevice: width < 375,
  defaultBtnHeight: 45,
  defaultInputHeight: 50,
  screenMarginDefault: 40,
  screenMarginSmall: 20,
  defaultFontSizeSmall: 12,
  defaultFontSize: 14,
  defaultFontSizeLarge: 16,
  defaultBtnFontSize: Platform.OS === 'ios' ? 16 : 14,
  defaultTitleSize: 18,
  defaultIconSize: Platform.OS === 'ios' ? 18 : 14,
  defaultVectorIconSize: Platform.OS === 'ios' ? 30 : 25,
  androidSafeArea: Platform.OS === 'android' ? 10 : 0,
  pickerStyle: {
    color: Colors.primaryText,
    placeholder: {
      fontSize: 18,
      // marginBottom: 5,
      color: Colors.placeholderColor,
    },
    inputIOS: {
      fontSize: 18,
      color: '#333',
      backgroundColor: Colors.bgTextInput,
      padding: 10,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      // paddingVertical: 16,
      borderBottomColor: Colors.borderTextInput,
      borderBottomWidth: 1,
      paddingTop: 8,
    },
    inputAndroid: {
      fontSize: 18,
      color: '#333',
      backgroundColor: Colors.bgTextInput,
      // padding: 0,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      // paddingVertical: 16,
      borderBottomColor: Colors.borderTextInput,
      borderBottomWidth: 1,
      // paddingTop: 30.5,
    },
    // paddingTop: 30.5,
  },
  pickerIconStyle: {
    paddingVertical: 16,
    paddingRight: 10,
    paddingTop: Platform.OS === 'ios' ? 0 : 13
  },
  pickerBgStyle: {
    backgroundColor: Colors.bgTextInput,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomColor: Colors.borderTextInput,
    borderBottomWidth: .5,
  },
  buttonEndIconSize: 45,
  shadowBox: {
    shadowColor: 'grey',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 1,
  },
  borderRadius: 10,
  textInputContainer: {
    marginVertical: 8,
    padding: 3,
    marginBottom: 10,
  },
  textInputStyle: {
    backgroundColor: Colors.lightGrey,
    borderRadius: 5,
    paddingHorizontal: 20,
    // paddingVertical: 15,
    borderWidth: 1,
    height: textInput,
    fontSize: Platform.OS === 'ios' ? 17 : 15,
  },
  textFieldStyle: {
    fontSize: 17,
    fontWeight: '500',
    color: Colors.primaryText,
    opacity: 0.9,
    height: textInput,
    // paddingVertical: 15,
  }
};
