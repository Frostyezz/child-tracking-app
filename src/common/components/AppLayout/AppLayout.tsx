import React from "react";
import { AppShell } from "@mantine/core";
import RouterTransition from "../RouterTransition/RouterTransition";

type AppLayoutProps = {
  children: React.ReactNode;
};

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <AppShell padding={0}>
      <RouterTransition />
      {children}
    </AppShell>
  );
};

export default AppLayout;
