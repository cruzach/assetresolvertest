import * as React from "react";
import { StyleSheet, Image } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
        <Image
          style={{ width: 50, height: 50 }}
          source={require("../assets/images/a.png")}
        />
        <Image
          style={{ width: 50, height: 50 }}
          source={require("../assets/images/i.png")}
        />
        <Image
          style={{ width: 50, height: 50 }}
          source={require("../assets/images/1.jpeg")}
        />
        <Image
          style={{ width: 50, height: 50 }}
          source={require("../assets/images/2.png")}
        />
        <Image
          style={{ width: 50, height: 50 }}
          source={require("../assets/images/3.png")}
        />
        <Image
          style={{ width: 50, height: 50 }}
          source={require("../assets/images/4.png")}
        />
        <Image
          style={{ width: 50, height: 50 }}
          source={require("../assets/images/5.png")}
        />
        <Image
          style={{ width: 50, height: 50 }}
          source={require("../assets/images/e.png")}
        />
        <Image
          style={{ width: 50, height: 50 }}
          source={require("../assets/images/o.png")}
        />
        <Image
          style={{ width: 50, height: 50 }}
          source={require("../assets/images/p.png")}
        />
      </View>
      <Text style={styles.title}>Tab One</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <EditScreenInfo path="/screens/TabOneScreen.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
