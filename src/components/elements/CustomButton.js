import React, { Component } from "react";

import { View, TouchableOpacity } from "react-native";
import Colors from "../../constants/Colors";

import { Button } from "react-native-elements";

export default class CustomButton extends Component {
  render() {
    const { rounded } = this.props;

    return (
      <View
        style={
          
          {
              // width: "100%",
            }
        
        }
      >
        <Button
          title={this.props.children || "N/A"}
          type={this.props.type || "solid"}
          loading={this.props.loading || false}
          icon={this.props.icon || null}
          buttonStyle={[
            {
              backgroundColor:
                this.props.backgroundColor ||
                (this.props.revert ? "white" : Colors.primaryColor),
              // borderRadius: rounded ? 100 : 999,
              borderRaius: 10,
              // paddingVertical: rounded ? 14 : 10,
              // paddingTop: 12,
              // height: this.props.large ? 60 : 45,
              paddingHorizontal: 15,
              paddingVertical: 18,
              borderWidth: 2,
              borderColor: this.props.borderColor || Colors.primaryColor,
              // width: "100%",
              // borderWidth: 1.5,
              // borderColor: this.props.revert
              //   ? Colors.secondaryColor
              //   : Colors.primaryColor,
            },
            this.props.style,
          ]}
          titleStyle={[
            {
              fontSize: this.props.fontSize || 23,
              fontWeight: "600",
              color: this.props.revert
                ? Colors.secondaryColor
                : this.props.color || Colors.primaryDark,
              lineHeight: this.props.fontSize || 23,
              // marginLeft: 15
            },
            this.props.titleStyle,
          ]}
          iconContainerStyle={{
            paddingRight: 20,
          }}
          disabled={this.props.disabled || false}
          onPress={this.props.onPress}
        />
        {this.props.endIcon && (
          <TouchableOpacity
            onPress={this.props.onPress}
            style={{
              position: "absolute",
              right: 0,
              top: 0,
              paddingTop: 5,
              bottom: 0,
              paddingRight: 20,
              paddingLeft: 20,
              backgroundColor: this.props.revert ? null : "rgba(0,0,0,.2)",
              borderTopRightRadius: 100,
              borderBottomRightRadius: 100,
            }}
          >
            {this.props.endIcon}
          </TouchableOpacity>
        )}
      </View>
    );
  }
}
