import React, { Component } from "react";

import { Text } from "react-native";
import Colors from "../../constants/Colors";

export default class Label extends Component {
  render() {
    return (
      <Text
        style={{
          color: this.props.color || Colors.primaryLabel,
          fontSize: this.props.fontSize || 15,
          fontWeight: this.props.fontWeight || "500",
          ...this.props.style,
        }}
        numberOfLines={this.props.numberOfLines || null}
      >
        {this.props.children}
      </Text>
    );
  }
}
