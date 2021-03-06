import * as React from "react";
import { Text, View, SafeAreaView, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import BottomTabNavigator from "./src/navigation/TabNavigator";
import Header from "./src/components/Header";
import GooglePlacesAutoCompleteComponent from "./src/components/GooglePlacesAutoCompleteComponent";
import AppState from "./src/context/AppState";

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <GooglePlacesAutoCompleteComponent />
      <NavigationContainer>
        <BottomTabNavigator />
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gray",
  },
});

export default () => {
  return (
    <AppState>
      <App />
    </AppState>
  );
};
