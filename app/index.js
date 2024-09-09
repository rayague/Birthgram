import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../screens/HomeScreen";
import ListScreen from "../screens/ListScreen";
import CelebrationScreen from "../screens/CelebrationScreen";
import { Ionicons } from "@expo/vector-icons";
import CustomDrawer from "../screens/CustomDrawer";
import ContactDetailScreen from "../screens/ContactDetailScreen";
import { createStackNavigator } from "@react-navigation/stack";

import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  SafeAreaView,
  StatusBar
} from "react-native";
import "react-native-gesture-handler";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export default function index() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="dodgerblue" />

      <Drawer.Navigator
        initialRouteName="HOME"
        screenOptions={screenDrawerOptions}
        drawerContent={(props) => <CustomDrawer {...props} />}
      >
        <Drawer.Screen
          name="HOME"
          component={HomeScreen}
          options={{
            drawerIcon: () => (
              <Ionicons name="home" size={24} color="dodgerblue" />
            )
          }}
        />
        <Drawer.Screen
          name="LIST"
          component={ListScreen}
          options={{
            drawerIcon: () => (
              <Ionicons name="list" size={24} color="dodgerblue" />
            )
          }}
        />
        <Drawer.Screen
          name="CELEBRATIONS"
          component={CelebrationScreen}
          options={{
            drawerIcon: () => (
              <Ionicons name="gift" size={24} color="dodgerblue" />
            )
          }}
        />
        <Drawer.Screen
          name="DETAILS"
          component={ContactDetailScreen}
          options={{
            drawerItemStyle: { display: "none" },
            drawerIcon: () => (
              <Ionicons name="list" size={24} color="dodgerblue" />
            )
          }}
        />
      </Drawer.Navigator>
    </SafeAreaView>
  );
}
// function ContactDetail() {
//   return (
//     <Stack.Navigator initialRouteName="ContactDetailScreen">
//       <Stack.Screen
//         name="ContactDetailScreen"
//         component={ContactDetailScreen}
//         options={{ title: "Détails du Contact" }}
//       />
//     </Stack.Navigator>
//   );
// }

const screenDrawerOptions = {
  tabBarHideOnKeyboard: true,
  tabBarShowLabel: false,
  headerShown: true,
  headerStyle: {
    backgroundColor: "dodgerblue",
    borderBottomWidth: 2,
    borderBottomColor: "dodgerblue"
  },
  headerTintColor: "white",
  headerTitleStyle: {
    color: "white",
    fontWeight: "bold",
    fontSize: 30
  },
  drawerStyle: {
    backgroundColor: "#fff",
    width: "80%",
    fontWeight: "bold"
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
