import { PropTypes } from "prop-types";
import React, { Component } from "react";
import { Platform, View, Keyboard, RefreshControl } from "react-native";

import KeyboardShift from "./KeyboardShift";
import { KeyboardAwareScrollView as _KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { ActivityIndicator } from "react-native";
import Layout from "../../constants/Layout";

export default class KeyboardAwareScrollView extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this._keyboardDidShow = this._keyboardDidShow.bind(this);
  }

  componentWillMount() {
    this.keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      this._keyboardDidShow
    );
  }

  componentWillUnmount() {
    if (this.keyboardDidHideListener) this.keyboardDidHideListener.remove();
  }

  _keyboardDidShow() {
    // if (Platform.OS === 'ios') this.refs.keyboardAwareScrollView.scrollToEnd();
  }

  render() {
    const {
      children,
      height,
      bounces,
      style,
      contentContainerStyle,
      onScroll,
      scrollEventThrottle,
      refreshing,
      onRefresh,
      extraScrollHeight,
      type = "default"
    } = this.props;
    return (
      <View>
        {type !== "shift" && (
          <_KeyboardAwareScrollView
            // scrollEventThrottle={12220}
            // extraHeight={0}
            // automaticallyAdjustContentInsets={false}
            keyboardShouldPersistTaps="handled"
            extraScrollHeight={extraScrollHeight === undefined ? Layout.window.height * (Layout.platform === 'ios' ? 0.05 : 0.1) : extraScrollHeight}
            style={style}
            contentContainerStyle={contentContainerStyle}
            enableOnAndroid
            bounces={bounces}
            ref="keyboardAwareScrollView"
            resetScrollToCoords={{ x: 0, y: 0 }}
            onScroll={onScroll}
            scrollEventThrottle={scrollEventThrottle}
            refreshControl={
              onRefresh ? (
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
              ) : null
            }
            onMomentumScrollEnd={() => {
              if (this.props.onScollEnd) this.props.onScollEnd();
            }}
            ListFooterComponent={() => (
              <View>
                <View style={{ height: 50 }} />
                {this.props.refreshing && (
                  <View>
                    <ActivityIndicator
                      animating={true}
                      size="small"
                      color={Colors.primaryColor}
                    />
                  </View>
                )}
                <View style={{ height: 50 }} />
              </View>
            )}
          >
            {children}
          </_KeyboardAwareScrollView>
        )}
        {type === "shift" && (
          <KeyboardShift styles={contentContainerStyle}>{children}</KeyboardShift>
        )}
      </View>
    );
  }
}

KeyboardAwareScrollView.propTypes = {
  // children: PropTypes.func.isRequired,
};
