import { Button, StyleSheet, Text, View, StatusBar } from 'react-native';
import Navigation from './src/navigation/index'
import Colors from './src/constants/Colors';
import Layout from './src/constants/Layout';

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <Navigation />
      <StatusBar
          // backgroundColor={Colors.primaryColor}
          // barStyle="light-content"
      />
    </View>
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
