import { Button, StyleSheet, Text, View, StatusBar } from 'react-native';
import Navigation from './src/navigation/index'
import Colors from './src/constants/Colors';
import Layout from './src/constants/Layout';

import store from "./src/config/store";
import { Provider } from "react-redux";

if (__DEV__) {
  import("./src/redux/_ReactotronConfig").then(() =>
    console.log("Reactotron Configured")
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <View style={{ flex: 1 }}>
        <Navigation />
        <StatusBar
            // backgroundColor={Colors.primaryColor}
            // barStyle="light-content"
        />
      </View>
    </Provider>
    
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     // alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
