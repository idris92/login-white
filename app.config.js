
import 'dotenv/config';



export default ({ config }) => ({
  ...config,
  "expo": {
    "name": process.env.EXPO_PUBLIC_APP_NAME ?? config.name,
    "slug": process.env.EXPO_PUBLIC_BRAND ?? config.slug,
    "icon": process.env.EXPO_PUBLIC_ICON,
    "version": "1.0.0",
    "orientation": "portrait",
    "scheme": "contextclass",
    "userInterfaceStyle": "automatic",
    "newArchEnabled": true,
    "ios": {
      "supportsTablet": true
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/images/adaptive-icon.png",
        "backgroundColor": "#ffffff"
      },
      "edgeToEdgeEnabled": true
    },
    "web": {
      "bundler": "metro",
      "output": "static",
      "favicon": "./assets/images/favicon.png"
    },
    "plugins": [
      "expo-router",
      [
        "expo-splash-screen",
        {
          "image": "./assets/images/splash-icon.png",
          "imageWidth": 200,
          "resizeMode": "contain",
          "backgroundColor": "#ffffff"
        }
      ]
    ],
    "experiments": {
      "typedRoutes": true
    },
  }
});
