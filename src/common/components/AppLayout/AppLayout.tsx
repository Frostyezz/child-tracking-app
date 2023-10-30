import React from "react";
import { AppShell } from "@mantine/core";

type AppLayoutProps = {
  children: React.ReactNode;
};

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return <AppShell padding={0}>{children}</AppShell>;
};

export default AppLayout;
