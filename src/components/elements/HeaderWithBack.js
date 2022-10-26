import React, { Component } from "react";

import { View, TouchableOpacity } from "react-native";
import Colors from "../../constants/Colors";
import { MaterialIcons } from "@expo/vector-icons";
import H2 from "./H2";
import H3 from "./H3";

export default class HeaderWithBack extends Component {
  toggleDrawer = () => {
    //Props to open/close the drawer
    this.props.navigation.openDrawer();
  };

  render() {
    return (
      <View
        style={{
          flexDirection: "row",
          paddingVertical: 13,
          paddingHorizontal: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: this.props.backgroundColor || Colors.primaryColor,
        }}
      >
        {this.props.hideNotification === undefined && (
          <TouchableOpacity
            onPress={() => {
              this?.props?.navigation?.goBack();
            }}
          >
            <MaterialIcons
              name="chevron-left"
              color={this.props.iconColor || Colors.white}
              size={40}
              style={{ marginRight: 5 }}
            />
          </TouchableOpacity>
        )}
        <H2>{this.props.title}</H2>
        <View style={{ position: "absolute", right: 12 }}>
          {this.props.rightElements}
        </View>
      </View>
    );
  }
}
