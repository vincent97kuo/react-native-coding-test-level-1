import React, { Component } from "react";

import { View, TextInput, TouchableWithoutFeedback } from "react-native";
import Colors from "../../constants/Colors";
import Label from "./Label";
import H3 from "./H3";
import Layout from "../../constants/Layout";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default class TextField2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFocus: "",
    };

    this._renderLabel = this._renderLabel.bind(this);
  }

  _renderLabel(label, isFocus, value) {
    return (
      <View style={{ flexDirection: "row" }}>
        <Label
          fontSize={15}
          // color={'white'}
          style={{
            fontWeight: "500",
            marginBottom: 7,
          }}
        >
          {label}
        </Label>
        {this.props.mandatory && <Label color={Colors.red}>*</Label>}
      </View>
    );
    if ((label && isFocus) || value) {
      return <Label color={Colors.secondaryColor}>{label}</Label>;
    }

    return <Label> </Label>;
  }

  render() {
    const { rounded } = this.props;

    return (
      <View
        style={{
          marginVertical: this.props.disableMargin ? 0 : 8,
          backgroundColor: 'grey',
          borderTopColor: "#000000",
          borderLeftColor: "#000000",
          borderBottomColor: Colors.primaryColor,
          borderRightColor: Colors.primaryColor,
          borderTopWidth: 3,
          borderLeftWidth: 3,
          borderRightWidth: 2,
          borderBottomWidth: 2,
          elevation: 20,
          // paddingHorizontal: rounded ? 5 : Layout.screenPadding + 10,
          // borderRadius: rounded ? 100 : 5,
          // borderBottomColor: this.props.disableBottomLine
          //   ? null
          //   : Colors.lineColor,
          // borderBottomWidth: this.props.disableBottomLine ? 0 : 0.8,
          padding: this.props.disableBackgroundColor ? null : 3,
          marginBottom: this.props.disableMarginBottom
            ? 0
            : Layout.boxMarginBottom,
          // height: Layout.textInput,
          ...Layout.shadowBox,
          borderRadius: 15,
        }}
      >
        {!rounded &&
          this.props.label &&
          this._renderLabel(
            this.props.label,
            this.state.isFocus,
            this.props.value
          )}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            // backgroundColor: Colors.lightGrey,
            // borderRadius: 5,
            paddingHorizontal: 20,
            // borderWidth: 1,
            // borderColor: this.props.error ? Colors.red : Colors.lightGrey,
          }}
        >
          {this.props.leftText && (
            <H3
              style={{
                paddingVertical: 6,
              }}
            >
              {this.props.leftText}
            </H3>
          )}
          {this.props.leftIcon}
          <TextInput
            maxLength={50}
            ref={(input) => {
              if (this.props.setRef) this.props.setRef(input);
            }}
            onFocus={() => {
              this.setState({ isFocus: true });
            }}
            onBlur={() => {
              this.setState({ isFocus: false });
            }}
            style={{
              height: Layout.textInput,
              width: "100%",
              fontSize: Layout.platform === "ios" ? 17 : 15,
              fontWeight: "500",
              // paddingLeft: this.props.leftText ? 10 : 0,
              color: Colors.primaryColor,
              opacity: 0.9,
              // paddingVertical: rounded ? 10 : 15,
              paddingHorizontal: rounded ? 10 : 0,
              // borderBottomWidth: 1,
              // borderBottomColor: this.props.error ? Colors.red : Colors.lineColor,
              ...this.props.style,
            }}
            placeholder={this.props.placeholder || null}
            placeholderTextColor={Colors.placeholderColor}
            onChangeText={this.props.onChangeText}
            value={this.props.value}
            keyboardType={this.props.keyboardType || "default"}
            multiline={this.props.multiline || false}
            editable={this.props.readonly ? false : true}
            secureTextEntry={this.props.secureTextEntry || false}
            autoCapitalize="none"
            returnKeyType={this.props.returnKeyType || "none"}
          />
          {this.props.showArrow && (
            <MaterialCommunityIcons
              name="chevron-down"
              size={25}
              style={{
                zIndex: 10,
                position: "absolute",
                right: 0,
                color: Colors.primaryHint,
                opacity: 0.9,
              }}
            />
          )}
          {this.props.rightIcon}
        </View>
        {this.props.error && (
          <Label
            style={{
              marginTop: 7,
            }}
            fontSize={15}
            color={Colors.red}
          >
            * {this.props.error}
          </Label>
        )}
      </View>
    );
  }
}
