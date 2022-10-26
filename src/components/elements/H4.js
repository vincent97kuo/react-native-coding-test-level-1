import React, { Component } from 'react';

import {
    Text
} from 'react-native';
import Colors from '../../constants/Colors';

export default class H4 extends Component {

    render() {
        return <Text style={{
            color: this.props.color || Colors.primaryText,
            fontSize: this.props.fontSize || 16,
            fontWeight: this.props.fontWeight || '400',
            ...this.props.style,
        }} >{this.props.children}</Text>
    }
}