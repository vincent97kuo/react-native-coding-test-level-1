import React, { Component } from "react";

import { View, TouchableOpacity, Alert } from "react-native";
import Colors from "../../constants/Colors";
import { MaterialIcons } from "@expo/vector-icons";
import H2 from "./H2";
import H3 from "./H3";
import Layout from "../../constants/Layout";

export default class Header extends Component {
  render() {
    return (
      <View
        style={{
          flexDirection: "row",
          paddingVertical: 13,
          paddingHorizontal: 12,
          alignItems: "center",
          // backgroundColor: Colors.primaryColor,
          // height: 60,
          height: Layout.headerHeight,
        }}
      >
        {this.props.hideBack === undefined && (
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.goBack();
            }}
          >
            <MaterialIcons
              name="chevron-left"
              color={this.props.iconColor || Colors.primaryText}
              size={30}
              style={{ marginRight: 15 }}
            />
          </TouchableOpacity>
        )}
        <H3
          fontSize={20}
          color={this.props.color || Colors.primaryText}
          fontWeight="700"
          style={{
            marginLeft: this.props.hideBack ? 5 : 0,
          }}
        >
          {this.props.title}
        </H3>
        <View style={{ position: "absolute", right: 12 }}>
          {this.props.rightElements}
        </View>
      </View>
    );
  }
}
