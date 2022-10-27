import React, { Component } from "react";
import { connect } from "react-redux";
import { Appearance, Image, ImageBackground, Modal, Pressable, StatusBar, StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";

import Colors from "../../constants/Colors";
import Layout from "../../constants/Layout";
import Label from "../../components/elements/Label";
import Hint from "../../components/elements/Hint";
import H3 from "../../components/elements/H3";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import H2 from "../../components/elements/H2";
import Header from "../../components/elements/Header";
import KeyboardAwareScrollView from "../../components/elements/KeyboardAwareScrollView";
import { getCatalogDetail, } from "../../redux/actions";
import CustomButton from "../../components/elements/CustomButton";
import H1 from "../../components/elements/H1";

class CatalogInfo extends Component {
    static propTypes = {};
    constructor(props) {
        super(props);
        this.state = {
            showDate: false,
            id: '',
            name: '',
            type: '',
            type2: '',
            height: '',
            weight: '',
            image: '',
        };
    }

    componentDidMount() {
        if (this.props.route.params && this.props.route.params.name) {
            const { name } = this.props.route.params
            if (name) {
                this.setState({ name })
                this.props.dispatch(getCatalogDetail(name));
            }
        }
    }

    componentDidUpdate(prevPros) {
        if (prevPros.detail !== this.props.detail) {
            this.initData(this.props.detail)
        }
    }

    componentWillUnmount(){
    }

    initData(detail) {
        this.setState({
            id: detail.id,
            image: detail.sprites.front_default,
            height: detail.height,
            weight: detail.weight,
        })
    }

    render() {
        const { id, name, image, height, weight } = this.state;

        return (
            <View
                style={{ 
                    paddingTop: 50,
                    backgroundColor: Colors.black,
                    height: Layout.window.height
                 }}
            >
                    <Header
                        iconColor={"white"}
                        backgroundColor={Colors.black}
                        color={'white'}
                        navigation={this.props.navigation}
                        title="Catalog Detail"
                    />
                    <KeyboardAwareScrollView
                        enableOnAndroid
                        bounces={false}
                        resetScrollToCoords={{ x: 0, y: 0 }}
                        contentContainerStyle={{
                            backgroundColor: Colors.black,
                            paddingBottom: 50,
                            // minHeight: Layout.window.height,
                            // minHeight: 1090
                        }}
                    >
                        <View>
                            <View 
                                style={{
                                    width: '100%',
                                    alignItems: "center",
                                    paddingTop: 30,
                                }}
                            >
                                <View
                                    style={{
                                        position: "relative",
                                        borderWidth: 0.2,
                                        borderColor: 'black', 
                                        borderRadius: 20,
                                        height: 400,
                                        width: "70%",
                                        shadowColor: "black",
                                        shadowOffset: {
                                            width: 0,
                                            height: 1
                                        },
                                        shadowOpacity: 0.4,
                                        shadowRadius: 5,
                                    }}
                                >
                                    <ImageBackground 
                                        source={{ uri: image }} 
                                        // source={Constants.imageHost + psvchimg}
                                        resizeMode="cover" 
                                        style={{
                                            position: "absolute",
                                            width: '100%',
                                            height: '100%',
                                            overflow: "hidden",
                                            borderRadius: 20,
                                            backgroundColor: 'black',
                                        }}
                                    />
                                </View>
                                <View
                                    style={{
                                        width: '100%',
                                        paddingTop: 50,
                                        paddingLeft: 20,
                                    }}
                                >
                                    <H1 fontSize={20} color={Colors.primaryColor}>Pokemon ID</H1>
                                    <Text style={{ color: Colors.white, fontSize: 18 }}>{id}</Text>
                                </View>
                                <View
                                    style={{
                                        width: '100%',
                                        paddingTop: 30,
                                        paddingLeft: 20,
                                    }}
                                >
                                    <H1 fontSize={20} color={Colors.primaryColor}>Pokemon Name</H1>
                                    <Text style={{ color: Colors.white, fontSize: 18 }}>{name.toUpperCase()}</Text>
                                </View>
                                <View
                                    style={{
                                        width: '100%',
                                        paddingTop: 30,
                                        paddingLeft: 20,
                                    }}
                                >
                                    <H1 fontSize={20} color={'rgb(242,210,152)'}>Weight</H1>
                                    <Text style={{ color: Colors.white, fontSize: 18 }}>{height} kg</Text>
                                </View>
                                <View
                                    style={{
                                        width: '100%',
                                        paddingTop: 30,
                                        paddingLeft: 20,
                                    }}
                                >
                                    <H1 fontSize={20} color={'rgb(242,210,152)'}>Height</H1>
                                    <Text style={{ color: Colors.white, fontSize: 18 }}>{weight} cm</Text>
                                </View>
                            </View>
                        </View>
                    </KeyboardAwareScrollView>
            </View>
        );
    }
}

const mapStateToProps = (state) => ({
    detail: state.catalog.detail,
});

export default connect(mapStateToProps)(CatalogInfo);
