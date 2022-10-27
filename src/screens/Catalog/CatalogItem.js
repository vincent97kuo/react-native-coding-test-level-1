import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Image, ImageBackground, Text, View } from "react-native";

import Colors from "../../constants/Colors";
import Layout from "../../constants/Layout";
import Label from "../../components/elements/Label";
import Hint from "../../components/elements/Hint";
import H3 from "../../components/elements/H3";
import H2 from "../../components/elements/H2";
import { Feather, MaterialCommunityIcons, FontAwesome } from "@expo/vector-icons";
import moment from "moment";
import CustomButton from "../../components/elements/CustomButton";

// const HALAL_BG = require("../../assets/images/background/banner3.jpg");

class CatalogItem extends Component {
  static propTypes = {};
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { data } = this.props;

    return (
      <View
        style={[
          {
            backgroundColor: Colors.black,
          },
        ]}
      >
        
        <View
          style={[
            {
                position: "relative",
                flexDirection: "row",
                alignItems: "flex-end",
                justifyContent: 'space-between',
                borderWidth: 0.2,
                padding: Layout.screenPadding,
                height: 70,
                margin: 30,
                borderColor: "black",
                borderRadius: 10,
                borderBottomColor: 'black',
                backgroundColor: 'black',
                shadowColor: "black",
                shadowOffset: {
                    width: 0,
                    height: 2
                },
                shadowOpacity: 1,
                shadowRadius: 4,
            },
          ]}
        >
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: `100%`,
                // width: Layout.window.width - 15 - Layout.screenPadding * 2,
              }}
            >
                <View 
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    paddingLeft: 20,
                  }}
                >
                  <Feather name="user" size={Layout.platform === 'ios' ? 31 : 29} color={Colors.primaryColor} />
                  <View style={{ paddingLeft: 5 }}>
                    <Text style={{ color: Colors.primaryColor, fontSize: 12, fontWeight: '600' }}>Name</Text>
                    <Text style={{ color: Colors.primaryColor, fontWeight: '300'}}>{data.name}</Text>
                  </View>
                </View>

                <View 
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginRight: 20,
                  }}
                >
                    <CustomButton
                        fontSize={16}
                        color={Colors.primaryColor}
                        style={{
                            backgroundColor: Colors.primaryDark,
                            borderWidth: 0.2,
                            borderRadius: 40,
                            width: 60,
                            height: 35,
                            paddingHorizontal: -15,
                            paddingVertical: -18,
                        }}
                        onPress={() => {
                            this.props.navigation.navigate('CatalogInfo', {
                                name: data.name,
                            })
                        }}
                    >
                        View
                    </CustomButton>
              </View>
            </View>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
});

export default connect(mapStateToProps)(CatalogItem);
