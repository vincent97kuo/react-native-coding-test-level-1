import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, StatusBar, } from 'react-native';
import Header from '../../components/elements/Header';
import CustomButton from '../../components/elements/CustomButton';
import Colors from '../../constants/Colors';
import Layout from '../../constants/Layout';

class HomeScreen extends Component{
    render() {
        return (
            <View
                style={{
                    paddingTop: 50,
                    backgroundColor: Colors.black,
                    height: Layout.window.height
                }}
            >
                <Header
                    hideBack
                    iconColor={"grey"}
                    navigation={this.props.navigation}
                    color={'white'}
                    title="Home"
                />
                <View
                    style={{
                        padding: 10,
                        // alignItems: 'center',
                        shadowColor: "black",
                        shadowOffset: {
                            width: 0,
                            height: 5
                        },
                        shadowOpacity: 0.4,
                        shadowRadius: 9,
                    }}
                >
                    <CustomButton
                        fontSize={16}
                        color={Colors.primaryColor}
                        style={{
                            backgroundColor: Colors.primaryDark,
                            borderWidth: 0,
                            borderRadius: 40,
                        }}
                        onPress={() => {
                            this.props.navigation.navigate('ContactUsScreen')
                        }}
                    >
                        Contact Us
                    </CustomButton>
                </View>
                
                <View
                    style={{
                        padding: 10,
                        // alignItems: 'center',
                        shadowColor: "black",
                        shadowOffset: {
                            width: 0,
                            height: 5
                        },
                        shadowOpacity: 0.4,
                        shadowRadius: 9,
                    }}
                >
                    <CustomButton
                        fontSize={16}
                        color={Colors.primaryColor}
                        style={{
                            backgroundColor: Colors.primaryDark,
                            borderWidth: 0,
                            borderRadius: 40,
                        }}
                        onPress={() => {
                            this.props.navigation.navigate('CatalogScreen')
                        }}
                    >
                        View Catalog
                    </CustomButton>
                </View>
            </View>
        );
    }
  }
  export default HomeScreen;