import PropTypes from "prop-types";
import React, { Component } from "react";
import {
  StatusBar,
  View,
  ScrollView,
  TouchableWithoutFeedback,
  Dimensions,
  Image,
  Keyboard,
  TouchableOpacity,
  Platform,
  ImageBackground,
  Text,
} from "react-native";
import { connect } from "react-redux";
import { Button } from "react-native-elements";
import Colors from "../../constants/Colors";
import H1 from "../../components/elements/H1";
import Label from "../../components/elements/Label";
import Layout from "../../constants/Layout";
import CustomButton from "../../components/elements/CustomButton";
import Hint from "../../components/elements/Hint";
import H3 from "../../components/elements/H3";
import H2 from "../../components/elements/H2";
import Header from "../../components/elements/Header";
import CatalogItem from "./CatalogItem";
import { getCatalog } from "../../redux/actions";
import KeyboardAwareScrollView from '../../components/elements/KeyboardAwareScrollView';

class CatalogScreen extends Component {
  static propTypes = {};
  constructor(props) {
    super(props);
    this.state = {

    };
    this.getCatalogList = this.getCatalogList.bind(this);
  }

  componentDidMount() {
    this.getCatalogList(true);
  }
  componentWillUnmount() {}

  componentDidUpdate(prevProps) {
    if (prevProps.list !== this.props.list) {
        console.log('listttttt', this.props.list)
    }
  }

  getCatalogList(refresh = false) {
    this.props.dispatch(getCatalog(refresh));
  }

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
            iconColor={"white"}
            navigation={this.props.navigation}
            color={'white'}
            title="Catalog"
        />
        <KeyboardAwareScrollView
            enableOnAndroid
            bounces={false}
            resetScrollToCoords={{ x: 0, y: 0 }}
            contentContainerStyle={{
                backgroundColor: Colors.backgroundColor,
                paddingBottom: Layout.window.height * 0.02,
                minHeight: Layout.window.height,
            }}
        >
            <View style={{
                minHeight: Layout.window.height,
                marginBottom: Layout.window.height * 0.04,
            }}>
                {
                    this.props.list.map(r => (
                        <View>
                            <CatalogItem
                                navigation={this.props.navigation}
                                data={r}
                            />
                        </View>
                    ))
                }
            </View>
        </KeyboardAwareScrollView>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  list: state.catalog.list,
//   fetching: state.catalog.fetching,
});

export default connect(mapStateToProps)(CatalogScreen);
