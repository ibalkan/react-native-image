import React from "react";
import { Button } from "react-native";
import { View } from "react-native";
import { Text, StyleSheet } from "react-native";

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Button 
        onPress={() => navigation.navigate('Components')}
        title="Go to Components demo"/>

      <Button
        onPress={() => navigation.navigate('List')}
        title="Go to List demo"
      />

      <Button
        onPress={() => navigation.navigate('Image')}
        title="Go to Image demo"
      />

      <Button
        onPress={() => navigation.navigate('Counter')}
        title="Go to Counter demo"
      />

<Button
        onPress={() => navigation.navigate('Color')}
        title="Go to Color demo"
      />
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});
 
export default HomeScreen;