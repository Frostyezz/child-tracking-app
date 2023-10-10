import { createStyles } from "@mantine/core";

export const useLoadingScreenStyles = createStyles((theme) => ({
  root: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: typeof window !== "undefined" ? window.innerHeight : "100vh",
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.white,
    zIndex: 10000,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
}));
