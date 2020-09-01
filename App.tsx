import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Navigation from "./navigation";
import { Ionicons } from "@expo/vector-icons";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { Asset } from "expo-asset";

import one from "./assets/images/one.jpeg";
import two from "./assets/images/two.jpeg";
import three from "./assets/images/three.jpeg";
import four from "./assets/images/four.jpeg";
import five from "./assets/images/five.jpeg";
import six from "./assets/images/six.jpeg";

const IMAGES = [one, two, three, four, five, six];
export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
  };

  loadAssetsAsync = async () => {
    await Font.loadAsync({
      "space-mono": require("./assets/fonts/SpaceMono-Regular.ttf"),
      "OpenSans-Regular": require("./assets/fonts/OpenSans-Regular.otf"),
    });
    const imageAssets = cacheImages(IMAGES);
    await Promise.all([...imageAssets]);
    this.setState({
      isLoadingComplete: true,
    });
  };

  async componentDidMount() {
    try {
      await SplashScreen.preventAutoHideAsync();
    } catch (e) {
      console.log(e);
    }

    await this.loadAssetsAsync();
    await SplashScreen.hideAsync();
  }

  render() {
    if (!this.state.isLoadingComplete) {
      return null;
    } else {
      return (
        <SafeAreaProvider>
          <Navigation colorScheme={"light"} />
          <StatusBar />
        </SafeAreaProvider>
      );
    }
  }
}

function cacheImages(images: any) {
  return images.map((image: any) => {
    if (typeof image === "string") {
      return Image.prefetch(image);
    }
    return Asset.fromModule(image).downloadAsync();
  });
}
