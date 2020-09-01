import { Ionicons } from "@expo/vector-icons";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import * as React from "react";
import { Asset } from "expo-asset";

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();

        // Load fonts
        let result = await Font.loadAsync({
          ...Ionicons.font,
          "space-mono": require("../assets/fonts/SpaceMono-Regular.ttf"),
          "OpenSans-Regular": require("../assets/fonts/OpenSans-Regular.otf"),
        });
        console.log(result);
        let images = [
          require("../assets/images/2.mov"),
          require("../assets/images/2.png"),
          require("../assets/images/3.png"),
          require("../assets/images/4.png"),
          require("../assets/images/5.png"),
          require("../assets/images/favicon.png"),
          require("../assets/images/6.png"),
          require("../assets/images/horizontalone.png"),
          require("../assets/images/icon.png"),
          require("../assets/images/1.jpeg"),
          require("../assets/images/a.png"),
          require("../assets/images/e.png"),
          require("../assets/images/i.png"),
          require("../assets/images/o.png"),
          require("../assets/images/p.png"),
          require("../assets/images/q.png"),
          require("../assets/images/r.png"),
          require("../assets/images/t.png"),
          require("../assets/images/u.png"),
          require("../assets/images/w.png"),
          require("../assets/images/y.png"),
          require("../assets/images/splash.png"),

          require("../assets/images/verticalOne.png"),
        ];

        const cacheImages = images.map(async (image) => {
          return await Asset.fromModule(image).downloadAsync();
        });
        let result2 = await Promise.all(cacheImages);
        console.log(result2);
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}
