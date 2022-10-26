import React, { Component } from "react";

import { Text } from "react-native";
import Colors from "../../constants/Colors";

export default class Hint extends Component {
  render() {
    return (
      <Text
        style={{
          color: this.props.color || Colors.primaryHint,
          fontSize: this.props.fontSize || 12,
          ...this.props.style,
          fontWeight: this.props.fontWeight || "500",
        }}
      >
        {this.props.children}
      </Text>
    );
  }
}
