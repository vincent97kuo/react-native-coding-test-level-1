import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Pressable, Modal, Alert, } from 'react-native';
import Header from '../../components/elements/Header';
import Colors from '../../constants/Colors';
import Layout from '../../constants/Layout';
import TextField2 from '../../components/elements/TextField2';
import Label from '../../components/elements/Label';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment';
import { MaterialCommunityIcons, Feather } from "@expo/vector-icons";
import CustomButton from '../../components/elements/CustomButton';
import H3 from '../../components/elements/H3';
import H1 from '../../components/elements/H1';

class ContactUsScreen extends Component{
    static propTypes = {};
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            dob: new Date(),

            modalVisible: false,
            setDatePickerVisibility: false,
        };

        this.onSubmit = this.onSubmit.bind(this);
        this.showMode = this.showMode.bind(this);
        this.displayDatepicker = this.displayDatepicker.bind(this);
        this.changeSelectedDate = this.changeSelectedDate.bind(this);
        this.selectDate = this.selectDate.bind(this);
        this.showDatePicker = this.showDatePicker.bind(this);
        this.hideDatePicker = this.hideDatePicker.bind(this);
        this.handleConfirm = this.handleConfirm.bind(this);
    }

    onSubmit() {
        const { name, email } = this.state;

        if (name === '') {
            Alert.alert('Please input name!');
            return;
        }

        let stringOnly = name.replace(/[^a-z]/gi, '');
        this.setState({ name: stringOnly })

        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        if (reg.test(email) === false) {
            Alert.alert("Please enter a valid email!");
            return;
        }


        this.setModalVisible(true)
    }

    selectDate(event, date) {
        this.setState({
          dob: date,
        });
    }

    showMode(currentMode) {
        this.setState({ setShow: true });
        this.setState({ setMode: currentMode });
    }

    displayDatepicker() {
        this.showMode("date");
    }

    changeSelectedDate(event, selectedDate) {
        const currentDate = selectedDate || this.state.dob;

        this.setState({ dob: currentDate });
    }

    showDatePicker() {
        this.setState({ setDatePickerVisibility: true });
    }

    hideDatePicker() {
        this.setState({ setDatePickerVisibility: false });
    }

    handleConfirm(date) {
        console.log("A date has been picked: ", date);
        this.setState({
        //   dob: CommonFunctions.formatDate(date, "YYYY-MM-DD"),
          dob: moment(date).format("YYYY-MM-DD")
        });
        console.log("The date: ", this.state.dob);
        this.hideDatePicker();
    }

    setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
    }

    render() {
        const { modalVisible, name, email, dob } = this.state;

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
                    title="Contact Us"
                />
                <View style={{ marginTop: 10, marginBottom: 10 , padding: 10 }}>
                  <Label
                    style={{
                      color: Colors.white,
                    }}
                  >
                    Name
                  </Label>
                  <TextField2
                    placeholder="Please enter your name"
                    value={this.state.name}
                    onChangeText={(name) => this.setState({ name })}
                  />
                </View>
                <View style={{ marginTop: 10, marginBottom: 10 , padding: 10 }}>
                  <Label
                    style={{
                      color: Colors.white,
                    }}
                  >
                    Email Address
                  </Label>
                  <TextField2
                    placeholder="Please enter your email address"
                    value={this.state.email}
                    onChangeText={(email) => this.setState({ email })}
                  />
                </View>
                <View style={{ marginTop: 10, marginBottom: 10 , padding: 10 }}>
                    <Label
                        style={{
                        color: Colors.white,
                        }}
                    >
                    Date of Birth
                  </Label>
                  <DateTimePickerModal
                    isVisible={this.state.setDatePickerVisibility}
                    mode="date"
                    onConfirm={this.handleConfirm}
                    onCancel={this.hideDatePicker}
                    maximumDate={new Date()}
                  />
                  {this.state.dob && (
                    <TextField2
                      placeholder="Date of Birth"
                      readonly
                      value={this.state.dob}
                      onChangeText={(dob) => this.setState({ dob })}
                      rightIcon={
                        <View
                          style={{
                            alignItems: "center",
                            justifyContent: "center",
                            width: 40,
                            paddingTop: 2,
                            position: "absolute",
                            right: 0,
                          }}
                        >
                          <TouchableOpacity onPress={this.showDatePicker}>
                            <MaterialCommunityIcons
                              name={
                                this.state.dob
                                  ? "calendar-month"
                                  : "calendar-month-outline"
                              }
                              color={Colors.primaryHint}
                              size={23}
                            />
                          </TouchableOpacity>
                        </View>
                      }
                    />
                  )}
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
                            marginTop: 20,
                            backgroundColor: Colors.primaryDark,
                            borderWidth: 0,
                            borderRadius: 15,
                        }}
                        onPress={() => {
                            this.onSubmit()
                        }}
                    >
                        Submit
                    </CustomButton>
                </View>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        // Alert.alert("Modal has been closed.");
                        this.setModalVisible(!modalVisible);
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <View style={{ paddingBottom: 20, }}>
                                <H3 color={'rgb(242,210,152)'} style={{ paddingBottom: 20, textAlign: 'center' }}>Overview</H3>
                                <Text
                                    style={{
                                        color: 'white'
                                    }}
                                >
                                    Name:
                                </Text>
                                <Text     
                                    style={{
                                        color: Colors.primaryColor,
                                        borderWidth: 0.2,
                                        borderColor: Colors.white,
                                        paddingTop: 5,
                                        paddingBottom: 5,
                                        paddingLeft: 80,
                                        paddingRight: 80,
                                        textAlign: 'center',
                                        minWidth: '100%'
                                    }}
                                >
                                    {name}
                                </Text>
                            </View>
                            <View style={{ paddingBottom: 20 }}>
                                <Text
                                    style={{
                                        color: 'white'
                                    }}
                                >
                                    Email:
                                </Text>
                                <Text     
                                    style={{
                                        color: Colors.primaryColor,
                                        borderWidth: 0.2,
                                        borderColor: Colors.white,
                                        paddingTop: 5,
                                        paddingBottom: 5,
                                        paddingLeft: 80,
                                        paddingRight: 80,
                                        textAlign: 'center',
                                        minWidth: '100%'
                                    }}
                                >
                                    {email}
                                </Text>
                            </View>
                            <View style={{ paddingBottom: 20 }}>
                                <Text
                                    style={{
                                        color: 'white'
                                    }}
                                >
                                    Date of Birth:
                                </Text>
                                <Text     
                                    style={{
                                        color: Colors.primaryColor,
                                        borderWidth: 0.2,
                                        borderColor: Colors.white,
                                        paddingTop: 5,
                                        paddingBottom: 5,
                                        paddingLeft: 80,
                                        paddingRight: 80,
                                        textAlign: 'center',
                                        minWidth: '100%'
                                    }}
                                >
                                    {dob}
                                </Text>
                            </View>
                        </View>
                        <Pressable
                            // style={[styles.button, styles.buttonClose]}
                            style={{ paddingTop: 15}}
                            onPress={() => {
                                this.setModalVisible(!modalVisible);
                                clearInterval(this.timer);
                            }}
                        >
                            {/* <Text style={styles.textStyle}>x</Text> */}
                            <Feather name="x-circle" style={styles.featherIcon} size={Layout.platform === 'ios' ? 32 : 29} color={Colors.gray} />
                        </Pressable>
                    </View>
                </Modal>
            </View>
        );
    }
  }

  const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    //   marginTop: 22,
      backgroundColor: "rgba(89,89,89, 0.8)",
    //   opacity: 0.1
        // backgroundColor: "transparent",
    },
    modalView: {
      margin: 20,
      backgroundColor: "rgb(27,27,29)",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 1,
        shadowRadius: 4,
      elevation: 5
    },
    button: {
      borderRadius: 20,
      borderColor: 'rgb(242,210,152)',
      padding: 10,
      elevation: 2
    },
    buttonOpen: {
      backgroundColor: "#F194FF",
    },
    buttonClose: {
      backgroundColor: "#2196F3",
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    },
    featherIcon: {
        fontWeight: "10"
    }
});

  export default ContactUsScreen;