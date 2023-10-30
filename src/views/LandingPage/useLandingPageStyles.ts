import { createStyles, rem } from "@mantine/core";

export const useLandingPageStyles = createStyles((theme) => ({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    height: typeof window !== "undefined" ? window.innerHeight : "100vh",
  },
}));
