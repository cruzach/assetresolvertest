import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Navigation from "./navigation";
import { Ionicons } from "@expo/vector-icons";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { Asset } from "expo-asset";

const IMAGES = [
  require("./assets/images/2.mov"),
  require("./assets/images/2.png"),
  require("./assets/images/3.png"),
  require("./assets/images/4.png"),
  require("./assets/images/5.png"),
  require("./assets/images/favicon.png"),
  require("./assets/images/6.png"),
  require("./assets/images/horizontalone.png"),
  require("./assets/images/icon.png"),
  require("./assets/images/1.jpeg"),
  require("./assets/images/a.png"),
  require("./assets/images/e.png"),
  require("./assets/images/i.png"),
  require("./assets/images/o.png"),
  require("./assets/images/p.png"),
  require("./assets/images/q.png"),
  require("./assets/images/r.png"),
  require("./assets/images/t.png"),
  require("./assets/images/u.png"),
  require("./assets/images/w.png"),
  require("./assets/images/y.png"),
  require("./assets/images/splash.png"),
  require("./assets/images/verticalOne.png"),
];
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

  /*loadAssets = async () => {
    try {
      let result = await Font.loadAsync({
        ...Ionicons.font,
        "space-mono": require("./assets/fonts/SpaceMono-Regular.ttf"),
        "OpenSans-Regular": require("./assets/fonts/OpenSans-Regular.otf"),
      });
      console.log(result);

      const cacheImages = IMAGES.map((image) => {
        return Asset.fromModule(image).downloadAsync();
      });

      let result2 = await Promise.all([...cacheImages]);
      console.log(result2);
    } catch (e) {
      console.warn(e);
    } finally {
      this.setState({ isLoadingComplete: true });
    }
  };*/
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
