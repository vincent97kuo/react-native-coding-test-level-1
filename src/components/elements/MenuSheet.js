import React, { Component, createRef } from "react";

import { Text, TouchableOpacity, View, TouchableWithoutFeedback, Alert, ScrollView, } from "react-native";
import Colors from "../../constants/Colors";

import TextField from "./TextField";
import Label from "./Label";

import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
  renderers,
} from "react-native-popup-menu";
import Layout from "../../constants/Layout";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

const { SlideInMenu } = renderers;

export default class MenuSheet extends Component {
  static propTypes = {};
  constructor(props) {
    super(props);

    this.menuRef = createRef();
  }

  render() {
    return (
      <Menu
        ref={this.menuRef}
        name={this.props.name || "unknown"}
        renderer={SlideInMenu}
      //onSelect={value => this.selectNumber(value)}
      >
        <MenuTrigger>
          <View style={{ position: 'relative' }}>
            {this.props.children}
            <TouchableOpacity
              style={{
                position: 'absolute',
                top: 0,
                width: '100%',
                height: '100%',
              }}
              onPress={() => {
                if (this.menuRef && !this.props.readonly)
                  this.menuRef.current.open();
              }}>
            </TouchableOpacity>
          </View>
        </MenuTrigger>
        <MenuOptions
          optionsContainerStyle={{
            minHeight: Layout.window.height * 0.35,
            maxHeight: Layout.window.height * 0.6,
          }}
        >
          <View
            style={{
              backgroundColor: Colors.primaryColor,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingHorizontal: Layout.screenPadding,
              height: Layout.textInput,
            }}
          >
            <Label
              fontSize={17}
              style={{
                color: Colors.white,
              }}
            >
              Please select
            </Label>
            <TouchableOpacity onPress={() => {
              if (this.menuRef)
                this.menuRef.current.close();
            }}>
              <MaterialCommunityIcons name='close' color={Colors.white} size={23} />
            </TouchableOpacity>
          </View>
          <ScrollView style={{
            minHeight: Layout.window.height * 0.35,
            maxHeight: Layout.window.height * 0.6 - 50,
          }} >
            <SafeAreaView edges={['bottom']} style={{
              paddingBottom: 50,
            }}>
              {this.props.data.map((r) => (
                <MenuOption
                  key={r[this.props.labelKey]}
                  onSelect={() => this.props.onSelect(r)}
                  style={{
                    borderBottomColor: Colors.lineColor,
                    borderBottomWidth: 1,
                  }}
                >
                  <View
                    style={{
                      padding: Layout.screenPadding,
                      // paddingHorizontal: Layout.screenPadding,
                      paddingVertical: 10,
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                      // borderBottomColor: Colors.lineColor,
                      // borderBottomWidth: 1,
                      // height: 40,
                    }}
                  >
                    <Label color={Colors.primaryText} fontSize={17}>{r[this.props.labelKey]}</Label>
                  </View>
                </MenuOption>
              ))}
            </SafeAreaView>
          </ScrollView>
        </MenuOptions>
      </Menu>
    );
  }
}
