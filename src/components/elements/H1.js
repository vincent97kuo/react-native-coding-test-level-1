import React, { Component } from "react";

import { Text } from "react-native";
import Colors from "../../constants/Colors";

export default class H1 extends Component {
  render() {
    return (
      <Text
        style={{
          color: this.props.color || Colors.primaryText,
          fontSize: this.props.fontSize || 26,
          fontWeight: this.props.fontWeight || "700",
          ...this.props.style,
        }}
      >
        {this.props.children}
      </Text>
    );
  }
}