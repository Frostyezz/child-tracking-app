import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.example.app",
  appName: "Safemode",
  webDir: "out",
  server: {
    androidScheme: "https",
  },
  plugins: {
    CapacitorHttp: {
      enabled: true,
    },
  },
};

export default config;
