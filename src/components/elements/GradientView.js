import { LinearGradient } from "expo-linear-gradient";
import React, { Component } from "react";

export default class GradientView extends Component {
  render() {
    return (
      <LinearGradient
        start={{
          x: 1,
          y: 0,
        }}
        end={{
          x: 0,
          y: 1,
        }}
        colors={["#C4AC82", "#F4DAA9", "#C4AC82"]}
        style={this.props.style||{}}
      >
        {this.props.children}
      </LinearGradient>
    );
  }
}
