//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, Button, ScrollView, Dimensions } from "react-native";
import { Card, ListItem, Icon } from "react-native-elements";
import Separator from "./Separator";

const { width, height } = Dimensions.get('window')

// create a component
const Newscard = ({ item }) => {
  return (
    <View style={styles.container}>
      <Card containerStyle={styles.secondCardContainer}>
        <View style={{ width: 300, alignItems: "left" }}>
          <Text style={styles.secondCardTitleText}>{item.title}</Text>
        </View>
        <Separator />

        <View style={{ width: 300, flexDirection: "row" }}>
          <Card.Image
            style={styles.image}
            source={item.urlToImage ? { uri: item.urlToImage } : null}
          ></Card.Image>
          <ScrollView>
            <Text>{item.description}</Text>
          </ScrollView>
        </View>
        <Separator />
        <View style={{ flexDirection: "row" }}>
          <Text style={{ flex: 1 }}>The Date</Text>
          <Button style={{ flex: 1 }} title="VIEW NOW"></Button>
        </View>
      </Card>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  secondCardContainer: {
    alignItems: "center",
    borderRadius: 20,
    borderWidth: 6,
  },
  secondCardTitleText: {
    fontSize: 24,
    width: "100%",
    alignItems: "flex-start",
  },
  image: {
    height: height / 6,
    marginLeft: width * 0.05,
    marginRight: width * 0.05,
    marginVertical: height * 0.02,
  },
});

//make this component available to the app
export default Newscard;
