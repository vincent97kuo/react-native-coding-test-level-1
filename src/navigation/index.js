import {createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";
import { createAppContainer } from "react-navigation";
import HomeScreen from "../screens/Home/HomeScreen";
import ContactUsScreen from "../screens/ContactUs/ContactUsScreen";
import CatalogScreen from '../screens/Catalog/CatalogScreen';
import CatalogInfo from '../screens/Catalog/CatalogInfo';

// const navigation = createStackNavigator(
//     {
//         HomeScreen: HomeScreen,
//         ContactUsScreen: ContactUsScreen
//     },
//     {
//         initialRouteName: "HomeScreen"
//     }
// )

// const AppContainer = createAppContainer(navigation)
// export default AppContainer

const Stack = createStackNavigator();

export default function Navigation({ colorScheme }) {
    return (
      <NavigationContainer
        // ref={(nav) => {
        //   NavigationService.setNavigator(nav);
        // }}
        // linking={LinkingConfiguration}
        // theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
      >
        <RootNavigator />
      </NavigationContainer>
    );
}

function RootNavigator() {
  return (
    <Stack.Navigator
        screenOptions={{
            headerShown: false
        }}
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="ContactUsScreen" component={ContactUsScreen} />
      <Stack.Screen name="CatalogScreen" component={CatalogScreen} />
      <Stack.Screen name="CatalogInfo" component={CatalogInfo} />
    </Stack.Navigator>
  );
}