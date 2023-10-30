import React, { useEffect } from "react";
import { AppShell } from "@mantine/core";
import AppFooter from "../AppFooter/AppFooter";

type AppLayoutProps = {
  children: React.ReactNode;
};

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  const [appHeight, setAppHeight] = React.useState<number>(0);

  useEffect(() => {
    setAppHeight(window.innerHeight);
  }, []);

  return (
    <AppShell
      styles={{ main: { minHeight: appHeight } }}
      footer={<AppFooter />}
      padding={0}
    >
      {children}
    </AppShell>
  );
};

export default AppLayout;
