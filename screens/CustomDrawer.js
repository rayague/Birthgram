import { View, Text, SafeAreaView, StyleSheet, Image } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem
} from "@react-navigation/drawer";

export default function CustomDrawer(props) {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/drawer.png")}
        style={styles.drawerImage}
      />
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  drawerImage: {
    width: "100%",
    height: 250,
    objectFit: "cover",
    elevation: 20
  }
});
