import { ExpoConfig } from "expo/config";

type Config = ExpoConfig & {
  extra: ExpoConfig["extra"] & {
    appName: string;
  };
};

// module.exports = {

// }

export const config: Config = {
  name: "ci-cd",
  slug: "ci-cd",
  version: "1.0.0",
  orientation: "portrait",
  icon: "./assets/icon.png",
  userInterfaceStyle: "light",
  splash: {
    image: "./assets/splash.png",
    resizeMode: "contain",
    backgroundColor: "#ffffff",
  },
  assetBundlePatterns: ["**/*"],
  web: {
    favicon: "./assets/favicon.png",
  },
  extra: {
    eas: {
      projectId: "5cab9181-8ddb-4f0f-9ecc-626fb1a618d5",
    },
    appName: process.env.EXPO_PUBLIC_APP_NAME ?? "LOCAL (CI/CD)",
  },
  android: {
    package: "com.coyle5.cicd",
  },
  ios: {
    bundleIdentifier: "com.coyle5.cicd",
  },
};

export default config;

// module.exports = {
//   name: "ci-cd",
//   slug: "ci-cd",
//   version: "1.0.0",
//   orientation: "portrait",
//   icon: "./assets/icon.png",
//   userInterfaceStyle: "light",
//   splash: {
//     image: "./assets/splash.png",
//     resizeMode: "contain",
//     backgroundColor: "#ffffff",
//   },
//   assetBundlePatterns: ["**/*"],
//   web: {
//     favicon: "./assets/favicon.png",
//   },
//   extra: {
//     eas: {
//       projectId: "5cab9181-8ddb-4f0f-9ecc-626fb1a618d5",
//     },
//     appName: process.env.EXPO_PUBLIC_APP_NAME ?? "LOCAL (CI/CD)",
//   },
//   android: {
//     package: "com.coyle5.cicd",
//   },
//   ios: {
//     bundleIdentifier: "com.coyle5.cicd",
//   },
// };
