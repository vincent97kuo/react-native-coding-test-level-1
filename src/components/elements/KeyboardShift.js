import {PropTypes} from 'prop-types';
import React, {Component} from 'react';
import {
  Animated,
  Dimensions,
  Keyboard,
  StyleSheet,
  TextInput,
  UIManager,
} from 'react-native';

const {State: TextInputState} = TextInput;

export default class KeyboardShift extends Component {
  state = {
    shift: new Animated.Value(0),
  };

  componentWillMount() {
    this.keyboardDidShowSub = Keyboard.addListener(
      'keyboardDidShow',
      this.handleKeyboardDidShow,
    );
    this.keyboardDidHideSub = Keyboard.addListener(
      'keyboardDidHide',
      this.handleKeyboardDidHide,
    );
  }

  componentWillUnmount() {
    if (this.keyboardDidShowSub) this.keyboardDidShowSub.remove();
    if (this.keyboardDidHideSub) this.keyboardDidHideSub.remove();
  }

  render() {
    const {styles} = this.props;
    const {shift} = this.state;
    return (
      <Animated.View style={[styles, {transform: [{translateY: shift}]}]}>
        {this.props.children}
      </Animated.View>
    );
  }

  handleKeyboardDidShow = (event) => {
    const {height: windowHeight} = Dimensions.get('window');
    const keyboardHeight = event.endCoordinates.height;
    const currentlyFocusedField = TextInputState.currentlyFocusedField();
    UIManager.measure(
      currentlyFocusedField,
      (originX, originY, width, height, pageX, pageY) => {
        const fieldHeight = height;
        const fieldTop = pageY;
        const gap = windowHeight - keyboardHeight - (fieldTop + fieldHeight);
        if (gap >= 0) {
          return;
        }
        Animated.timing(this.state.shift, {
          toValue: gap - 10,
          duration: 300,
          useNativeDriver: true,
        }).start();
      },
    );
  };

  handleKeyboardDidHide = () => {
    Animated.timing(this.state.shift, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

KeyboardShift.propTypes = {
  // children: PropTypes.func.isRequired,
};
